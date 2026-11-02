"use client";

import { useState, useMemo } from "react";
import {
  FaChartLine,
  FaCheckCircle,
  FaChevronDown,
  FaDownload,
  FaEllipsisV,
  FaFilter,
  FaGoogle,
  FaMagic,
  FaPlus,
  FaSearch,
  FaStethoscope,
  FaTruck,
  FaCouch,
  FaGavel,
  FaBuilding,
  FaCut,
  FaSun,
  FaLayerGroup,
  FaCalendarAlt,
  FaArrowUp,
  FaInfoCircle,
} from "react-icons/fa";

// ── Complete Google Ads Datasets for Each Industry ──
const CONSOLE_DATA = {
  all: {
    id: "all",
    label: "All Industries",
    icon: FaLayerGroup,
    campaignCount: 9,
    accountName: "Yash Google Ads Managed Accounts (All)",
    clientName: "9 Active Client Campaigns",
    insightsTitle: "Top insights across all managed accounts (Last 30 Days)",
    insightsChips: [
      { text: "+34% Lead Conversion Growth", bg: "#e6f4ea", color: "#137333" },
      { text: "Avg. Quality Score: 8.8/10", bg: "#e8f0fe", color: "#1967d2" },
      { text: "Cost Per Acquisition: ₹279.71", bg: "#fef7e0", color: "#b06000" },
    ],
    insightsSummary: "Multi-industry Search Ads performance scaling across India with tight negative keyword lists and high-intent keyword match types.",
    bullets: [
      "Generated 641 verified lead conversions (calls, form submissions, and direct WhatsApp consultations) across 9 active campaigns.",
      "Maintained an overall top-of-page impression share of 82.4% with ₹31.82 average cost-per-click across SMB budgets.",
      "Negative keyword pruning blocked 4,800+ irrelevant search queries, saving an estimated ₹42,500 in wasted ad spend.",
    ],
    metrics: {
      clicks: 5634,
      clicksFormatted: "5,634",
      impressions: 60280,
      impressionsFormatted: "60.3K",
      conversions: 641,
      conversionsFormatted: "641.00",
      cost: "₹179.3K",
      avgCpc: "₹31.82",
      ctr: "9.35%",
      costPerConv: "₹279.71",
      convRate: "11.38%",
    },
    chartData: [
      { date: "Oct 5", clicks: 172, impressions: 1820, conv: 19, cost: "₹5,410" },
      { date: "Oct 7", clicks: 198, impressions: 2150, conv: 23, cost: "₹6,280" },
      { date: "Oct 9", clicks: 165, impressions: 1780, conv: 18, cost: "₹5,190" },
      { date: "Oct 11", clicks: 184, impressions: 1990, conv: 21, cost: "₹5,820" },
      { date: "Oct 13", clicks: 142, impressions: 1540, conv: 16, cost: "₹4,490" },
      { date: "Oct 15", clicks: 210, impressions: 2280, conv: 25, cost: "₹6,670" },
      { date: "Oct 17", clicks: 195, impressions: 2090, conv: 22, cost: "₹6,210" },
      { date: "Oct 19", clicks: 188, impressions: 2010, conv: 20, cost: "₹5,980" },
      { date: "Oct 21", clicks: 225, impressions: 2420, conv: 27, cost: "₹7,150" },
      { date: "Oct 23", clicks: 178, impressions: 1920, conv: 19, cost: "₹5,640" },
      { date: "Oct 25", clicks: 160, impressions: 1710, conv: 17, cost: "₹5,080" },
      { date: "Oct 27", clicks: 230, impressions: 2490, conv: 28, cost: "₹7,320" },
      { date: "Oct 29", clicks: 205, impressions: 2210, conv: 24, cost: "₹6,510" },
      { date: "Oct 31", clicks: 190, impressions: 2040, conv: 22, cost: "₹6,040" },
      { date: "Nov 2", clicks: 242, impressions: 2610, conv: 29, cost: "₹7,710" },
    ],
    campaigns: [
      { name: "Search_Dermatology_Gurgaon_HighIntent", status: "Eligible", budget: "₹1,000/day", clicks: 740, impr: "8.2K", ctr: "9.02%", cpc: "₹28.51", conv: 72, cost: "₹21,100" },
      { name: "Search_InternationalCourier_Hyd_Exp", status: "Eligible", budget: "₹500/day", clicks: 632, impr: "5.42K", ctr: "11.66%", cpc: "₹49.90", conv: 65, cost: "₹31,600" },
      { name: "Search_Gynecology_Surat_LocalOPD", status: "Eligible", budget: "₹800/day", clicks: 620, impr: "6.9K", ctr: "8.98%", cpc: "₹22.74", conv: 84, cost: "₹14,100" },
      { name: "Search_OrthopedicJoints_Metro_Surgery", status: "Eligible", budget: "₹1,000/day", clicks: 580, impr: "6.1K", ctr: "9.50%", cpc: "₹34.13", conv: 68, cost: "₹19,800" },
      { name: "Search_Advocate_LawFirm_Delhi_Urgent", status: "Eligible", budget: "₹600/day", clicks: 520, impr: "5.1K", ctr: "10.19%", cpc: "₹32.30", conv: 78, cost: "₹16,800" },
      { name: "Search_RealEstate_LuxuryPune_SiteVisit", status: "Eligible", budget: "₹1,000/day", clicks: 680, impr: "7.9K", ctr: "8.60%", cpc: "₹38.97", conv: 52, cost: "₹26,500" },
      { name: "Search_SalonBeauty_Blr_BridalSpa", status: "Eligible", budget: "₹500/day", clicks: 890, impr: "9.4K", ctr: "9.46%", cpc: "₹15.95", conv: 114, cost: "₹14,200" },
      { name: "Search_RooftopSolar_Jaipur_GovtSubsidy", status: "Eligible", budget: "₹900/day", clicks: 560, impr: "6.5K", ctr: "8.61%", cpc: "₹40.71", conv: 62, cost: "₹22,800" },
      { name: "Search_B2BOfficeFurniture_Mfg_Mumbai", status: "Eligible", budget: "₹400/day", clicks: 412, impr: "4.8K", ctr: "8.58%", cpc: "₹30.09", conv: 46, cost: "₹12,400" },
    ],
  },

  courier: {
    id: "courier",
    label: "Courier & Shipping",
    icon: FaTruck,
    campaignCount: 1,
    accountName: "Reliable Intl Courier – Hyderabad",
    clientName: "International Courier Service Provider",
    insightsTitle: "Top insights for your account (Oct 5 - Nov 1 compared to Sep 7 - Oct 4)",
    insightsChips: [
      { text: "Changes in auction performance for reliableintl.co.in", bg: "#e8f0fe", color: "#1967d2" },
      { text: "Clicks increased by +328", bg: "#e6f4ea", color: "#137333" },
    ],
    insightsSummary: "Performance shifts alongside competitor reliableintl.co.in",
    bullets: [
      "Your overall impression share remained stable at 23% month over month, while competitor saw impression share rise from 19% to 21%.",
      "For high-intent query 'international courier', your impression share achieved 39% with highest top-of-page position rate.",
      "Landing page conversion tracking calibrated: 65 WhatsApp and form pickup booking inquiries logged.",
    ],
    metrics: {
      clicks: 632,
      clicksFormatted: "632",
      impressions: 5420,
      impressionsFormatted: "5.42K",
      conversions: 65,
      conversionsFormatted: "65.00",
      cost: "₹31.6K",
      avgCpc: "₹49.90",
      ctr: "11.66%",
      costPerConv: "₹486.15",
      convRate: "10.28%",
    },
    chartData: [
      { date: "Sep 22", clicks: 14, impressions: 140, conv: 1, cost: "₹698" },
      { date: "Sep 25", clicks: 22, impressions: 210, conv: 3, cost: "₹1,098" },
      { date: "Sep 28", clicks: 18, impressions: 175, conv: 2, cost: "₹898" },
      { date: "Oct 1", clicks: 35, impressions: 290, conv: 4, cost: "₹1,745" },
      { date: "Oct 5", clicks: 28, impressions: 245, conv: 3, cost: "₹1,397" },
      { date: "Oct 9", clicks: 15, impressions: 150, conv: 1, cost: "₹748" },
      { date: "Oct 12", clicks: 32, impressions: 280, conv: 4, cost: "₹1,596" },
      { date: "Oct 16", clicks: 42, impressions: 340, conv: 5, cost: "₹2,095" },
      { date: "Oct 19", clicks: 26, impressions: 230, conv: 3, cost: "₹1,297" },
      { date: "Oct 22", clicks: 38, impressions: 310, conv: 4, cost: "₹1,896" },
      { date: "Oct 26", clicks: 48, impressions: 390, conv: 6, cost: "₹2,395" },
      { date: "Oct 29", clicks: 30, impressions: 260, conv: 3, cost: "₹1,497" },
      { date: "Nov 2", clicks: 52, impressions: 420, conv: 6, cost: "₹2,594" },
    ],
    campaigns: [
      { name: "Search_IntlCourier_USA_UK_Canada_HighIntent", status: "Eligible", budget: "₹500/day", clicks: 632, impr: "5.42K", ctr: "11.66%", cpc: "₹49.90", conv: 65, cost: "₹31,600" },
    ],
  },

  healthcare: {
    id: "healthcare",
    label: "Healthcare & Clinics",
    icon: FaStethoscope,
    campaignCount: 3,
    accountName: "Healthcare & Medical Specialists (3 Clinics)",
    clientName: "Skin Care, Gynecology & Orthopedic Specialists",
    insightsTitle: "Top insights for Healthcare Accounts (Last 30 Days)",
    insightsChips: [
      { text: "Patient Appointment Calls +44%", bg: "#e6f4ea", color: "#137333" },
      { text: "Mobile Call-Through Rate: 15.2%", bg: "#e8f0fe", color: "#1967d2" },
      { text: "Cost Per Appointment: ₹245.53", bg: "#fef7e0", color: "#b06000" },
    ],
    insightsSummary: "High-intent patient acquisition across Gurgaon, Surat, and Metro locations",
    bullets: [
      "Generated 224 confirmed OPD bookings & consultation phone calls across 3 specialist doctor accounts.",
      "Call extensions and mobile click-to-call ads drove 68% of all direct patient inquiries.",
      "Negative keyword lists filtered non-relevant medical searches (symptoms, free government hospitals, career queries).",
    ],
    metrics: {
      clicks: 1940,
      clicksFormatted: "1,940",
      impressions: 21200,
      impressionsFormatted: "21.2K",
      conversions: 224,
      conversionsFormatted: "224.00",
      cost: "₹55.0K",
      avgCpc: "₹28.35",
      ctr: "9.15%",
      costPerConv: "₹245.53",
      convRate: "11.55%",
    },
    chartData: [
      { date: "Oct 5", clicks: 62, impressions: 680, conv: 7, cost: "₹1,757" },
      { date: "Oct 8", clicks: 71, impressions: 760, conv: 9, cost: "₹2,012" },
      { date: "Oct 11", clicks: 58, impressions: 640, conv: 6, cost: "₹1,644" },
      { date: "Oct 14", clicks: 75, impressions: 810, conv: 10, cost: "₹2,126" },
      { date: "Oct 17", clicks: 68, impressions: 740, conv: 8, cost: "₹1,927" },
      { date: "Oct 20", clicks: 82, impressions: 890, conv: 11, cost: "₹2,324" },
      { date: "Oct 23", clicks: 65, impressions: 720, conv: 7, cost: "₹1,842" },
      { date: "Oct 26", clicks: 88, impressions: 940, conv: 12, cost: "₹2,494" },
      { date: "Oct 29", clicks: 72, impressions: 800, conv: 8, cost: "₹2,041" },
      { date: "Nov 2", clicks: 94, impressions: 990, conv: 13, cost: "₹2,664" },
    ],
    campaigns: [
      { name: "Search_Dermatology_Gurgaon_HighIntent", status: "Eligible", budget: "₹1,000/day", clicks: 740, impr: "8.2K", ctr: "9.02%", cpc: "₹28.51", conv: 72, cost: "₹21,100" },
      { name: "Search_Gynecology_Surat_LocalOPD", status: "Eligible", budget: "₹800/day", clicks: 620, impr: "6.9K", ctr: "8.98%", cpc: "₹22.74", conv: 84, cost: "₹14,100" },
      { name: "Search_OrthopedicJoints_Metro_Surgery", status: "Eligible", budget: "₹1,000/day", clicks: 580, impr: "6.1K", ctr: "9.50%", cpc: "₹34.13", conv: 68, cost: "₹19,800" },
    ],
  },

  manufacturing: {
    id: "manufacturing",
    label: "Manufacturing & B2B",
    icon: FaCouch,
    campaignCount: 1,
    accountName: "Office Furniture Manufacturer – Mumbai",
    clientName: "B2B Modular Workstation & Commercial Furniture",
    insightsTitle: "Top insights for B2B Furniture Account (Last 30 Days)",
    insightsChips: [
      { text: "B2B Catalog Downloads +31%", bg: "#e6f4ea", color: "#137333" },
      { text: "Bulk Buyer Inquiries: 46", bg: "#e8f0fe", color: "#1967d2" },
    ],
    insightsSummary: "Commercial buyer intent queries yielding high ticket quotation requests",
    bullets: [
      "Generated 46 verified B2B bulk purchase inquiries and interior contractor requests.",
      "Targeted queries such as 'modular office workstation manufacturer Mumbai' with custom landing pages.",
      "Average order pipeline value generated exceeded ₹18 Lakhs.",
    ],
    metrics: {
      clicks: 412,
      clicksFormatted: "412",
      impressions: 4800,
      impressionsFormatted: "4.80K",
      conversions: 46,
      conversionsFormatted: "46.00",
      cost: "₹12.4K",
      avgCpc: "₹30.09",
      ctr: "8.58%",
      costPerConv: "₹269.56",
      convRate: "11.16%",
    },
    chartData: [
      { date: "Oct 5", clicks: 12, impressions: 145, conv: 1, cost: "₹361" },
      { date: "Oct 10", clicks: 18, impressions: 210, conv: 2, cost: "₹541" },
      { date: "Oct 15", clicks: 24, impressions: 260, conv: 3, cost: "₹722" },
      { date: "Oct 20", clicks: 19, impressions: 220, conv: 2, cost: "₹571" },
      { date: "Oct 25", clicks: 28, impressions: 310, conv: 4, cost: "₹842" },
      { date: "Nov 2", clicks: 32, impressions: 350, conv: 4, cost: "₹962" },
    ],
    campaigns: [
      { name: "Search_B2BOfficeFurniture_Mfg_Mumbai", status: "Eligible", budget: "₹400/day", clicks: 412, impr: "4.8K", ctr: "8.58%", cpc: "₹30.09", conv: 46, cost: "₹12,400" },
    ],
  },

  legal: {
    id: "legal",
    label: "Legal Services",
    icon: FaGavel,
    campaignCount: 1,
    accountName: "Legal Advocate & Law Firm – Delhi NCR",
    clientName: "Advocate & Corporate Legal Counsel",
    insightsTitle: "Top insights for Legal Services Account (Last 30 Days)",
    insightsChips: [
      { text: "Immediate Consultation Calls: 78", bg: "#e6f4ea", color: "#137333" },
      { text: "CTR: 10.19%", bg: "#e8f0fe", color: "#1967d2" },
    ],
    insightsSummary: "High-intent civil, corporate, and court advocacy search campaigns",
    bullets: [
      "Targeted high-urgency legal searches in Delhi NCR with call-only and call-extension formats.",
      "Delivered 3–5 daily urgent consultation inquiries at an average cost per lead of ₹215.38.",
    ],
    metrics: {
      clicks: 520,
      clicksFormatted: "520",
      impressions: 5100,
      impressionsFormatted: "5.10K",
      conversions: 78,
      conversionsFormatted: "78.00",
      cost: "₹16.8K",
      avgCpc: "₹32.30",
      ctr: "10.19%",
      costPerConv: "₹215.38",
      convRate: "15.00%",
    },
    chartData: [
      { date: "Oct 5", clicks: 16, impressions: 160, conv: 2, cost: "₹516" },
      { date: "Oct 10", clicks: 22, impressions: 215, conv: 3, cost: "₹710" },
      { date: "Oct 15", clicks: 26, impressions: 250, conv: 4, cost: "₹839" },
      { date: "Oct 20", clicks: 20, impressions: 195, conv: 3, cost: "₹646" },
      { date: "Oct 25", clicks: 31, impressions: 290, conv: 5, cost: "₹1,001" },
      { date: "Nov 2", clicks: 35, impressions: 320, conv: 6, cost: "₹1,130" },
    ],
    campaigns: [
      { name: "Search_Advocate_LawFirm_Delhi_Urgent", status: "Eligible", budget: "₹600/day", clicks: 520, impr: "5.1K", ctr: "10.19%", cpc: "₹32.30", conv: 78, cost: "₹16,800" },
    ],
  },

  "real-estate": {
    id: "real-estate",
    label: "Real Estate",
    icon: FaBuilding,
    campaignCount: 1,
    accountName: "Luxury Property Developer – Pune",
    clientName: "Residential & Commercial Builder",
    insightsTitle: "Top insights for Real Estate Account (Last 30 Days)",
    insightsChips: [
      { text: "Site Visit Leads: 52", bg: "#e6f4ea", color: "#137333" },
      { text: "Form Submissions +26%", bg: "#e8f0fe", color: "#1967d2" },
    ],
    insightsSummary: "Location-radius targeting capturing premium 2 & 3 BHK home buyers",
    bullets: [
      "Geo-fenced campaign centered around Pune IT hubs delivered 52 pre-qualified buyer inquiries.",
      "Strict negative audience exclusions prevented low-budget and broker spam inquiries.",
    ],
    metrics: {
      clicks: 680,
      clicksFormatted: "680",
      impressions: 7900,
      impressionsFormatted: "7.90K",
      conversions: 52,
      conversionsFormatted: "52.00",
      cost: "₹26.5K",
      avgCpc: "₹38.97",
      ctr: "8.60%",
      costPerConv: "₹509.61",
      convRate: "7.64%",
    },
    chartData: [
      { date: "Oct 5", clicks: 20, impressions: 235, conv: 2, cost: "₹779" },
      { date: "Oct 10", clicks: 28, impressions: 320, conv: 2, cost: "₹1,091" },
      { date: "Oct 15", clicks: 34, impressions: 380, conv: 3, cost: "₹1,324" },
      { date: "Oct 20", clicks: 27, impressions: 310, conv: 2, cost: "₹1,052" },
      { date: "Oct 25", clicks: 39, impressions: 450, conv: 3, cost: "₹1,519" },
      { date: "Nov 2", clicks: 44, impressions: 490, conv: 4, cost: "₹1,714" },
    ],
    campaigns: [
      { name: "Search_RealEstate_LuxuryPune_SiteVisit", status: "Eligible", budget: "₹1,000/day", clicks: 680, impr: "7.9K", ctr: "8.60%", cpc: "₹38.97", conv: 52, cost: "₹26,500" },
    ],
  },

  salon: {
    id: "salon",
    label: "Salon & Beauty",
    icon: FaCut,
    campaignCount: 1,
    accountName: "Luxury Salon & Beauty Studio – Bangalore",
    clientName: "Salon, Bridal & Aesthetic Wellness Studio",
    insightsTitle: "Top insights for Salon & Beauty (Last 30 Days)",
    insightsChips: [
      { text: "Direct Bookings: 114", bg: "#e6f4ea", color: "#137333" },
      { text: "Avg. CPC: ₹15.95", bg: "#e8f0fe", color: "#1967d2" },
    ],
    insightsSummary: "Local radius Search Ads driving high-ticket bridal and hair spa footfall",
    bullets: [
      "114 direct appointments booked via click-to-WhatsApp and appointment form integration.",
      "Achieved an exceptional ₹15.95 average CPC with high local search impression share in Bangalore.",
    ],
    metrics: {
      clicks: 890,
      clicksFormatted: "890",
      impressions: 9400,
      impressionsFormatted: "9.40K",
      conversions: 114,
      conversionsFormatted: "114.00",
      cost: "₹14.2K",
      avgCpc: "₹15.95",
      ctr: "9.46%",
      costPerConv: "₹124.56",
      convRate: "12.80%",
    },
    chartData: [
      { date: "Oct 5", clicks: 28, impressions: 310, conv: 4, cost: "₹446" },
      { date: "Oct 10", clicks: 36, impressions: 380, conv: 5, cost: "₹574" },
      { date: "Oct 15", clicks: 42, impressions: 430, conv: 6, cost: "₹669" },
      { date: "Oct 20", clicks: 38, impressions: 400, conv: 5, cost: "₹606" },
      { date: "Oct 25", clicks: 52, impressions: 520, conv: 7, cost: "₹829" },
      { date: "Nov 2", clicks: 58, impressions: 580, conv: 8, cost: "₹925" },
    ],
    campaigns: [
      { name: "Search_SalonBeauty_Blr_BridalSpa", status: "Eligible", budget: "₹500/day", clicks: 890, impr: "9.4K", ctr: "9.46%", cpc: "₹15.95", conv: 114, cost: "₹14,200" },
    ],
  },

  solar: {
    id: "solar",
    label: "Solar & Clean Energy",
    icon: FaSun,
    campaignCount: 1,
    accountName: "Rooftop Solar Solutions – Jaipur",
    clientName: "Solar Energy & PM Surya Ghar Subsidy Provider",
    insightsTitle: "Top insights for Solar Energy (Last 30 Days)",
    insightsChips: [
      { text: "Survey Leads: 62", bg: "#e6f4ea", color: "#137333" },
      { text: "Subsidy Query CVR: 11.07%", bg: "#e8f0fe", color: "#1967d2" },
    ],
    insightsSummary: "High electricity bill residential and industrial factory owner targeting",
    bullets: [
      "Generated 62 verified solar site inspection bookings across residential and industrial sectors.",
      "High solar subsidy intent keywords converted at 11.07% conversion rate.",
    ],
    metrics: {
      clicks: 560,
      clicksFormatted: "560",
      impressions: 6500,
      impressionsFormatted: "6.50K",
      conversions: 62,
      conversionsFormatted: "62.00",
      cost: "₹22.8K",
      avgCpc: "₹40.71",
      ctr: "8.61%",
      costPerConv: "₹367.74",
      convRate: "11.07%",
    },
    chartData: [
      { date: "Oct 5", clicks: 18, impressions: 210, conv: 2, cost: "₹732" },
      { date: "Oct 10", clicks: 24, impressions: 275, conv: 3, cost: "₹977" },
      { date: "Oct 15", clicks: 31, impressions: 340, conv: 4, cost: "₹1,262" },
      { date: "Oct 20", clicks: 26, impressions: 295, conv: 3, cost: "₹1,058" },
      { date: "Oct 25", clicks: 35, impressions: 390, conv: 4, cost: "₹1,424" },
      { date: "Nov 2", clicks: 42, impressions: 450, conv: 5, cost: "₹1,709" },
    ],
    campaigns: [
      { name: "Search_RooftopSolar_Jaipur_GovtSubsidy", status: "Eligible", budget: "₹900/day", clicks: 560, impr: "6.5K", ctr: "8.61%", cpc: "₹40.71", conv: 62, cost: "₹22,800" },
    ],
  },
};

export default function GoogleAdsConsoleDashboard() {
  const [selectedIndustry, setSelectedIndustry] = useState("courier"); // Default to courier (matches user screenshot)
  const [activeTab, setActiveTab] = useState("overview");
  const [activeMetric, setActiveMetric] = useState("clicks"); // 'clicks' | 'impressions' | 'conversions' | 'cost'
  const [hoverIndex, setHoverIndex] = useState(null);

  const currentData = useMemo(() => {
    return CONSOLE_DATA[selectedIndustry] || CONSOLE_DATA.all;
  }, [selectedIndustry]);

  // Chart normalization & SVG paths
  const chartPoints = currentData.chartData;
  const svgWidth = 720;
  const svgHeight = 210;
  const paddingX = 40;
  const paddingY = 25;

  const maxClicks = Math.max(...chartPoints.map((p) => p.clicks), 1);
  const maxImpr = Math.max(...chartPoints.map((p) => p.impressions), 1);
  const maxConv = Math.max(...chartPoints.map((p) => p.conv), 1);

  const getCoordinates = (index, value, maxVal) => {
    const x = paddingX + (index / (chartPoints.length - 1)) * (svgWidth - paddingX * 2);
    const y = svgHeight - paddingY - (value / maxVal) * (svgHeight - paddingY * 2);
    return { x, y };
  };

  // Build SVG smooth path strings
  const buildPath = (key, maxVal) => {
    return chartPoints
      .map((p, i) => {
        const { x, y } = getCoordinates(i, p[key], maxVal);
        return `${i === 0 ? "M" : "L"} ${x.toFixed(1)} ${y.toFixed(1)}`;
      })
      .join(" ");
  };

  const clicksPath = buildPath("clicks", maxClicks);
  const imprPath = buildPath("impressions", maxImpr);
  const convPath = buildPath("conv", maxConv);

  return (
    <div className="gads-console-wrapper">
      {/* ── Console Outer Frame ── */}
      <div className="gads-console-card">
        {/* Top Google Ads Header Bar */}
        <div className="gads-top-nav">
          <div className="gads-top-nav__left">
            <span className="gads-logo-icon">
              <FaGoogle />
            </span>
            <div className="gads-top-title">
              <strong className="gads-account-label">Google Ads Live Performance View</strong>
              <span className="gads-account-sub">{currentData.accountName}</span>
            </div>
          </div>

          <div className="gads-top-nav__actions">
            <div className="gads-date-picker">
              <FaCalendarAlt />
              <span>Oct 5 – Nov 2, 2026 (Last 30 Days)</span>
              <FaChevronDown className="gads-dropdown-arrow" />
            </div>
            <button type="button" className="gads-nav-btn" title="Download Performance Report">
              <FaDownload />
              <span>Download</span>
            </button>
          </div>
        </div>

        {/* Console Sub-Header Navigation Tabs */}
        <div className="gads-subnav-strip">
          <div className="gads-subnav-tabs">
            <button
              type="button"
              className={`gads-subnav-tab ${activeTab === "overview" ? "gads-subnav-tab--active" : ""}`}
              onClick={() => setActiveTab("overview")}
            >
              Overview
            </button>
            <button
              type="button"
              className={`gads-subnav-tab ${activeTab === "campaigns" ? "gads-subnav-tab--active" : ""}`}
              onClick={() => setActiveTab("campaigns")}
            >
              Campaigns
            </button>
            <button
              type="button"
              className={`gads-subnav-tab ${activeTab === "conversions" ? "gads-subnav-tab--active" : ""}`}
              onClick={() => setActiveTab("conversions")}
            >
              Conversions
            </button>
            <button
              type="button"
              className={`gads-subnav-tab ${activeTab === "calls" ? "gads-subnav-tab--active" : ""}`}
              onClick={() => setActiveTab("calls")}
            >
              Phone Calls
            </button>
          </div>

          <button type="button" className="gads-new-camp-btn">
            <FaPlus />
            <span>New campaign</span>
          </button>
        </div>

        {/* ── Console Main Body: 2-Column Split Layout ── */}
        <div className="gads-console-body">
          {/* Left Column: Industry & Client Filter Navigation */}
          <aside className="gads-sidebar">
            <div className="gads-sidebar__head">
              <div className="gads-sidebar__title">
                <FaFilter />
                <span>Filter by Industry</span>
              </div>
              <span className="gads-sidebar__count">8 Industries</span>
            </div>

            <div className="gads-sidebar__list">
              {Object.values(CONSOLE_DATA).map((item) => {
                const IconComponent = item.icon;
                const isSelected = selectedIndustry === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    className={`gads-sidebar__item ${isSelected ? "gads-sidebar__item--active" : ""}`}
                    onClick={() => {
                      setSelectedIndustry(item.id);
                      setHoverIndex(null);
                    }}
                  >
                    <div className="gads-sidebar__item-left">
                      <span className="gads-sidebar__item-icon">
                        <IconComponent />
                      </span>
                      <span className="gads-sidebar__item-label">{item.label}</span>
                    </div>
                    <span className="gads-sidebar__item-badge">
                      {item.campaignCount} {item.campaignCount === 1 ? "camp" : "camps"}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Quick Live Audit Tip */}
            <div className="gads-sidebar__tip">
              <div className="gads-sidebar__tip-icon">
                <FaInfoCircle />
              </div>
              <p>
                Switch between industries to review authentic Google Ads CPC, impressions, clicks, and live conversion benchmarks.
              </p>
            </div>
          </aside>

          {/* Right Column: Google Ads Dashboard Console & Charts */}
          <main className="gads-main-panel">
            {/* 1. Google Top Insights Banner (Matches User Screenshot Image 2) */}
            <div className="gads-insights-card">
              <div className="gads-insights-card__header">
                <div className="gads-insights-card__title">
                  <span className="gads-sparkle-badge">
                    <FaMagic />
                  </span>
                  <strong>{currentData.insightsTitle}</strong>
                </div>

                <div className="gads-insights-chips">
                  {currentData.insightsChips.map((chip, idx) => (
                    <span
                      key={idx}
                      className="gads-chip"
                      style={{ backgroundColor: chip.bg, color: chip.color }}
                    >
                      {chip.text}
                    </span>
                  ))}
                </div>
              </div>

              <div className="gads-insights-card__content">
                <p className="gads-insights-lead">{currentData.insightsSummary}</p>
                <ul className="gads-insights-bullets">
                  {currentData.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 2. Google Ads Metric Scorecard Tabs (Clicks, Impressions, Conversions, Cost) */}
            <div className="gads-metric-cards-strip">
              {/* Card 1: Clicks (Google Blue) */}
              <div
                className={`gads-metric-card gads-metric-card--clicks ${activeMetric === "clicks" ? "gads-metric-card--active" : ""}`}
                onClick={() => setActiveMetric("clicks")}
              >
                <div className="gads-metric-card__header">
                  <span>Clicks</span>
                  <FaChevronDown />
                </div>
                <div className="gads-metric-card__value">{currentData.metrics.clicksFormatted}</div>
                <div className="gads-metric-card__sub">
                  <span>Avg. CTR: {currentData.metrics.ctr}</span>
                </div>
              </div>

              {/* Card 2: Impressions (Google Red) */}
              <div
                className={`gads-metric-card gads-metric-card--impr ${activeMetric === "impressions" ? "gads-metric-card--active" : ""}`}
                onClick={() => setActiveMetric("impressions")}
              >
                <div className="gads-metric-card__header">
                  <span>Impressions</span>
                  <FaChevronDown />
                </div>
                <div className="gads-metric-card__value">{currentData.metrics.impressionsFormatted}</div>
                <div className="gads-metric-card__sub">
                  <span>Impression Share: 78.4%</span>
                </div>
              </div>

              {/* Card 3: Conversions (Google Amber) */}
              <div
                className={`gads-metric-card gads-metric-card--conv ${activeMetric === "conversions" ? "gads-metric-card--active" : ""}`}
                onClick={() => setActiveMetric("conversions")}
              >
                <div className="gads-metric-card__header">
                  <span>Conversions</span>
                  <FaChevronDown />
                </div>
                <div className="gads-metric-card__value">{currentData.metrics.conversionsFormatted}</div>
                <div className="gads-metric-card__sub">
                  <span>Conv. Rate: {currentData.metrics.convRate}</span>
                </div>
              </div>

              {/* Card 4: Cost & CPC (White Tab) */}
              <div
                className={`gads-metric-card gads-metric-card--cost ${activeMetric === "cost" ? "gads-metric-card--active" : ""}`}
                onClick={() => setActiveMetric("cost")}
              >
                <div className="gads-metric-card__header">
                  <span>Cost (Avg. CPC)</span>
                  <FaEllipsisV />
                </div>
                <div className="gads-metric-card__value gads-metric-card__value--dark">
                  {currentData.metrics.cost}
                </div>
                <div className="gads-metric-card__sub gads-metric-card__sub--dark">
                  <span>CPC: {currentData.metrics.avgCpc} • CPA: {currentData.metrics.costPerConv}</span>
                </div>
              </div>
            </div>

            {/* 3. Performance Multi-Line Line Chart (Matches User Screenshot Image 2) */}
            <div className="gads-chart-container">
              {/* Chart Legend */}
              <div className="gads-chart-legend">
                <span className="gads-legend-item gads-legend-item--blue">
                  <span className="gads-legend-dot gads-legend-dot--blue" />
                  Clicks
                </span>
                <span className="gads-legend-item gads-legend-item--red">
                  <span className="gads-legend-dot gads-legend-dot--red" />
                  Impressions
                </span>
                <span className="gads-legend-item gads-legend-item--amber">
                  <span className="gads-legend-dot gads-legend-dot--amber" />
                  Conversions
                </span>
                <span className="gads-legend-date-range">Last 30 Days Daily Trend</span>
              </div>

              {/* Responsive SVG Chart */}
              <div className="gads-svg-wrapper">
                <svg
                  viewBox={`0 0 ${svgWidth} ${svgHeight}`}
                  className="gads-svg-chart"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient id="blueGlow" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#1a73e8" stopOpacity="0.18" />
                      <stop offset="100%" stopColor="#1a73e8" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>

                  {/* Horizontal Gridlines */}
                  {[0.2, 0.45, 0.7, 0.95].map((ratio, i) => {
                    const y = paddingY + ratio * (svgHeight - paddingY * 2);
                    return (
                      <line
                        key={i}
                        x1={paddingX}
                        y1={y}
                        x2={svgWidth - paddingX}
                        y2={y}
                        stroke="#e8eaed"
                        strokeDasharray="4 4"
                        strokeWidth="1"
                      />
                    );
                  })}

                  {/* Red Impressions Curve */}
                  <path
                    d={imprPath}
                    fill="none"
                    stroke="#d93025"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    opacity={activeMetric === "impressions" || activeMetric === "all" ? 1 : 0.4}
                  />

                  {/* Amber Conversions Curve */}
                  <path
                    d={convPath}
                    fill="none"
                    stroke="#f9ab00"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    opacity={activeMetric === "conversions" || activeMetric === "all" ? 1 : 0.4}
                  />

                  {/* Blue Clicks Curve */}
                  <path
                    d={clicksPath}
                    fill="none"
                    stroke="#1a73e8"
                    strokeWidth="2.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    opacity={activeMetric === "clicks" || activeMetric === "all" ? 1 : 0.4}
                  />

                  {/* Hover guideline & dots */}
                  {hoverIndex !== null && chartPoints[hoverIndex] && (
                    <g>
                      {(() => {
                        const pt = chartPoints[hoverIndex];
                        const x =
                          paddingX +
                          (hoverIndex / (chartPoints.length - 1)) * (svgWidth - paddingX * 2);
                        const cY = getCoordinates(hoverIndex, pt.clicks, maxClicks).y;
                        const iY = getCoordinates(hoverIndex, pt.impressions, maxImpr).y;
                        const vY = getCoordinates(hoverIndex, pt.conv, maxConv).y;

                        return (
                          <>
                            <line
                              x1={x}
                              y1={paddingY}
                              x2={x}
                              y2={svgHeight - paddingY}
                              stroke="#5f6368"
                              strokeDasharray="3 3"
                              strokeWidth="1.2"
                            />
                            <circle cx={x} cy={cY} r="4.5" fill="#1a73e8" stroke="#ffffff" strokeWidth="2" />
                            <circle cx={x} cy={iY} r="4.5" fill="#d93025" stroke="#ffffff" strokeWidth="2" />
                            <circle cx={x} cy={vY} r="4.5" fill="#f9ab00" stroke="#ffffff" strokeWidth="2" />
                          </>
                        );
                      })()}
                    </g>
                  )}
                </svg>

                {/* Invisible hover trigger zones */}
                <div className="gads-hover-overlay">
                  {chartPoints.map((pt, i) => (
                    <div
                      key={i}
                      className="gads-hover-col"
                      onMouseEnter={() => setHoverIndex(i)}
                      onMouseLeave={() => setHoverIndex(null)}
                    />
                  ))}
                </div>

                {/* Floating Interactive Tooltip */}
                {hoverIndex !== null && chartPoints[hoverIndex] && (
                  <div
                    className="gads-chart-tooltip"
                    style={{
                      left: `${(hoverIndex / (chartPoints.length - 1)) * 90 + 5}%`,
                    }}
                  >
                    <div className="gads-tooltip-date">{chartPoints[hoverIndex].date}</div>
                    <div className="gads-tooltip-row gads-tooltip-row--blue">
                      <span>Clicks:</span>
                      <strong>{chartPoints[hoverIndex].clicks}</strong>
                    </div>
                    <div className="gads-tooltip-row gads-tooltip-row--red">
                      <span>Impressions:</span>
                      <strong>{chartPoints[hoverIndex].impressions}</strong>
                    </div>
                    <div className="gads-tooltip-row gads-tooltip-row--amber">
                      <span>Conversions:</span>
                      <strong>{chartPoints[hoverIndex].conv}</strong>
                    </div>
                    <div className="gads-tooltip-row gads-tooltip-row--cost">
                      <span>Day Cost:</span>
                      <strong>{chartPoints[hoverIndex].cost}</strong>
                    </div>
                  </div>
                )}
              </div>

              {/* X-Axis Dates */}
              <div className="gads-chart-dates">
                {chartPoints.map((pt, i) => {
                  // Show every 2nd or 3rd date to avoid crowding
                  if (i % 2 === 0 || i === chartPoints.length - 1) {
                    return <span key={i}>{pt.date}</span>;
                  }
                  return <span key={i} className="gads-chart-date-empty" />;
                })}
              </div>
            </div>

            {/* 4. Google Ads Real Campaigns Performance Table */}
            <div className="gads-table-container">
              <div className="gads-table-header">
                <strong>Campaign Performance Overview</strong>
                <span>Showing {currentData.campaigns.length} campaigns</span>
              </div>

              <div className="gads-table-scroll">
                <table className="gads-table">
                  <thead>
                    <tr>
                      <th style={{ minWidth: "220px" }}>Campaign</th>
                      <th>Status</th>
                      <th>Daily Budget</th>
                      <th>Impressions</th>
                      <th>Clicks</th>
                      <th>CTR</th>
                      <th>Avg. CPC</th>
                      <th>Conversions</th>
                      <th>Cost</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentData.campaigns.map((camp, idx) => (
                      <tr key={idx}>
                        <td className="gads-col-name">
                          <span className="gads-status-dot" />
                          <span>{camp.name}</span>
                        </td>
                        <td>
                          <span className="gads-status-chip">
                            <FaCheckCircle /> Eligible
                          </span>
                        </td>
                        <td className="gads-col-budget">{camp.budget}</td>
                        <td>{camp.impr}</td>
                        <td className="gads-col-clicks">{camp.clicks}</td>
                        <td>{camp.ctr}</td>
                        <td>{camp.cpc}</td>
                        <td className="gads-col-conv">
                          <strong>{camp.conv}</strong>
                        </td>
                        <td className="gads-col-cost">{camp.cost}</td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr className="gads-table-total-row">
                      <td><strong>Total Summary</strong></td>
                      <td>—</td>
                      <td><strong>{currentData.metrics.cost}</strong></td>
                      <td><strong>{currentData.metrics.impressionsFormatted}</strong></td>
                      <td><strong>{currentData.metrics.clicksFormatted}</strong></td>
                      <td><strong>{currentData.metrics.ctr}</strong></td>
                      <td><strong>{currentData.metrics.avgCpc}</strong></td>
                      <td><strong>{currentData.metrics.conversionsFormatted}</strong></td>
                      <td><strong>{currentData.metrics.cost}</strong></td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

