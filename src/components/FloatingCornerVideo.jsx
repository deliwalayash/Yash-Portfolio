"use client";

import { useState } from "react";
import { FaTimes, FaExpand, FaCompress, FaVolumeUp, FaVolumeMute, FaYoutube } from "react-icons/fa";

export default function FloatingCornerVideo() {
  const [isOpen, setIsOpen] = useState(true);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  if (!isOpen) return null;

  // Video 2: Start Google Ads with ₹500 Per Day (Ai40t_K5DjM)
  // Autoplay requires mute=1 in modern browsers to begin automatically without user interaction.
  const videoSrc = `https://www.youtube.com/embed/Ai40t_K5DjM?autoplay=1&mute=${isMuted ? 1 : 0}&playsinline=1&enablejsapi=1&rel=0&controls=1`;

  return (
    <aside
      className={`floating-corner-video ${isMinimized ? "floating-corner-video--minimized" : ""}`}
      aria-label="Featured Google Ads Video"
    >
      {/* Top Header bar with title & controls */}
      <div className="floating-corner-video__header">
        <div className="floating-corner-video__title-wrap">
          <span className="floating-corner-video__live-dot" />
          <span className="floating-corner-video__title">Start Google Ads ₹500/day</span>
        </div>
        <div className="floating-corner-video__actions">
          <button
            type="button"
            className="floating-corner-video__btn"
            onClick={() => setIsMuted(!isMuted)}
            title={isMuted ? "Unmute Audio" : "Mute Audio"}
            aria-label={isMuted ? "Unmute Audio" : "Mute Audio"}
          >
            {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
          </button>
          <button
            type="button"
            className="floating-corner-video__btn"
            onClick={() => setIsMinimized(!isMinimized)}
            title={isMinimized ? "Expand video" : "Minimize video"}
            aria-label={isMinimized ? "Expand video" : "Minimize video"}
          >
            {isMinimized ? <FaExpand /> : <FaCompress />}
          </button>
          <button
            type="button"
            className="floating-corner-video__btn floating-corner-video__btn--close"
            onClick={() => setIsOpen(false)}
            title="Close video"
            aria-label="Close video"
          >
            <FaTimes />
          </button>
        </div>
      </div>

      {/* Video Frame & Channel Footer */}
      {!isMinimized && (
        <>
          <div className="floating-corner-video__frame">
            <iframe
              src={videoSrc}
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

      {/* Embedded Scoped Styles for Guaranteed Responsive Layout */}
      <style>{`
        .floating-corner-video {
          position: fixed;
          bottom: 96px;
          right: 24px;
          z-index: 9999;
          width: 300px;
          background: #0f172a;
          border: 1px solid rgba(59, 130, 246, 0.45);
          border-radius: 14px;
          overflow: hidden;
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.35), 0 0 0 1px rgba(255, 255, 255, 0.1);
          animation: floatInUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          transition: all 0.25s ease;
          font-family: "Sora", sans-serif;
        }

        .floating-corner-video--minimized {
          width: 240px;
        }

        .floating-corner-video__header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 8px 12px;
          background: #0f172a;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .floating-corner-video__title-wrap {
          display: flex;
          align-items: center;
          gap: 6px;
          min-width: 0;
        }

        .floating-corner-video__live-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #ef4444;
          box-shadow: 0 0 8px #ef4444;
          flex-shrink: 0;
          animation: pulse 1.5s infinite;
        }

        .floating-corner-video__title {
          font-size: 11px;
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
        }

        .floating-corner-video__btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 24px;
          height: 24px;
          border-radius: 6px;
          background: rgba(255, 255, 255, 0.1);
          border: 0;
          color: #cbd5e1;
          cursor: pointer;
          font-size: 10px;
          transition: all 0.2s ease;
        }

        .floating-corner-video__btn:hover {
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

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }

        /* Mobile View: position directly ABOVE Call and WhatsApp sticky bottom bar */
        @media (max-width: 680px) {
          .floating-corner-video {
            bottom: 72px; /* Positioned directly above the sticky bottom call/whatsapp bar */
            right: 12px;
            width: 200px;
            border-radius: 12px;
          }

          .floating-corner-video--minimized {
            width: 170px;
          }

          .floating-corner-video__header {
            padding: 6px 10px;
          }

          .floating-corner-video__title {
            font-size: 10px;
          }

          .floating-corner-video__btn {
            width: 22px;
            height: 22px;
            font-size: 9px;
          }
        }
      `}</style>
    </aside>
  );
}
