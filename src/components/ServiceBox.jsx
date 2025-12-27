import { CgWebsite } from "react-icons/cg";
import { AiOutlineLaptop } from "react-icons/ai";
import { BsFillRocketFill } from "react-icons/bs";
import { IoIosColorPalette } from "react-icons/io";
import { MdSupportAgent } from "react-icons/md";
import { FaBullhorn, FaSearch, FaGoogle } from "react-icons/fa";


const ServiceBox = () => {
    const servicesCard = [
    {
        icon: <CgWebsite />,
        heading: "Web Development",
        paragraph: "We craft dynamic, modern websites built for speed, functionality, and beauty — all customized to match your brand and business goals.",
    },
    {
        icon: <AiOutlineLaptop />,
        heading: "Fully Responsive",
        paragraph: "Your website will look and perform flawlessly on all screen sizes — from mobile phones to desktops — ensuring a seamless user experience everywhere.",
    },
    {
        icon: <IoIosColorPalette />,
        heading: "Modern Design",
        paragraph: "We focus on clean, contemporary designs that are visually engaging and intuitive to use — because first impressions matter.",
    },
    {
        icon: <BsFillRocketFill />,
        heading: "Branding",
        paragraph: "Whether you’re launching or rebranding, we help shape a strong digital identity that leaves a lasting impact and connects with your audience.",
    },
    {
        icon: <MdSupportAgent />,
        heading: "Customer Support",
        paragraph: "Our support doesn’t end after delivery — we're here to assist you every step of the way, offering reliable help whenever you need it.",
    },
    {
        icon: <MdSupportAgent />,
        heading: "User Friendly",
        paragraph: "We believe in building not just websites, but experiences. Our goal is to create intuitive, fast, and beautifully designed solutions that truly connect with your audience.",
    },

    // 🔥 NEW SERVICES 🔥
    {
        icon: <FaBullhorn />,
        heading: "Digital Marketing",
        paragraph: "We create data-driven digital marketing strategies that boost visibility, attract the right audience, and convert clicks into real business growth.",
    },
    {
        icon: <FaSearch />,
        heading: "SEO Optimization",
        paragraph: "From on-page to technical SEO, we optimize your website to rank higher on search engines and bring consistent organic traffic.",
    },
    {
        icon: <FaGoogle />,
        heading: "Google Ads",
        paragraph: "We run high-performing Google Ads campaigns focused on ROI — smart targeting, optimized budgets, and measurable results.",
    },
];


    return (
        <div className="container mx-auto px-4 py-10 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesCard.map((card, index) => (
                <div
                    key={index}
                    className="relative group p-[1px] rounded-2xl bg-gradient-to-br from-[#8750f7] to-transparent hover:from-[#8750f7] hover:to-[#2a0845] transition-all duration-500"
                >
                    <div className="bg-[#1a1a2e] rounded-2xl p-8 h-full hover:shadow-2xl hover:shadow-[#8750f7]/30 transition-shadow duration-300">
                        <div className="text-white flex flex-col gap-4 items-start">
                            <div className="text-[#8750f7] text-4xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                                {card.icon}
                            </div>
                            <h2 className="text-xl font-semibold tracking-wide">{card.heading}</h2>
                            <p className="text-sm text-white/80 leading-relaxed">{card.paragraph}</p>
                            <span className="mt-2 h-[2px] w-16 bg-[#8750f7] block rounded-full group-hover:w-24 transition-all duration-300" />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ServiceBox;
