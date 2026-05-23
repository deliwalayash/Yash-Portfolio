import { useState } from "react"
import GlareHover from '../bitsComponent/GlareHover'

const Header = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header data-site-header className="site-header w-full text-white fixed top-0 left-0 z-50">
            <div className="container mx-auto px-5 sm:px-8 lg:px-10 gap-5 py-5 flex items-center justify-between">

                <a href="#">
                    <div className="flex items-center gap-7 cursor-pointer">
                        <img className="w-14" src="/coder-2.png" alt="logo" />
                        <p className="text-xl sm:text-2xl font-semibold tracking-tight whitespace-nowrap sm:block hidden">Code With Yash</p>
                    </div>
                </a>

                <nav className="xl:block hidden">
                    <ul className="site-nav flex items-center gap-1 cursor-pointer font-medium rounded-full px-2 py-2">
                        <li className="header-text">
                            <a className="nav-link" href="#home">Home</a>
                        </li>
                        <li className="header-text">
                            <a className="nav-link" href="#about">About</a>
                        </li>
                        <li className="header-text">
                            <a className="nav-link" href="#service">Service</a>
                        </li>
                        <li className="header-text">
                            <a className="nav-link" href="#google-ads">Ads</a>
                        </li>
                        <li className="header-text">
                            <a className="nav-link" href="#works">Works</a>
                        </li>
                        <li className="header-text">
                            <a className="nav-link" href="#skills">Skills</a>
                        </li>
                        <li className="header-text">
                            <a className="nav-link" href="#testimonials">Testimonial</a>
                        </li>
                        <li className="header-text">
                            <a className="nav-link" href="#contact">Contact</a>
                        </li>
                    </ul>
                </nav>

                <div className="header-actions flex items-center gap-3">
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

                    <button className="mobile-menu-button xl:hidden text-3xl text-white" onClick={() => {
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
                            <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
                        </li>
                        <li className="hover:text-purple-800 cursor-pointer">
                            <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
                        </li>
                        <li className="hover:text-purple-800 cursor-pointer">
                            <a href="#service" onClick={() => setMenuOpen(false)}>Service</a>
                        </li>
                        <li className="hover:text-purple-800 cursor-pointer">
                            <a href="#google-ads" onClick={() => setMenuOpen(false)}>Google Ads</a>
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
