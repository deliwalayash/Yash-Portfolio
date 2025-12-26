import { useState } from "react"
import GlareHover from '../bitsComponent/GlareHover'

const Header = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="w-full text-white sticky top-0 z-50 bg-[#0f0f0f]/80 backdrop-blur-sm">
            <div className="container mx-auto px-10 gap-5 py-5 flex items-center justify-between">

                <a href="#">
                    <div className="flex items-center gap-7 cursor-pointer">
                        <img className="w-14" src="/coder-2.png" alt="logo" />
                        <p className="font-medium md:block hidden text-sm">yashdeliwala10@gmail.com</p>
                    </div>
                </a>

                <nav className="xl:block hidden">
                    <ul className="flex gap-5 cursor-pointer font-medium">
                        <li className="header-text">
                            <a href="#about">About</a>
                        </li>
                        <li className="header-text">
                            <a href="#service">Service</a>
                        </li>
                        <li className="header-text">
                            <a href="#works">Works</a>
                        </li>
                        <li className="header-text">
                            <a href="#skills">Skills</a>
                        </li>
                        <li className="header-text">
                            <a href="#testimonials">Testimonial</a>
                        </li>
                        <li className="header-text">
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                </nav>

                <div className="flex gap-4">
                    <div className="flex items-center" >
                        <GlareHover
                            glareColor="#ffffff"
                            glareOpacity={0.3}
                            glareAngle={-30}
                            glareSize={300}
                            transitionDuration={800}
                            playOnce={false}
                        >
                            <span className="text-sm font-bold text-white">
                                <a href="#contact">Hire Me!</a>
                            </span>
                        </GlareHover>
                    </div>
                    {/* For Mobile Screen */}

                    <button className="xl:hidden text-3xl text-purple-800" onClick={() => {
                        return setMenuOpen(!menuOpen);
                    }}>
                        <i className={menuOpen ? "ri-close-line" : "ri-menu-line"}></i>
                    </button>
                </div>
            </div>

            {
                <div
                    className={`xl:hidden overflow-hidden menu-open px-10 transition-all duration-500 ms-20 ease-in-out flex justify-start ${menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                        }`}
                >
                    <ul className="flex flex-col items-center justify-center gap-8 glass-card text-sm font-medium py-6 w-full max-w-xs">
                        <li className="hover:text-purple-800 cursor-pointer">
                            <a href="#service" onClick={() => setMenuOpen(false)}>Service</a>
                        </li>
                        <li className="hover:text-purple-800 cursor-pointer">
                            <a href="#works" onClick={() => setMenuOpen(false)}>Works</a>
                        </li>
                        <li className="hover:text-purple-800 cursor-pointer">
                            <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
                        </li>
                        <li className="hover:text-purple-800 cursor-pointer">
                            <a href="#testimonials" onClick={() => setMenuOpen(false)}>Testimonial</a>
                        </li>
                        <li className="hover:text-purple-800 cursor-pointer">
                            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
                        </li>
                    </ul>

                </div>
            }
        </header>
    )
}

export default Header