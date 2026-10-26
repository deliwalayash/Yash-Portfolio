import { FaGoogle, FaYoutube } from "react-icons/fa";

export const featuredVideos = [
  {
    id: "HY7Td-AJ45A",
    src: "https://www.youtube.com/embed/HY7Td-AJ45A?si=wI_VhKjM2Q8hZbVs",
    title: "Google Ads Account Suspended: Policy Solutions & Review",
    tag: "Account Recovery",
  },
  {
    id: "Ai40t_K5DjM",
    src: "https://www.youtube.com/embed/Ai40t_K5DjM?si=MKOU-w5D9HHevDOd",
    title: "Start Google Ads with ₹500/day: Step-by-Step Setup",
    tag: "Budget Strategy",
  },
  {
    id: "QSFD_ExZtcE",
    src: "https://www.youtube.com/embed/QSFD_ExZtcE?si=UfTiwJyg9a-kgb77",
    title: "Google Ads Expert in India: Full PPC Management",
    tag: "Case Study & Growth",
  },
];

export const featuredShorts = [
  {
    id: "PcZNwNi0yFc",
    src: "https://www.youtube.com/embed/PcZNwNi0yFc",
    title: "Google Ads Quick Tip 1",
  },
  {
    id: "5b8GE5syzz8",
    src: "https://www.youtube.com/embed/5b8GE5syzz8",
    title: "Google Ads Quick Tip 2",
  },
  {
    id: "ikHYcYjwlls",
    src: "https://www.youtube.com/embed/ikHYcYjwlls",
    title: "Google Ads Quick Tip 3",
  },
  {
    id: "GqSuj30px6U",
    src: "https://www.youtube.com/embed/GqSuj30px6U",
    title: "Google Ads Quick Tip 4",
  },
  {
    id: "XmMnltqFCrM",
    src: "https://www.youtube.com/embed/XmMnltqFCrM",
    title: "Google Ads Quick Tip 5",
  },
];

export function GoogleAdsVideosSection({ cityName, serviceName = "Google Ads" }) {
  const heading = cityName
    ? `Watch how ${serviceName} drives real leads in ${cityName} & across India.`
    : "Watch how Google Search Ads can help generate better leads.";

  return (
    <section id="video" className="ads-section ads-video-section" style={{ background: "#f8fafc", padding: "64px 20px" }}>
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
            <article className="ads-custom-video-card" key={video.id}>
              <div className="ads-custom-video-frame">
                <iframe
                  src={video.src}
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
                  href="https://www.youtube.com/@yashgoogleads"
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
                  @yashgoogleads
                </a>
              </div>
              <p style={{ margin: "4px 0 0", color: "#94a3b8", fontSize: "13.5px", lineHeight: "1.4" }}>
                Subscribe on YouTube for weekly Google Ads case studies, policy fixes, ₹500/day budgets &amp; daily Shorts!
              </p>
            </div>
          </div>

          <a
            href="https://www.youtube.com/@yashgoogleads?sub_confirmation=1"
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

      <style>{`
        .ads-video-grid-responsive {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 26px;
          width: 100%;
          box-sizing: border-box;
        }
        @media (max-width: 992px) {
          .ads-video-grid-responsive {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 20px;
          }
        }
        @media (max-width: 640px) {
          .ads-video-grid-responsive {
            grid-template-columns: 1fr;
            gap: 18px;
          }
        }
        .ads-custom-video-card {
          display: flex;
          flex-direction: column;
          background: #ffffff;
          border: 1px solid #dbeafe;
          border-radius: 14px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(15, 78, 163, 0.07);
          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
        }
        .ads-custom-video-card:hover {
          transform: translateY(-4px);
          border-color: #93c5fd;
          box-shadow: 0 20px 45px rgba(15, 78, 163, 0.14);
        }
        .ads-custom-video-frame {
          position: relative;
          width: 100%;
          padding-bottom: 56.25%;
          height: 0;
          background: #000000;
          overflow: hidden;
        }
        .ads-custom-video-frame iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border: 0;
        }
        .ads-custom-video-body {
          padding: 18px 20px 22px;
          display: flex;
          flex-direction: column;
          flex: 1;
          background: #ffffff;
        }
        .ads-custom-video-tag {
          display: inline-block;
          align-self: flex-start;
          font-size: 11px;
          font-weight: 700;
          color: #1f7aec;
          background: #eff6ff;
          border: 1px solid #bfdbfe;
          padding: 3px 10px;
          border-radius: 9999px;
          margin-bottom: 10px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .ads-custom-video-title {
          margin: 0;
          font-size: 15px;
          font-weight: 750;
          color: #0f2744;
          line-height: 1.42;
          flex: 1;
        }
        .ads-custom-video-footer {
          display: flex;
          align-items: center;
          gap: 7px;
          font-size: 12px;
          color: #64748b;
          font-weight: 600;
          margin-top: 14px;
          padding-top: 12px;
          border-top: 1px solid #f1f5f9;
        }
        .ads-youtube-icon {
          color: #ef4444;
          font-size: 16px;
        }
      `}</style>
    </section>
  );
}

export function GoogleAdsShortsSection({ cityName }) {
  return (
    <section id="shorts" className="ads-section ads-shorts-section" style={{ background: "#ffffff", padding: "64px 20px" }}>
      <div className="ads-section__heading" style={{ maxWidth: "840px", margin: "0 auto 36px", textAlign: "center" }}>
        <p className="ads-eyebrow" style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "#ef4444", fontWeight: 800, textTransform: "uppercase", fontSize: "13px" }}>
          <FaYoutube style={{ color: "#ef4444", fontSize: "16px" }} />
          YouTube Shorts
        </p>
        <h2 style={{ fontSize: "clamp(26px, 3.2vw, 42px)", fontWeight: 850, color: "#0f2744", marginTop: "10px", lineHeight: 1.15 }}>
          Quick Google Ads Insights &amp; Growth Tips
        </h2>
      </div>

      <div style={{ maxWidth: "1280px", margin: "0 auto", width: "100%", boxSizing: "border-box" }}>
        <div className="ads-shorts-grid-responsive">
          {featuredShorts.map((short, idx) => (
            <article className="ads-custom-short-card" key={short.id || idx}>
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
      </div>

      <style>{`
        .ads-shorts-grid-responsive {
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: 20px;
          width: 100%;
          box-sizing: border-box;
        }
        @media (max-width: 1100px) {
          .ads-shorts-grid-responsive {
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 18px;
          }
        }
        @media (max-width: 768px) {
          .ads-shorts-grid-responsive {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 14px;
          }
        }
        @media (max-width: 480px) {
          .ads-shorts-grid-responsive {
            grid-template-columns: 1fr;
            max-width: 290px;
            margin: 0 auto;
            gap: 16px;
          }
        }
        .ads-custom-short-card {
          display: flex;
          flex-direction: column;
          background: #000000;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 10px 25px rgba(15, 78, 163, 0.08);
          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
        }
        .ads-custom-short-card:hover {
          transform: translateY(-4px);
          border-color: #ef4444;
          box-shadow: 0 18px 40px rgba(239, 68, 68, 0.2);
        }
        .ads-custom-short-frame {
          position: relative;
          width: 100%;
          padding-bottom: 177.77%; /* 9:16 Aspect Ratio for Shorts */
          height: 0;
          background: #000000;
          overflow: hidden;
        }
        .ads-custom-short-frame iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border: 0;
        }
      `}</style>
    </section>
  );
}
