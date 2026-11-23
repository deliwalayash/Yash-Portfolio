"use client";

import { useState, useEffect } from "react";
import { FaGoogle, FaPlus, FaYoutube } from "react-icons/fa";
import {
  FALLBACK_VIDEOS,
  FALLBACK_SHORTS,
  YOUTUBE_CHANNEL_URL,
} from "../lib/youtube";

// ── Curated Full 16:9 Landscape YouTube Guides ──
export const featuredVideos = FALLBACK_VIDEOS;

// ── All 15 YouTube Shorts ──
export const featuredShorts = FALLBACK_SHORTS.map((s) => ({
  id: s.id,
  src: `https://www.youtube.com/embed/${s.id}`,
  title: s.title,
}));

// ── Google Ads Long Form Videos Section ──
export function GoogleAdsVideosSection({ cityName, serviceName = "Google Ads" }) {
  const heading = cityName
    ? `Watch how ${serviceName} drives real leads in ${cityName} & across India.`
    : "Watch how Google Search Ads can help generate better leads.";

  return (
    <section id="video" className="ads-section ads-video-section" style={{ background: "#f8fafc", padding: "64px 20px" }} suppressHydrationWarning>
      <div className="ads-section__heading" style={{ maxWidth: "840px", margin: "0 auto 36px", textAlign: "center" }}>
        <p className="ads-eyebrow" style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "#1f7aec", fontWeight: 800, textTransform: "uppercase", fontSize: "13px" }}>
          <FaGoogle />
          Google Ads Videos
        </p>
        <h2 style={{ fontSize: "clamp(26px, 3.2vw, 42px)", fontWeight: 850, color: "#0f2744", marginTop: "10px", lineHeight: 1.15 }}>
          {heading}
        </h2>
      </div>

      <div style={{ maxWidth: "1280px", margin: "0 auto", width: "100%", boxSizing: "border-box" }}>
        <div className="ads-video-grid-responsive">
          {featuredVideos.map((video) => (
            <article className="ads-custom-video-card" key={video.id} suppressHydrationWarning>
              <div className="ads-custom-video-frame">
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
              <div className="ads-custom-video-body">
                <span className="ads-custom-video-tag">{video.tag}</span>
                <h3 className="ads-custom-video-title">{video.title}</h3>
                <div className="ads-custom-video-footer">
                  <FaYoutube className="ads-youtube-icon" />
                  <span>YouTube Guide</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* YouTube Channel Spotlight Banner */}
        <div
          className="ads-youtube-channel-banner"
          style={{
            marginTop: "32px",
            background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
            border: "1px solid rgba(239, 68, 68, 0.35)",
            borderRadius: "16px",
            padding: "22px 28px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "20px",
            boxShadow: "0 14px 40px rgba(0, 0, 0, 0.22)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "16px", minWidth: "260px" }}>
            <div
              style={{
                width: "52px",
                height: "52px",
                borderRadius: "50%",
                background: "#ef4444",
                color: "#ffffff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "26px",
                flexShrink: 0,
                boxShadow: "0 0 24px rgba(239, 68, 68, 0.45)",
              }}
            >
              <FaYoutube />
            </div>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
                <h3 style={{ margin: 0, color: "#ffffff", fontSize: "18px", fontWeight: "800" }}>
                  Yash Google Ads
                </h3>
                <a
                  href={YOUTUBE_CHANNEL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: "rgba(239, 68, 68, 0.16)",
                    color: "#f87171",
                    border: "1px solid rgba(239, 68, 68, 0.45)",
                    fontSize: "12px",
                    fontWeight: "750",
                    padding: "2px 10px",
                    borderRadius: "999px",
                    letterSpacing: "0.5px",
                    textDecoration: "none",
                  }}
                >
                  @yashgoogleads/shorts
                </a>
              </div>
              <p style={{ margin: "4px 0 0", color: "#94a3b8", fontSize: "13.5px", lineHeight: "1.4" }}>
                Subscribe on YouTube for weekly Google Ads case studies, policy fixes, ₹500/day budgets &amp; daily Shorts!
              </p>
            </div>
          </div>

          <a
            href="https://www.youtube.com/@yashgoogleads/shorts?sub_confirmation=1"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              padding: "11px 22px",
              background: "#ef4444",
              color: "#ffffff",
              fontWeight: "750",
              fontSize: "14px",
              borderRadius: "12px",
              textDecoration: "none",
              boxShadow: "0 8px 24px rgba(239, 68, 68, 0.35)",
              transition: "all 0.2s ease",
            }}
          >
            <FaYoutube style={{ fontSize: "17px" }} />
            Subscribe Channel
          </a>
        </div>
      </div>
    </section>
  );
}

// ── Google Ads Shorts Section (Vertical 9:16 Cards - Live Auto-Updated with Load More) ──
export function GoogleAdsShortsSection({ cityName }) {
  const [shorts, setShorts] = useState(featuredShorts);
  const [visibleCount, setVisibleCount] = useState(5);

  // Automatically fetch newest shorts from YouTube channel feed
  useEffect(() => {
    let isMounted = true;
    fetch("/api/youtube")
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (isMounted && data?.shorts?.length > 0) {
          const apiShorts = data.shorts.map((s) => ({
            id: s.id,
            src: `https://www.youtube.com/embed/${s.id}`,
            title: s.title,
          }));
          setShorts(apiShorts);
        }
      })
      .catch((err) => {
        console.warn("Could not fetch latest YouTube Shorts from API, using default list:", err);
      });
    return () => {
      isMounted = false;
    };
  }, []);

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 5, shorts.length));
  };

  return (
    <section id="shorts" className="ads-section ads-shorts-section" style={{ background: "#ffffff", padding: "64px 20px" }} suppressHydrationWarning>
      <div className="ads-section__heading" style={{ maxWidth: "840px", margin: "0 auto 36px", textAlign: "center" }}>
        <p className="ads-eyebrow" style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "#ef4444", fontWeight: 800, textTransform: "uppercase", fontSize: "13px" }}>
          <FaYoutube style={{ color: "#ef4444", fontSize: "16px" }} />
          YouTube Shorts
        </p>
        <h2 style={{ fontSize: "clamp(26px, 3.2vw, 42px)", fontWeight: 850, color: "#0f2744", marginTop: "10px", lineHeight: 1.15 }}>
          Quick Google Ads Insights &amp; Growth Tips
        </h2>
        <p style={{ margin: "10px auto 0", maxWidth: "600px", color: "#64748b", fontSize: "14px" }}>
          Watch quick 60-second fixes for policy suspensions, verification, and lead generation from @yashgoogleads/shorts.
        </p>
      </div>

      <div style={{ maxWidth: "1280px", margin: "0 auto", width: "100%", boxSizing: "border-box" }}>
        <div className="ads-shorts-grid-responsive">
          {shorts.slice(0, visibleCount).map((short, idx) => (
            <article className="ads-custom-short-card" key={short.id || idx} suppressHydrationWarning>
              <div className="ads-custom-short-frame">
                <iframe
                  src={short.src}
                  title={short.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </article>
          ))}
        </div>

        {/* Action Buttons: Load More & View All on YouTube */}
        <div
          className="ads-shorts-actions"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "16px",
            marginTop: "36px",
            flexWrap: "wrap",
          }}
        >
          {visibleCount < shorts.length && (
            <button
              type="button"
              onClick={handleLoadMore}
              className="ads-shorts-load-more-btn"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                padding: "13px 28px",
                background: "#0f172a",
                color: "#ffffff",
                fontWeight: "750",
                fontSize: "14.5px",
                borderRadius: "12px",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                cursor: "pointer",
                boxShadow: "0 8px 24px rgba(15, 23, 42, 0.16)",
                transition: "all 0.2s ease",
              }}
            >
              <FaPlus style={{ fontSize: "12px" }} />
              <span>Load More Shorts ({shorts.length - visibleCount} more)</span>
            </button>
          )}

          <a
            href={YOUTUBE_CHANNEL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="ads-shorts-view-all-btn"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              padding: "13px 28px",
              background: "#fee2e2",
              color: "#ef4444",
              fontWeight: "750",
              fontSize: "14.5px",
              borderRadius: "12px",
              border: "1px solid rgba(239, 68, 68, 0.25)",
              textDecoration: "none",
              boxShadow: "0 8px 24px rgba(239, 68, 68, 0.15)",
              transition: "all 0.2s ease",
            }}
          >
            <FaYoutube style={{ fontSize: "18px" }} />
            <span>View All on YouTube Shorts</span>
          </a>
        </div>
      </div>
    </section>
  );
}
