import GlareHover from "../bitsComponent/GlareHover"
import RotatingText from "../bitsComponent/RotatingText"
import ProfileCardUi from '../bitsComponent/ProfileCardUi'

const Home = () => {

    return (
        <div id="home" className="container mx-auto px-4 sm:px-6 lg:px-10 pt-20 pb-32">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-10">

                {/* Left Info Section */}
                <div className="w-full lg:w-6/12 text-center lg:text-left">
                    <div className="home-info">
                        <div className="text mb-7">
                            <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center justify-center lg:justify-start mb-6">
                                <h1 className="text-white text-2xl sm:text-3xl font-bold">I am Yash</h1>
                                <div className="sm:ms-3 mt-2 sm:mt-0">
                                    <RotatingText
                                        texts={['Developer', 'Freelancer', 'Coder', 'Learner']}
                                        mainClassName="pt-3 rotating sm:px-2 text-xl sm:text-2xl md:px-3 sm:pt-1 sm:pb-0 px-2 mt-1 bg-slate-900 text-white overflow-hidden sm:py-1 justify-center rounded-lg"
                                        staggerFrom={"last"}
                                        initial={{ y: "100%" }}
                                        animate={{ y: 0 }}
                                        exit={{ y: "-120%" }}
                                        staggerDuration={0.025}
                                        splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                                        transition={{ type: "spring", damping: 30, stiffness: 400 }}
                                        rotationInterval={2000}
                                    />
                                </div>
                            </div>

                            <div>
                                <h2 className="text-[#8750f7] text-4xl sm:text-5xl font-bold leading-tight sm:leading-[60px]">
                                    Next-Level Web <br className="hidden sm:block" /> Developer.
                                </h2>
                                <p className="text-white mt-5 text-base sm:text-lg md:text-xl leading-7">
                                    I break down complex user experience problems to <br className="hidden sm:block" />
                                    create integrity-focussed solutions that connect <br className="hidden sm:block" />
                                    billions of people.
                                </p>
                            </div>
                        </div>

                        {/* Social Media */}
                        <div className="social-media">
                            <div className="flex flex-col sm:flex-row sm:items-center gap-2 justify-center lg:justify-start">
                                <div className="cv">
                                    <GlareHover
                                        glareColor="#ffffff"
                                        width="170px"
                                        height="60px"
                                        glareOpacity={0.3}
                                        glareAngle={-30}
                                        glareSize={300}
                                        transitionDuration={800}
                                        playOnce={false}
                                    >
                                        <a href="/resume/my-resume.pdf" target="_blank">
                                            <span className="text-sm text-white">Resume <i className="ri-download-2-line text-xl ms-2"></i>
                                            </span>
                                        </a>
                                    </GlareHover>
                                </div>
                                <ul className="flex justify-center sm:justify-start">
                                    {[
                                        { href: "https://www.instagram.com/dubeyabhishekofficial/", icon: "ri-instagram-line" },
                                        { href: "https://x.com/Abhishe07685380", icon: "ri-twitter-x-line" },
                                        { href: "https://www.linkedin.com/in/abhishek-dubey-3a5824307/", icon: "ri-linkedin-fill" },
                                        { href: "https://github.com/7700ABHISHEK", icon: "ri-github-fill" },
                                    ].map((social, index) => (
                                        <li key={index} className="social-link rounded-full border border-[#8750f7] text-[#8750f7]">
                                            <a href={social.href} target="_blank" rel="noopener noreferrer">
                                                <i className={social.icon}></i>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <ProfileCardUi />

            </div>
        </div>
    )
}

export default Home
