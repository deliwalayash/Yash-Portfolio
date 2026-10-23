"use client";

import { useState, useEffect } from "react";
import {
  FaTimes,
  FaExpand,
  FaMinus,
  FaChevronUp,
  FaVolumeUp,
  FaVolumeMute,
  FaYoutube,
  FaExternalLinkAlt,
} from "react-icons/fa";

export default function FloatingCornerVideo() {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isMaximized, setIsMaximized] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Close maximized modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isMaximized) {
        setIsMaximized(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMaximized]);

  // Lock background scroll when modal is maximized
  useEffect(() => {
    if (isMaximized) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMaximized]);

  if (!mounted || !isOpen) return null;

  // Video 2: Start Google Ads with ₹500 Per Day (Ai40t_K5DjM)
  // Corner iframe requires mute=1 in modern browsers to begin automatically without user interaction.
  const cornerVideoSrc = `https://www.youtube.com/embed/Ai40t_K5DjM?autoplay=1&mute=${
    isMuted ? 1 : 0
  }&playsinline=1&enablejsapi=1&rel=0&controls=1`;

  // Maximized modal iframe starts with sound enabled because it was triggered by a user click
  const maximizedVideoSrc = `https://www.youtube.com/embed/Ai40t_K5DjM?autoplay=1&mute=0&playsinline=1&enablejsapi=1&rel=0&controls=1`;

  return (
    <>
      {/* Floating Corner PiP Widget */}
      <aside
        className={`floating-corner-video ${
          isMinimized ? "floating-corner-video--minimized" : ""
        } ${isMaximized ? "floating-corner-video--hidden" : ""}`}
        aria-label="Featured Google Ads Video"
      >
        {/* Top Header bar with title & controls */}
        <div
          className="floating-corner-video__header"
          onClick={() => {
            if (isMinimized) setIsMinimized(false);
          }}
          style={{ cursor: isMinimized ? "pointer" : "default" }}
          title={isMinimized ? "Click to restore video" : undefined}
        >
          <div className="floating-corner-video__title-wrap">
            <span className="floating-corner-video__live-dot" />
            <span className="floating-corner-video__title">
              Start Google Ads ₹500/day
            </span>
          </div>

          <div className="floating-corner-video__actions">
            {/* Audio Toggle (Mute / Unmute) */}
            <button
              type="button"
              className="floating-corner-video__btn"
              onClick={(e) => {
                e.stopPropagation();
                setIsMuted(!isMuted);
              }}
              title={isMuted ? "Unmute Audio" : "Mute Audio"}
              aria-label={isMuted ? "Unmute Audio" : "Mute Audio"}
            >
              {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
            </button>

            {/* Minimize / Restore Button */}
            <button
              type="button"
              className="floating-corner-video__btn floating-corner-video__btn--minimize"
              onClick={(e) => {
                e.stopPropagation();
                setIsMinimized(!isMinimized);
              }}
              title={isMinimized ? "Restore video" : "Minimize video"}
              aria-label={isMinimized ? "Restore video" : "Minimize video"}
            >
              {isMinimized ? <FaChevronUp /> : <FaMinus />}
            </button>

            {/* Maximize & Play on Screen Button */}
            <button
              type="button"
              className="floating-corner-video__btn floating-corner-video__btn--maximize"
              onClick={(e) => {
                e.stopPropagation();
                setIsMaximized(true);
              }}
              title="Maximize & Play on Screen"
              aria-label="Maximize & Play on Screen"
            >
              <FaExpand />
            </button>

            {/* Close Button */}
            <button
              type="button"
              className="floating-corner-video__btn floating-corner-video__btn--close"
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(false);
              }}
              title="Close video"
              aria-label="Close video"
            >
              <FaTimes />
            </button>
          </div>
        </div>

        {/* Video Frame & Channel Footer (hidden when minimized or maximized) */}
        {!isMinimized && !isMaximized && (
          <>
            <div className="floating-corner-video__frame">
              <iframe
                src={cornerVideoSrc}
                title="Start Google Ads with 500 per day by Yash Deliwala"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
            <div className="floating-corner-video__footer">
              <a
                href="https://www.youtube.com/@yashgoogleads?sub_confirmation=1"
                target="_blank"
                rel="noopener noreferrer"
                className="floating-corner-video__channel-link"
              >
                <FaYoutube className="floating-corner-video__yt-icon" />
                <span>@yashgoogleads • Subscribe</span>
              </a>
            </div>
          </>
        )}
      </aside>

      {/* Maximized On-Screen YouTube Player Modal */}
      {isMaximized && (
        <div
          className="floating-video-modal-backdrop"
          onClick={() => setIsMaximized(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Maximized YouTube Video Player"
        >
          <div
            className="floating-video-modal-container"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="floating-video-modal__header">
              <div className="floating-video-modal__title-box">
                <span className="floating-corner-video__live-dot" />
                <div>
                  <h3 className="floating-video-modal__title">
                    Start Google Ads with ₹500 Per Day
                  </h3>
                  <p className="floating-video-modal__subtitle">
                    Yash Deliwala • Google Ads Expert & Agency
                  </p>
                </div>
              </div>

              <div className="floating-video-modal__header-actions">
                <a
                  href="https://www.youtube.com/watch?v=Ai40t_K5DjM"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="floating-video-modal__yt-direct-btn"
                  title="Open video directly on YouTube"
                >
                  <FaYoutube className="floating-video-modal__yt-red-icon" />
                  <span>Watch on YouTube</span>
                  <FaExternalLinkAlt style={{ fontSize: "11px", marginLeft: "2px" }} />
                </a>

                <button
                  type="button"
                  className="floating-video-modal__close-btn"
                  onClick={() => setIsMaximized(false)}
                  title="Close modal (Esc)"
                  aria-label="Close modal"
                >
                  <FaTimes />
                  <span className="floating-video-modal__esc-tag">ESC</span>
                </button>
              </div>
            </div>

            {/* Video Iframe Frame */}
            <div className="floating-video-modal__video-wrap">
              <iframe
                src={maximizedVideoSrc}
                title="Start Google Ads with 500 per day by Yash Deliwala"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>

            {/* Modal Footer with Channel Info & Call to Action */}
            <div className="floating-video-modal__footer">
              <a
                href="https://www.youtube.com/@yashgoogleads?sub_confirmation=1"
                target="_blank"
                rel="noopener noreferrer"
                className="floating-video-modal__subscribe-pill"
              >
                <FaYoutube className="floating-video-modal__yt-red-icon" />
                <span>Subscribe to @yashgoogleads</span>
              </a>

              <a
                href="https://wa.me/917990423086?text=Hi%20Yash,%20I%20watched%20your%20Google%20Ads%20video%20and%20want%20to%20discuss%20leads%20generation."
                target="_blank"
                rel="noopener noreferrer"
                className="floating-video-modal__cta-btn"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Embedded Scoped Styles for Responsive Layout & Modal */}
      <style>{`
        .floating-corner-video {
          position: fixed;
          bottom: 96px;
          right: 24px;
          z-index: 9999;
          width: 310px;
          background: #0f172a;
          border: 1px solid rgba(59, 130, 246, 0.45);
          border-radius: 14px;
          overflow: hidden;
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.1);
          animation: floatInUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          transition: all 0.25s ease;
          font-family: "Sora", sans-serif;
        }

        .floating-corner-video--minimized {
          width: 250px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);
        }

        .floating-corner-video--hidden {
          display: none !important;
        }

        .floating-corner-video__header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 8px 12px;
          background: #0f172a;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          user-select: none;
        }

        .floating-corner-video__title-wrap {
          display: flex;
          align-items: center;
          gap: 7px;
          min-width: 0;
          flex: 1;
        }

        .floating-corner-video__live-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #ef4444;
          box-shadow: 0 0 10px #ef4444;
          flex-shrink: 0;
          animation: pulse 1.5s infinite;
        }

        .floating-corner-video__title {
          font-size: 11.5px;
          font-weight: 700;
          color: #f1f5f9;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .floating-corner-video__actions {
          display: flex;
          align-items: center;
          gap: 4px;
          flex-shrink: 0;
          margin-left: 6px;
        }

        .floating-corner-video__btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 26px;
          height: 26px;
          border-radius: 6px;
          background: rgba(255, 255, 255, 0.09);
          border: 0;
          color: #cbd5e1;
          cursor: pointer;
          font-size: 11px;
          transition: all 0.2s ease;
        }

        .floating-corner-video__btn:hover {
          background: rgba(255, 255, 255, 0.22);
          color: #ffffff;
        }

        .floating-corner-video__btn--maximize:hover {
          background: #2563eb;
          color: #ffffff;
          box-shadow: 0 0 10px rgba(37, 99, 235, 0.5);
        }

        .floating-corner-video__btn--minimize:hover {
          background: rgba(255, 255, 255, 0.25);
          color: #ffffff;
        }

        .floating-corner-video__btn--close:hover {
          background: #ef4444;
          color: #ffffff;
        }

        .floating-corner-video__frame {
          position: relative;
          width: 100%;
          padding-bottom: 56.25%;
          height: 0;
          background: #000000;
        }

        .floating-corner-video__frame iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border: 0;
        }

        .floating-corner-video__footer {
          padding: 8px 12px;
          background: #090d16;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .floating-corner-video__channel-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: #fca5a5;
          font-size: 11.5px;
          font-weight: 700;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .floating-corner-video__channel-link:hover {
          color: #ffffff;
        }

        .floating-corner-video__yt-icon {
          color: #ef4444;
          font-size: 14px;
        }

        /* Maximized Modal Styles */
        .floating-video-modal-backdrop {
          position: fixed;
          inset: 0;
          z-index: 999999;
          background: rgba(3, 7, 18, 0.88);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          animation: fadeIn 0.22s ease-out;
          font-family: "Sora", sans-serif;
        }

        .floating-video-modal-container {
          position: relative;
          width: 100%;
          max-width: 920px;
          background: #0b1120;
          border: 1px solid rgba(59, 130, 246, 0.4);
          border-radius: 18px;
          overflow: hidden;
          box-shadow: 0 25px 70px rgba(0, 0, 0, 0.75), 0 0 40px rgba(37, 99, 235, 0.25);
          animation: modalScaleUp 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .floating-video-modal__header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 20px;
          background: #0f172a;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          gap: 12px;
        }

        .floating-video-modal__title-box {
          display: flex;
          align-items: center;
          gap: 12px;
          min-width: 0;
        }

        .floating-video-modal__title {
          font-size: 15px;
          font-weight: 700;
          color: #ffffff;
          margin: 0;
          line-height: 1.3;
        }

        .floating-video-modal__subtitle {
          font-size: 12px;
          color: #94a3b8;
          margin: 2px 0 0;
        }

        .floating-video-modal__header-actions {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
        }

        .floating-video-modal__yt-direct-btn {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 7px 14px;
          border-radius: 8px;
          background: rgba(239, 68, 68, 0.15);
          border: 1px solid rgba(239, 68, 68, 0.35);
          color: #fca5a5;
          font-size: 12.5px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .floating-video-modal__yt-direct-btn:hover {
          background: #ef4444;
          color: #ffffff;
          border-color: #ef4444;
          box-shadow: 0 0 14px rgba(239, 68, 68, 0.45);
        }

        .floating-video-modal__yt-red-icon {
          color: #ef4444;
          font-size: 16px;
          transition: color 0.2s ease;
        }

        .floating-video-modal__yt-direct-btn:hover .floating-video-modal__yt-red-icon {
          color: #ffffff;
        }

        .floating-video-modal__close-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 7px 12px;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.15);
          color: #cbd5e1;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .floating-video-modal__close-btn:hover {
          background: #ef4444;
          border-color: #ef4444;
          color: #ffffff;
        }

        .floating-video-modal__esc-tag {
          font-size: 10px;
          letter-spacing: 0.5px;
          padding: 1px 4px;
          border-radius: 4px;
          background: rgba(0, 0, 0, 0.35);
          color: #94a3b8;
        }

        .floating-video-modal__close-btn:hover .floating-video-modal__esc-tag {
          color: #ffffff;
          background: rgba(0, 0, 0, 0.25);
        }

        .floating-video-modal__video-wrap {
          position: relative;
          width: 100%;
          padding-bottom: 56.25%; /* 16:9 Aspect Ratio */
          height: 0;
          background: #000000;
        }

        .floating-video-modal__video-wrap iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border: 0;
        }

        .floating-video-modal__footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 20px;
          background: #070d19;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          gap: 12px;
        }

        .floating-video-modal__subscribe-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          font-weight: 700;
          color: #f1f5f9;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .floating-video-modal__subscribe-pill:hover {
          color: #fca5a5;
        }

        .floating-video-modal__cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 18px;
          border-radius: 8px;
          background: #25d366;
          color: #ffffff;
          font-size: 13px;
          font-weight: 700;
          text-decoration: none;
          box-shadow: 0 4px 14px rgba(37, 211, 102, 0.35);
          transition: all 0.2s ease;
        }

        .floating-video-modal__cta-btn:hover {
          background: #1eb956;
          transform: translateY(-1px);
          box-shadow: 0 6px 18px rgba(37, 211, 102, 0.45);
        }

        @keyframes floatInUp {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.96);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes modalScaleUp {
          from {
            opacity: 0;
            transform: scale(0.92);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }

        /* Mobile View: position directly ABOVE Call and WhatsApp sticky bottom bar */
        @media (max-width: 680px) {
          .floating-corner-video {
            bottom: 72px;
            right: 12px;
            width: 240px;
            border-radius: 12px;
          }

          .floating-corner-video--minimized {
            width: 190px;
          }

          .floating-corner-video__header {
            padding: 6px 10px;
          }

          .floating-corner-video__title {
            font-size: 10px;
          }

          .floating-corner-video__actions {
            gap: 3px;
            margin-left: 4px;
          }

          .floating-corner-video__btn {
            width: 23px;
            height: 23px;
            font-size: 10px;
          }

          .floating-video-modal-backdrop {
            padding: 12px;
          }

          .floating-video-modal-container {
            border-radius: 14px;
          }

          .floating-video-modal__header {
            padding: 10px 14px;
          }

          .floating-video-modal__title {
            font-size: 13px;
          }

          .floating-video-modal__subtitle {
            font-size: 11px;
          }

          .floating-video-modal__yt-direct-btn span {
            display: none;
          }

          .floating-video-modal__yt-direct-btn {
            padding: 6px 10px;
          }

          .floating-video-modal__close-btn {
            padding: 6px 10px;
          }

          .floating-video-modal__esc-tag {
            display: none;
          }

          .floating-video-modal__footer {
            padding: 10px 14px;
            flex-direction: column;
            gap: 10px;
          }

          .floating-video-modal__cta-btn {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </>
  );
}
