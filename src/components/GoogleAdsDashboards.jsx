"use client";

import { useCallback, useMemo, useState } from "react";
import {
  FaBuilding,
  FaCheckCircle,
  FaCut,
  FaGavel,
  FaGoogle,
  FaIndustry,
  FaStethoscope,
  FaTimes,
  FaWhatsapp,
} from "react-icons/fa";
import { WHATSAPP_LINK } from "../lib/site-config";

export const dashboardResults = [
  {
    id: "skin-clinic",
    title: "Dermatology Clinic – Gurgaon",
    client: "Skin & Hair Aesthetics Clinic",
    industry: "Healthcare & Doctors",
    category: "healthcare",
    budget: "₹1,000/day Budget",
    badge: "Healthcare",
    icon: FaStethoscope,
    highlights: [
      "Focused keyword selection",
      "Improved ad relevance",
      "Conversion-oriented landing experience",
    ],
    resultMetric: "2–3 New Patients Per Day",
    description:
      "Operating in one of India's most competitive healthcare advertising markets, the objective was to attract genuine prospective patients rather than simply generate website traffic.",
  },
  {
    id: "courier",
    title: "Courier Company – Hyderabad",
    client: "International Courier Service Provider",
    industry: "Logistics & Shipping",
    category: "courier",
    budget: "₹500/day Budget",
    badge: "International Courier",
    icon: FaIndustry,
    highlights: [
      "Clearer messaging",
      "Trust-building content",
      "Prominent contact options",
    ],
    resultMetric: "2–3 Genuine Responses Daily",
    description:
      "The campaign was receiving traffic but very few enquiries. A completely redesigned AI-assisted landing page transformed performance.",
  },
  {
    id: "furniture",
    title: "Premium Office Furniture Manufacturer – Mumbai",
    client: "Office Furniture Manufacturer",
    industry: "Furniture & Interior",
    category: "manufacturing",
    budget: "₹400/day Budget",
    badge: "Furniture",
    icon: FaBuilding,
    highlights: [
      "Better visitor qualification",
      "Improved landing page design",
      "Conversion-focused messaging",
    ],
    resultMetric: "2–3 High Quality Enquiries Daily",
    description:
      "A premium product category requiring higher trust and longer buying cycles.",
  },
  {
    id: "gynechologist",
    title: "Gynecologist & Women's Care Clinic – Surat",
    client: "Gynecologist Specialist Doctor",
    industry: "Healthcare & Doctors",
    category: "healthcare",
    budget: "₹800/day Budget",
    badge: "Healthcare",
    icon: FaStethoscope,
    highlights: [
      "High-intent patient appointment calls",
      "Negative keyword filtration for non-relevant queries",
      "Direct call extension & WhatsApp integration",
    ],
    resultMetric: "3–5 Direct OPD Appointments Daily",
    description:
      "Targeted local Google Search Ads campaign for a Gynecologist specialist doctor. Designed to capture high-intent searches for female health consultations, maternity care, and OPD appointments.",
  },
  {
    id: "orthopedic",
    title: "Orthopedic & Joint Specialist – Metro",
    client: "Orthopedic Surgeon & Specialist",
    industry: "Healthcare & Doctors",
    category: "healthcare",
    budget: "₹1,000/day Budget",
    badge: "Healthcare",
    icon: FaStethoscope,
    highlights: [
      "Focused on knee, joint & spine treatment searches",
      "High call-through conversion rate",
      "Weekly bid optimization based on lead quality",
    ],
    resultMetric: "3–4 High Intent Knee & Joint Enquiries Daily",
    description:
      "Dedicated Search campaign for an Orthopedic surgeon. Formatted around search intent for joint pain, knee replacement, and specialized bone & joint treatments.",
  },
  {
    id: "lawyer",
    title: "Legal Advocate & Law Firm – Delhi NCR",
    client: "Advocate & Legal Law Firm",
    industry: "Legal Services",
    category: "legal",
    budget: "₹600/day Budget",
    badge: "Legal Services",
    icon: FaGavel,
    highlights: [
      "Targeting corporate & individual legal enquiries",
      "Ad extensions highlighting expertise & fast response",
      "Optimized for urgent consultation phone calls",
    ],
    resultMetric: "3–5 Urgent Legal Consultations Daily",
    description:
      "High-intent legal Search Ads engineered to capture people seeking immediate legal counsel, documentation, and court advocacy services.",
  },
  {
    id: "real-estate",
    title: "Real Estate Property Developer – Pune",
    client: "Real Estate Property Developer",
    industry: "Real Estate",
    category: "real-estate",
    budget: "₹1,000/day Budget",
    badge: "Real Estate",
    icon: FaBuilding,
    highlights: [
      "Qualified home buyer form submissions",
      "Location-radius targeting around new projects",
      "Regular negative audience pruning for budget safety",
    ],
    resultMetric: "4–6 Qualified Site Visit Leads Weekly",
    description:
      "Lead generation campaign for residential & commercial real estate projects, driving site visits and direct buyer inquiries.",
  },
  {
    id: "salon",
    title: "Salon & Luxury Beauty Studio – Bangalore",
    client: "Luxury Salon & Beauty Studio",
    industry: "Salon & Beauty",
    category: "salon",
    budget: "₹500/day Budget",
    badge: "Salon & Beauty",
    icon: FaCut,
    highlights: [
      "Bridal package & hair service bookings",
      "Direct WhatsApp chat integration from ads",
      "High local search impression share",
    ],
    resultMetric: "4–7 Direct Salon Bookings Daily",
    description:
      "Local Google Ads campaign driving footfall, appointment bookings, and immediate WhatsApp enquiries for a salon & wellness studio.",
  },
  {
    id: "solar-energy",
    title: "Rooftop Solar & Clean Energy – Jaipur",
    client: "Rooftop Solar & Renewable Energy Provider",
    industry: "Solar & Clean Energy",
    category: "solar",
    budget: "₹900/day Budget",
    badge: "Solar & Clean Energy",
    icon: FaIndustry,
    highlights: [
      "Residential & commercial solar inquiry leads",
      "High solar subsidy search intent targeting",
      "GTM lead form conversion tracking",
    ],
    resultMetric: "3–5 Qualified Solar Survey Leads Daily",
    description:
      "High-intent local Search Ads campaign engineered for rooftop solar installation, driving home and factory owner site inspection enquiries.",
  },
];

const categories = [
  { id: "all", label: "All Industries" },
  { id: "healthcare", label: "Healthcare & Clinics" },
  { id: "courier", label: "Courier & Shipping" },
  { id: "manufacturing", label: "Manufacturing & B2B" },
  { id: "legal", label: "Legal Services" },
  { id: "real-estate", label: "Real Estate" },
  { id: "salon", label: "Salon & Beauty" },
  { id: "solar", label: "Solar & Clean Energy" },
];

export default function GoogleAdsDashboards() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredDashboards = useMemo(
    () =>
      activeCategory === "all"
        ? dashboardResults
        : dashboardResults.filter((item) => item.category === activeCategory),
    [activeCategory]
  );

  const handleCategoryChange = useCallback((id) => setActiveCategory(id), []);

  return (
    <section id="results" className="ads-section ads-dashboards-section">
      <div className="ads-section__heading">
        <p className="ads-eyebrow">
          <FaGoogle />
          Proven Campaign Results
        </p>
        <h2>Real Google Ads Performance & Daily Budgets.</h2>
        <p className="ads-section__subtext">
          Explore real Google Ads campaigns across healthcare, courier, furniture, legal, manufacturing, real estate, salon, and solar energy industries with daily budgets ranging from ₹400 to ₹1,000/day.
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
              onClick={() => handleCategoryChange(cat.id)}
            >
              <span>{cat.label}</span>
              <span className="ads-dashboard-tab__count">{count}</span>
            </button>
          );
        })}
      </div>

      {/* Campaign Cards Grid (9 Clients - 3 Complete Rows of 3) */}
      <div className="ads-dashboard-grid">
        {filteredDashboards.map((item) => {
          return (
            <div key={item.id} className="ads-dashboard-card">
              {/* Category Pill Badge */}
              <div className="ads-dashboard-card__badge-row">
                <span className="ads-dashboard-card__pill">{item.badge}</span>
              </div>

              {/* Title */}
              <h3 className="ads-dashboard-card__title">{item.title}</h3>

              {/* Budget in Gold */}
              <div className="ads-dashboard-card__budget">{item.budget}</div>

              {/* Description */}
              <p className="ads-dashboard-card__desc">{item.description}</p>

              {/* Bullet Points */}
              <ul className="ads-dashboard-card__bullets">
                {item.highlights.map((point, idx) => (
                  <li key={idx}>
                    <span className="ads-dashboard-card__dot">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {/* Gold Left Border Highlight Metric Box */}
              <div className="ads-dashboard-card__metric-box">
                <span>{item.resultMetric}</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
