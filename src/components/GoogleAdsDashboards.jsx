"use client";

import { useEffect, useState } from "react";
import {
  FaBuilding,
  FaCheckCircle,
  FaExpand,
  FaGavel,
  FaGoogle,
  FaIndustry,
  FaStethoscope,
  FaTimes,
  FaWhatsapp,
} from "react-icons/fa";
import { WHATSAPP_LINK, LP_WHATSAPP_LINK } from "../lib/site-config";

export const dashboardResults = [
  {
    id: "gynechologist",
    title: "Gynecologist & Women's Healthcare Campaign",
    client: "Gynecologist Specialist Doctor",
    industry: "Healthcare & Doctors",
    category: "healthcare",
    image: "/google-ads-dashboard/gynechologist-doctor.png",
    badge: "Healthcare & Medical",
    icon: FaStethoscope,
    stats: [
      { label: "Campaign Target", value: "Patient Call Enquiries" },
      { label: "Ad Type", value: "Google Search Ads" },
      { label: "Target Area", value: "Local City & Surroundings" },
    ],
    highlights: [
      "High-intent patient appointment calls",
      "Negative keyword filtration for non-relevant queries",
      "Direct call extension & WhatsApp integration",
    ],
    description:
      "Targeted local Google Search Ads campaign for a Gynecologist specialist doctor. Designed to capture high-intent searches for female health consultations, maternity care, and OPD appointments.",
  },
  {
    id: "orthopedic",
    title: "Orthopedic & Joint Specialist Campaign",
    client: "Orthopedic Surgeon & Specialist",
    industry: "Healthcare & Doctors",
    category: "healthcare",
    image: "/google-ads-dashboard/orthopedic-doctor.png",
    badge: "Healthcare & Medical",
    icon: FaStethoscope,
    stats: [
      { label: "Campaign Target", value: "OPD Consultations" },
      { label: "Ad Type", value: "Search & Local Call Ads" },
      { label: "Target Area", value: "Metropolitan Region" },
    ],
    highlights: [
      "Focused on knee, joint & spine treatment searches",
      "High call-through conversion rate",
      "Weekly bid optimization based on lead quality",
    ],
    description:
      "Dedicated Search campaign for an Orthopedic surgeon. Formatted around search intent for joint pain, knee replacement, and specialized bone & joint treatments.",
  },
  {
    id: "skin-clinic",
    title: "Dermatology & Skin Clinic Campaign",
    client: "Skin & Hair Aesthetics Clinic",
    industry: "Healthcare & Doctors",
    category: "healthcare",
    image: "/google-ads-dashboard/Skin-clinic-dashboard.png",
    badge: "Healthcare & Medical",
    icon: FaStethoscope,
    stats: [
      { label: "Campaign Target", value: "Clinical Consultations" },
      { label: "Ad Type", value: "Search & Performance Max" },
      { label: "Target Area", value: "Targeted Metro Zone" },
    ],
    highlights: [
      "Laser treatment & skin care lead generation",
      "Consistent low CPC with maximum impression share",
      "Conversion tracking on form submissions & calls",
    ],
    description:
      "Comprehensive PPC campaign for a dermatology clinic delivering steady daily consultation requests for aesthetic skin treatments and hair care.",
  },
  {
    id: "lawyer",
    title: "Legal Practitioner & Advocate Campaign",
    client: "Advocate & Legal Law Firm",
    industry: "Legal Services",
    category: "legal",
    image: "/google-ads-dashboard/Lawyer-google-ads.png",
    badge: "Legal Services",
    icon: FaGavel,
    stats: [
      { label: "Campaign Target", value: "Direct Legal Calls" },
      { label: "Ad Type", value: "High-CTR Search Ads" },
      { label: "Target Area", value: "Statewide & City Level" },
    ],
    highlights: [
      "Targeting corporate & individual legal enquiries",
      "Ad extensions highlighting expertise & fast response",
      "Optimized for urgent consultation phone calls",
    ],
    description:
      "High-intent legal Search Ads engineered to capture people seeking immediate legal counsel, documentation, and court advocacy services.",
  },
  {
    id: "manufacturing",
    title: "Industrial Manufacturing B2B Campaign",
    client: "B2B Manufacturing Unit",
    industry: "Manufacturing & B2B",
    category: "manufacturing",
    image: "/google-ads-dashboard/Manufacturing-unit-google-ads.png",
    badge: "Manufacturing & B2B",
    icon: FaIndustry,
    stats: [
      { label: "Campaign Target", value: "Bulk Buyer RFQs" },
      { label: "Ad Type", value: "Pan-India Search Ads" },
      { label: "Target Area", value: "Pan-India B2B Buyers" },
    ],
    highlights: [
      "Commercial & industrial wholesale queries",
      "High order-value lead pipeline generation",
      "Strict keyword match type control to eliminate B2C traffic",
    ],
    description:
      "B2B Google Ads strategy for an industrial manufacturing unit, bringing in high-value bulk buyer RFQs, distributor queries, and industrial contracts.",
  },
  {
    id: "real-estate",
    title: "Real Estate & Property Lead Generation",
    client: "Real Estate Property Developer",
    industry: "Real Estate",
    category: "real-estate",
    image: "/google-ads-dashboard/Real-estate-dashboard.png",
    badge: "Real Estate & Property",
    icon: FaBuilding,
    stats: [
      { label: "Campaign Target", value: "Property Site Visits" },
      { label: "Ad Type", value: "PMax & Search Campaigns" },
      { label: "Target Area", value: "Investors & Homebuyers" },
    ],
    highlights: [
      "Qualified home buyer form submissions",
      "Location-radius targeting around new projects",
      "Regular negative audience pruning for budget safety",
    ],
    description:
      "Lead generation campaign for residential & commercial real estate projects, driving site visits and direct buyer inquiries.",
  },
];

const categories = [
  { id: "all", label: "All Industries" },
  { id: "healthcare", label: "Healthcare & Clinics" },
  { id: "legal", label: "Legal Services" },
  { id: "manufacturing", label: "Manufacturing & B2B" },
  { id: "real-estate", label: "Real Estate" },
];

export default function GoogleAdsDashboards({ isLp = false }) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedDashboard, setSelectedDashboard] = useState(null);

  const filteredDashboards =
    activeCategory === "all"
      ? dashboardResults
      : dashboardResults.filter((item) => item.category === activeCategory);

  // Keyboard escape listener to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setSelectedDashboard(null);
      }
    };
    if (selectedDashboard) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [selectedDashboard]);

  return (
    <section id="results" className="ads-section ads-dashboards-section">
      <div className="ads-section__heading">
        <p className="ads-eyebrow">
          <FaGoogle />
          Proven Campaign Results
        </p>
        <h2>Real Google Ads Account Dashboards Industry-Wise.</h2>
        <p className="ads-section__subtext">
          Explore actual performance dashboards from campaigns managed across healthcare, legal, manufacturing, real estate, and salon industries. Click any dashboard screenshot for a detailed view.
        </p>
      </div>

      {/* Category Filter Tabs */}
      <div className="ads-dashboard-tabs" role="tablist" aria-label="Filter dashboards by industry">
        {categories.map((cat) => {
          const count =
            cat.id === "all"
              ? dashboardResults.length
              : dashboardResults.filter((item) => item.category === cat.id).length;
          return (
            <button
              key={cat.id}
              type="button"
              role="tab"
              aria-selected={activeCategory === cat.id}
              className={`ads-dashboard-tab ${activeCategory === cat.id ? "ads-dashboard-tab--active" : ""}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              <span>{cat.label}</span>
              <span className="ads-dashboard-tab__count">{count}</span>
            </button>
          );
        })}
      </div>

      {/* Dashboards Grid */}
      <div className="ads-dashboard-grid">
        {filteredDashboards.map((item) => {
          const IconComp = item.icon;
          return (
            <div
              key={item.id}
              className="ads-dashboard-card"
              onClick={() => setSelectedDashboard(item)}
            >
              <div className="ads-dashboard-card__header-bar">
                <span className="ads-dashboard-card__badge">
                  {IconComp && <IconComp />}
                  {item.badge}
                </span>
                <span className="ads-dashboard-card__client">{item.client}</span>
              </div>

              <div className="ads-dashboard-card__preview">
                <img
                  src={item.image}
                  alt={`${item.title} - Google Ads performance dashboard screenshot`}
                  loading="lazy"
                />
                <div className="ads-dashboard-card__overlay">
                  <span className="ads-dashboard-card__zoom-btn">
                    <FaExpand /> View Full Dashboard
                  </span>
                </div>
              </div>

              <div className="ads-dashboard-card__content">
                <h3 className="ads-dashboard-card__title">{item.title}</h3>
                <p className="ads-dashboard-card__desc">{item.description}</p>

                <div className="ads-dashboard-card__stats-list">
                  {item.stats.slice(0, 2).map((stat) => (
                    <div key={stat.label} className="ads-dashboard-card__stat-item">
                      <span className="ads-dashboard-card__stat-label">{stat.label}</span>
                      <strong className="ads-dashboard-card__stat-value">{stat.value}</strong>
                    </div>
                  ))}
                </div>

                <div className="ads-dashboard-card__footer">
                  <button
                    type="button"
                    className="ads-dashboard-card__action-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedDashboard(item);
                    }}
                  >
                    Inspect Full Dashboard <FaExpand />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Fullscreen Lightbox / Detail Modal */}
      {selectedDashboard && (
        <div
          className="ads-modal-overlay"
          role="dialog"
          aria-modal="true"
          aria-labelledby="ads-modal-title"
          onClick={() => setSelectedDashboard(null)}
        >
          <div className="ads-modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="ads-modal-close"
              aria-label="Close modal"
              onClick={() => setSelectedDashboard(null)}
            >
              <FaTimes />
            </button>

            <div className="ads-modal-header">
              <span className="ads-dashboard-card__badge ads-dashboard-card__badge--modal">
                {selectedDashboard.icon && <selectedDashboard.icon />}
                {selectedDashboard.badge}
              </span>
              <h2 id="ads-modal-title">{selectedDashboard.title}</h2>
              <p className="ads-modal-subtitle">
                Industry: <strong>{selectedDashboard.industry}</strong> &bull; Client: <strong>{selectedDashboard.client}</strong>
              </p>
            </div>

            <div className="ads-modal-body">
              <div className="ads-modal-image-wrapper">
                <img
                  src={selectedDashboard.image}
                  alt={`${selectedDashboard.title} full Google Ads dashboard`}
                />
                <p className="ads-modal-caption">
                  📷 Actual Google Ads Manager account dashboard screenshot for {selectedDashboard.client}
                </p>
              </div>

              <div className="ads-modal-details">
                <h3>Campaign Highlights & Overview</h3>
                <p className="ads-modal-description">{selectedDashboard.description}</p>

                <div className="ads-modal-stats-grid">
                  {selectedDashboard.stats.map((stat) => (
                    <div key={stat.label} className="ads-modal-stat-box">
                      <span>{stat.label}</span>
                      <strong>{stat.value}</strong>
                    </div>
                  ))}
                </div>

                <h4 className="ads-modal-key-title">Key Campaign Features:</h4>
                <ul className="ads-modal-highlights">
                  {selectedDashboard.highlights.map((point) => (
                    <li key={point}>
                      <FaCheckCircle />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="ads-modal-actions">
                  <a
                    href={isLp ? LP_WHATSAPP_LINK : WHATSAPP_LINK}
                    target="_blank"
                    rel="noreferrer"
                    className="ads-button ads-button--primary"
                  >
                    <FaWhatsapp /> Get Similar Results on WhatsApp
                  </a>
                  <a
                    href={isLp ? "#hero" : "#contact"}
                    className="ads-button ads-button--secondary"
                    onClick={() => setSelectedDashboard(null)}
                  >
                    {isLp ? "Start Google Ads Now" : "Book Rs. 1000 Consultation"}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
