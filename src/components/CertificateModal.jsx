"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { FaCheckCircle, FaDownload, FaGoogle, FaTimes, FaShieldAlt } from "react-icons/fa";

export default function CertificateModal({ isOpen, onClose }) {
  const [mounted, setMounted] = useState(false);
  const [animateIn, setAnimateIn] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      // Trigger smooth spring animation
      requestAnimationFrame(() => setAnimateIn(true));
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";

      const handleKeyDown = (e) => {
        if (e.key === "Escape") {
          onClose();
        }
      };
      document.addEventListener("keydown", handleKeyDown);

      return () => {
        document.body.style.overflow = originalOverflow;
        document.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      setAnimateIn(false);
    }
  }, [isOpen, onClose]);

  if (!mounted || !isOpen) return null;

  const modalContent = (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 9999999,
        backgroundColor: "rgba(10, 15, 30, 0.82)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "16px",
        boxSizing: "border-box",
        opacity: animateIn ? 1 : 0,
        transition: "opacity 0.25s ease-out",
      }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="cert-modal-title"
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "860px",
          maxHeight: "92vh",
          backgroundColor: "#ffffff",
          borderRadius: "20px",
          boxShadow: "0 30px 90px rgba(0, 0, 0, 0.45), 0 0 0 1px rgba(255, 255, 255, 0.15)",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          transform: animateIn ? "scale(1) translateY(0)" : "scale(0.92) translateY(24px)",
          transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.25s ease-out",
          fontFamily: "'Sora', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header Bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "16px 24px",
            backgroundColor: "#f8fafc",
            borderBottom: "1px solid #e2e8f0",
            gap: "16px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <div
              style={{
                width: "46px",
                height: "46px",
                borderRadius: "50%",
                backgroundColor: "#eff6ff",
                border: "2px solid #bfdbfe",
                color: "#2563eb",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "20px",
                flexShrink: 0,
              }}
            >
              <FaGoogle />
            </div>
            <div>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  fontSize: "12px",
                  fontWeight: "800",
                  color: "#059669",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                }}
              >
                <FaCheckCircle />
                <span>Verified Google Certification</span>
              </div>
              <h2
                id="cert-modal-title"
                style={{
                  margin: "3px 0 0",
                  fontSize: "18px",
                  fontWeight: "800",
                  color: "#0f172a",
                  lineHeight: 1.25,
                }}
              >
                Google Ads Search Certification
              </h2>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close certificate modal"
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              border: "1px solid #cbd5e1",
              backgroundColor: "#ffffff",
              color: "#475569",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "16px",
              cursor: "pointer",
              transition: "all 0.2s ease",
              flexShrink: 0,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#fee2e2";
              e.currentTarget.style.color = "#dc2626";
              e.currentTarget.style.borderColor = "#fca5a5";
              e.currentTarget.style.transform = "rotate(90deg)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#ffffff";
              e.currentTarget.style.color = "#475569";
              e.currentTarget.style.borderColor = "#cbd5e1";
              e.currentTarget.style.transform = "rotate(0deg)";
            }}
          >
            <FaTimes />
          </button>
        </div>

        {/* Modal Certificate Image Area */}
        <div
          style={{
            padding: "20px 24px",
            overflowY: "auto",
            maxHeight: "calc(92vh - 160px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#f1f5f9",
          }}
        >
          <div
            style={{
              width: "100%",
              backgroundColor: "#ffffff",
              borderRadius: "14px",
              padding: "10px",
              boxShadow: "0 12px 32px rgba(0, 0, 0, 0.08)",
              border: "1px solid #e2e8f0",
              boxSizing: "border-box",
            }}
          >
            <img
              src="/clients/google-ads-certificate.jpg"
              alt="Yash Deliwala - Google Ads Search Certified"
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                borderRadius: "10px",
                objectFit: "contain",
              }}
              loading="eager"
            />
          </div>
        </div>

        {/* Modal Bottom Footer */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "14px",
            padding: "14px 24px",
            backgroundColor: "#ffffff",
            borderTop: "1px solid #e2e8f0",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "18px",
              fontSize: "13px",
              color: "#64748b",
            }}
          >
            <span>
              <strong style={{ color: "#1e293b" }}>Name:</strong> Yash Deliwala
            </span>
            <span>
              <strong style={{ color: "#1e293b" }}>ID:</strong> 136111584
            </span>
            <span>
              <strong style={{ color: "#1e293b" }}>Valid:</strong> March 2025 – March 2026
            </span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <a
              href="/clients/google-ads-certificate.jpg"
              download="Yash-Deliwala-Google-Ads-Certificate.jpg"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "9px 18px",
                borderRadius: "10px",
                fontSize: "13.5px",
                fontWeight: "700",
                color: "#ffffff",
                backgroundColor: "var(--ads-blue, #2563eb)",
                textDecoration: "none",
                transition: "all 0.2s ease",
                boxShadow: "0 4px 14px rgba(37, 99, 235, 0.25)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#1d4ed8";
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "var(--ads-blue, #2563eb)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <FaDownload />
              <span>Download</span>
            </a>
            <button
              type="button"
              onClick={onClose}
              style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "9px 18px",
                borderRadius: "10px",
                fontSize: "13.5px",
                fontWeight: "700",
                color: "#334155",
                backgroundColor: "#f1f5f9",
                border: "1px solid #cbd5e1",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#e2e8f0";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#f1f5f9";
              }}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}
