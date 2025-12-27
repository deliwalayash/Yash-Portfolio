import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectCoverflow } from 'swiper/modules';
import { LiaStarSolid } from 'react-icons/lia';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import SectionHeading from '../components/SectionHeading';

const testimonials = [
        {
            name: "Suraj",
            profileImg: "/testimonials/suraj.jpeg",
            designation: "Designer",
            review:
                "Abhishek is skilled in both front-end and back-end development. He works confidently with React, Angular, and Vue. His attention to responsive design ensures clean, accessible layouts across devices, making him a reliable and consistent contributor in any tech stack.",
        },
        {
            name: "Aryan",
            profileImg: "/testimonials/aryan.jpeg",
            designation: "Developer",
            review:
                "Abhishek approaches every challenge with a solution-first mindset. His creativity in improving user experience, combined with strong debugging skills, results in smooth and efficient applications. He handles issues quickly and ensures project momentum is never lost during development.",
        },
        {
            name: "Kaushal",
            profileImg: "/testimonials/kaushal.jpg",
            designation: "Full Stack Developer",
            review:
                "Abhishek is a great team player and communicator. He brings thoughtful insights to group discussions, shares helpful feedback, and collaborates across roles to meet project goals. His ability to align with teams makes working with him both smooth and productive.",
        },
        {
            name: "Anant",
            profileImg: "/testimonials/anant.jpeg",
            designation: "Freelancer",
            review:
                "Abhishek builds efficient backends using Node.js, Python, and Java. He’s skilled with RESTful APIs and databases like MongoDB and PostgreSQL. His ability to structure clean code and manage server-side logic helps deliver powerful and scalable web applications.",
        },
        {
            name: "Divyadarshan",
            profileImg: "/testimonials/dev.jpeg",
            designation: "DevOps",
            review:
                "Working with Abhishek has been a fantastic experience. He delivers well-organized code, responsive designs with Tailwind CSS, and dependable backend logic. His consistency, quality of work, and timely delivery make him a valuable developer on any modern project.",
        },
];

// This Reviews are just for displaying purpose....


const Testimonial = () => {
    return (
        <div id='testimonials' className='container mx-auto py-10'>
            <SectionHeading title={"Client's Review"} dsc={"Empowering people in new a digital journey with my super services"} />
            <div className="py-12 px-4">
                <div className="max-w-7xl mx-auto">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        loop={true}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        effect="coverflow"
                        pagination={{ el: '.custom-pagination', clickable: true }}
                        breakpoints={{
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        modules={[Autoplay, EffectCoverflow, Pagination]}
                        className="mySwiper"
                    >
                        {testimonials.map((client, idx) => (
                            <SwiperSlide key={idx}>
                                <div className="bg-[#1e1e1e] border border-[#8750f7] rounded-2xl p-6 shadow-lg h-full flex flex-col justify-between">
                                    <div>
                                        <div className="flex justify-center text-yellow-400 text-xl mb-4">
                                            {Array.from({ length: 5 }, (_, i) => (
                                                <LiaStarSolid key={i} />
                                            ))}
                                        </div>
                                        <p className="text-gray-200 text-center text-sm leading-relaxed">
                                            {client.review}
                                        </p>
                                    </div>
                                    <div className="mt-6 flex flex-col items-center">
                                        <div className="w-20 h-20 rounded-full border-2 border-[#27a776] overflow-hidden">
                                            <img
                                                src={client.profileImg}
                                                alt={`${client.name}'s profile`}
                                                className="object-cover w-full h-full"
                                            />
                                        </div>
                                        <h5 className="mt-3 text-white text-lg font-semibold capitalize">
                                            {client.name}
                                        </h5>
                                        <p className="text-sm text-gray-400 capitalize">{client.designation}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;