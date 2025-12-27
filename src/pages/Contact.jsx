import React from 'react';
import SectionHeading from '../components/SectionHeading';

const Contact = () => {
    return (
        <section id="contact" className="flex items-center justify-center py-16 px-4 sm:px-6">
            <div className="w-full max-w-6xl">
                <SectionHeading title={"Let's work together!"} dsc={"I design and code beautifully simple things and i love what i do. Just simple like that!"} />
                <div className="h-full bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 sm:p-10 shadow-xl my-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">

                        {/* Info Side */}
                        <div className="flex flex-col">
                            <div className="mb-8 md:mb-10">
                                <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-4">Let's Connect</h3>
                                <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                                    I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                                </p>
                            </div>
                            <div className="text-sm text-gray-300 space-y-3">
                                <p><span className="font-medium text-white">Email:</span> yashdeliwala10@gmail.com</p>
                                <p><span className="font-medium text-white">Location:</span> Surat, Gujarat</p>
                                <p><span className="font-medium text-white">Availability:</span> Web Developer</p>
                            </div>
                        </div>

                        {/* Form Side */}
                        <form className="space-y-4 sm:space-y-6">
                            <input
                                type="text"
                                required
                                placeholder="Your Name"
                                className="w-full bg-transparent border border-white/20 rounded-md px-4 py-3 text-white placeholder-gray-400 text-sm sm:text-base focus:outline-none focus:border-purple-500"
                            />

                            <input
                                type="email"
                                required
                                placeholder="Your Email"
                                className="w-full bg-transparent border border-white/20 rounded-md px-4 py-3 text-white placeholder-gray-400 text-sm sm:text-base focus:outline-none focus:border-purple-500"
                            />

                            <textarea
                                required
                                placeholder="Your Message"
                                rows={4}
                                className="w-full bg-transparent border border-white/20 rounded-md px-4 py-3 text-white placeholder-gray-400 text-sm sm:text-base focus:outline-none focus:border-purple-500 resize-none"
                            ></textarea>

                            <button
                                type="button"
                                className="w-full py-3 px-6 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-md hover:from-purple-700 hover:to-indigo-700 transition duration-300 shadow-md shadow-purple-500/30 text-sm sm:text-base"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
