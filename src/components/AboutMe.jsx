import SectionHeading from "../components/SectionHeading";

const AboutMe = () => {
  return (
    <section id="about" className=" py-20">
      <div className="container mx-auto px-4">

        <SectionHeading
          title="About Me"
          dsc="A full-stack developer building modern, scalable, and user-focused digital products."
        />

        <div className="flex flex-col lg:flex-row items-center gap-16 mt-16">

          {/* LEFT SIDE – IMAGE */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative ">
              <img
                src="/yash-6.png"
                alt="profile"
                className="w-[320px] h-[420px] object-cover rounded-2xl grayscale hover:grayscale-0 transition duration-500"
              />
              <div className="absolute inset-0 rounded-2xl ring-2 ring-[#8750f7]/40"></div>
            </div>
          </div>

          {/* RIGHT SIDE – CONTENT */}
          <div className="w-full lg:w-1/2 text-[#DDDDDD]">

            <h2 className="text-3xl font-bold text-white mb-2">
              Hi There! I'm <span className="text-[#8750f7]">Yash</span>
            </h2>

            <h4 className="text-[#8750f7] font-semibold mb-6">
              Full Stack Developer
            </h4>

            <p className="text-white/70 leading-7 mb-8">
              I design and develop clean, responsive, and high-performing web
              applications. My background in business and marketing helps me
              build products that are not only functional but impactful.
            </p>

            {/* DETAILS – COL L / COL R */}
            <div className="flex flex-wrap text-sm">

              {/* LEFT COLUMN */}
              <div className="w-full sm:w-1/2 space-y-4">
                <p>
                  <span className="inline-block w-24 text-white font-semibold">
                    Birthday:
                  </span>
                  07 May 1989
                </p>

                <p>
                  <span className="inline-block w-24 text-white font-semibold">
                    Email:
                  </span>
                  yashdeliwala10@gmail.com
                </p>

                <p>
                  <span className="inline-block w-24 text-white font-semibold">
                    Language:
                  </span>
                  English, Hindi
                </p>
              </div>

              {/* RIGHT COLUMN */}
              <div className="w-full sm:w-1/2 space-y-4 mt-4 sm:mt-0">
                <p>
                  <span className="inline-block w-24 text-white font-semibold">
                    Phone:
                  </span>
                  +91 97129 52456
                </p>

                <p>
                  <span className="inline-block w-24 text-white font-semibold">
                    From:
                  </span>
                  Surat, Gujarat
                </p>

                <p>
                  <span className="inline-block w-24 text-white font-semibold">
                    Freelance:
                  </span>
                  Available
                </p>
              </div>

            </div>

            {/* BUTTON */}
            <a href="https://drive.google.com/file/d/1-2mGymaDQuPSpYSSl4Bmqa_wk6vmGSDe/view?usp=sharing" target="_blank">
              <button className="mt-10 bg-[#8750f7] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#6b3ee4] transition">
              Download CV
            </button>
            </a>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
