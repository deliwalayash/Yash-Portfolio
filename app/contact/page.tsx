import Image from "next/image";
import { FaPhone, FaWhatsapp, FaGlobe, FaUserPlus } from "react-icons/fa";

export const metadata = {
  title: "Yash Deliwala | Digital Business Card",
  description:
    "Connect with Yash Deliwala, Digital Marketing Consultant at Sure Marketing. Specializing in Google Ads, Social Media Marketing, Website Design, and Mobile App Development.",
  openGraph: {
    title: "Yash Deliwala | Digital Business Card",
    description:
      "Connect with Yash Deliwala, Digital Marketing Consultant at Sure Marketing. Services: Google Ads, SMM, Website Design, App Development.",
    url: "https://suremarketing.in",
    siteName: "Yash Deliwala",
    images: ["/yash-google-ads-photo.png"],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yash Deliwala | Digital Business Card",
    description:
      "Digital Marketing Consultant. Tap to save contact and learn about Google Ads, SMM, Website Design, and App Development.",
    images: ["/yash-google-ads-photo.png"],
  },
};

export default function ContactPage() {
  const services = [
    { name: "Google Ads", tag: "PPC & Lead Gen" },
    { name: "Social Media Marketing", tag: "Brand Growth" },
    { name: "Website Design", tag: "UI/UX & Web" },
    { name: "Mobile App Development", tag: "iOS & Android" },
  ];

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden font-sans">
      {/* Background Decorative Ambient Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[350px] h-[350px] rounded-full bg-violet-600/15 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[350px] h-[350px] rounded-full bg-blue-600/15 blur-[120px] pointer-events-none"></div>
      <div className="absolute top-[40%] left-[50%] -translate-x-1/2 w-[400px] h-[400px] rounded-full bg-indigo-500/5 blur-[150px] pointer-events-none"></div>

      {/* Main Glassmorphic Card Container */}
      <div className="w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] shadow-2xl overflow-hidden relative z-10 transition-all duration-300 hover:shadow-violet-500/5">
        {/* Cover Accent Banner */}
        <div className="h-32 bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          {/* Subtle grid pattern overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        </div>

        {/* Profile Avatar overlapping cover */}
        <div className="relative w-32 h-32 mx-auto -mt-16 rounded-full p-[3px] bg-gradient-to-tr from-violet-500 via-indigo-500 to-cyan-400 shadow-xl shadow-slate-950/50">
          <div className="w-full h-full rounded-full overflow-hidden bg-slate-900 relative">
            <Image
              src="/yash-google-ads-photo.png"
              alt="Yash Deliwala"
              width={128}
              height={128}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>

        {/* Name and Organization Details */}
        <div className="px-6 pt-4 pb-6 text-center">
          <h1 className="text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-slate-300">
            Yash Deliwala
          </h1>
          <p className="text-indigo-400 text-sm font-medium mt-1">
            Digital Marketing Consultant
          </p>
          <p className="text-slate-400 text-xs mt-0.5">Sure Marketing</p>
        </div>

        {/* Contact Quick Details Info Box */}
        <div className="px-6 py-3 mx-6 rounded-2xl bg-white/[0.02] border border-white/5 text-center text-xs text-slate-400 flex justify-around items-center gap-4">
          <div>
            <div className="text-slate-500 text-[10px] uppercase font-semibold tracking-wider">Phone</div>
            <a href="tel:+919712952456" className="text-slate-300 hover:text-violet-400 transition-colors mt-0.5 inline-block font-medium">
              +91 97129 52456
            </a>
          </div>
          <div className="w-[1px] h-6 bg-white/10"></div>
          <div>
            <div className="text-slate-500 text-[10px] uppercase font-semibold tracking-wider">Website</div>
            <a href="https://suremarketing.in" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-violet-400 transition-colors mt-0.5 inline-block font-medium">
              suremarketing.in
            </a>
          </div>
        </div>

        {/* Services & Expertise Section */}
        <div className="px-6 py-6">
          <h2 className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-3">
            Services &amp; Expertise
          </h2>
          <div className="grid grid-cols-2 gap-3">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/5 rounded-2xl p-3 flex flex-col justify-between hover:bg-white/10 hover:border-white/10 transition-all duration-300 hover:-translate-y-0.5 group"
              >
                <span className="text-[10px] text-slate-500 group-hover:text-indigo-400 transition-colors font-medium">
                  {service.tag}
                </span>
                <span className="text-xs font-semibold text-slate-200 mt-1.5 leading-tight">
                  {service.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons Grid */}
        <div className="px-6 pb-6 space-y-4">
          <div className="grid grid-cols-3 gap-3">
            {/* Call Button */}
            <a
              href="tel:+919712952456"
              className="flex flex-col items-center justify-center p-3.5 rounded-2xl bg-white/5 border border-white/5 hover:bg-violet-600/20 hover:border-violet-500/30 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 group shadow-md"
            >
              <FaPhone className="text-lg text-violet-400 group-hover:text-violet-300 group-hover:scale-110 transition-all mb-1.5" />
              <span className="text-[11px] font-semibold text-slate-300 group-hover:text-white transition-colors">
                Call
              </span>
            </a>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/919712952456"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center p-3.5 rounded-2xl bg-white/5 border border-white/5 hover:bg-emerald-600/20 hover:border-emerald-500/30 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 group shadow-md"
            >
              <FaWhatsapp className="text-lg text-emerald-400 group-hover:text-emerald-300 group-hover:scale-110 transition-all mb-1.5" />
              <span className="text-[11px] font-semibold text-slate-300 group-hover:text-white transition-colors">
                WhatsApp
              </span>
            </a>

            {/* Website Button */}
            <a
              href="https://suremarketing.in"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center p-3.5 rounded-2xl bg-white/5 border border-white/5 hover:bg-blue-600/20 hover:border-blue-500/30 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 group shadow-md"
            >
              <FaGlobe className="text-lg text-blue-400 group-hover:text-blue-300 group-hover:scale-110 transition-all mb-1.5" />
              <span className="text-[11px] font-semibold text-slate-300 group-hover:text-white transition-colors">
                Website
              </span>
            </a>
          </div>

          {/* Primary Save Contact CTA */}
          <a
            href="/vcf"
            className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-2xl bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600 hover:from-violet-500 hover:via-indigo-500 hover:to-blue-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-violet-500/20 hover:shadow-violet-500/30 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 group"
          >
            <FaUserPlus className="text-sm text-violet-100 group-hover:scale-110 transition-transform" />
            Save Contact
          </a>
        </div>
      </div>

      {/* NFC Disclaimer Footer */}
      <p className="text-[10px] text-slate-600 mt-8 relative z-10 tracking-wide">
        Yash Deliwala &bull; NFC Digital Business Card &bull; Sure Marketing
      </p>
    </div>
  );
}
