import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-black text-white dark:bg-gray-900 px-4 py-8 sm:px-6 lg:px-8">
            <div className="max-w-screen-xl mx-auto">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 sm:gap-0">
                    {/* Logo and Brand */}
                    <a
                        href="/"
                        className="flex items-center justify-center sm:justify-start space-x-3"
                    >
                        <img src="/coder-2.png" className="h-8" alt="Logo" />
                        <span className="text-xl sm:text-2xl font-semibold whitespace-nowrap">
                            Code With Yash
                        </span>
                    </a>

                    {/* Links */}
                    <ul className="flex flex-wrap justify-center sm:justify-end items-center gap-4 text-sm font-medium">
                        <li>
                            <a href="#" className="hover:text-purple-400 transition">About</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-purple-400 transition">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-purple-400 transition">Licensing</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-purple-400 transition">Contact</a>
                        </li>
                    </ul>
                </div>

                {/* Divider */}
                <hr className="my-6 border-gray-700" />

                {/* Copyright */}
                <div className="text-center text-sm text-gray-500">
                    © 2025 <span className="hover:underline">Yash™</span>. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
