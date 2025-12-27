import SectionHeading from "../components/SectionHeading";

const MySkills = () => {
  const skills = [
    { name: "HTML 5", img: "/svg/html-img.svg" },
    { name: "CSS", img: "/svg/css-img.svg" },
    { name: "jQuery", img: "/svg/jquery-img.svg" },
    { name: "Bootstrap", img: "/svg/bootstrap-img.svg" },
    { name: "Tailwind", img: "/svg/tailwind-img.svg" },
    { name: "JavaScript", img: "/svg/javascript-img.svg" },
    { name: "React", img: "/svg/react-img.svg" },
    { name: "Redux", img: "/svg/redux-img.svg" },
    { name: "Node Js", img: "/svg/nodejs.svg" },
    {
      name: "GitHub",
      img: "https://img.icons8.com/m_sharp/200/FFFFFF/github.png",
    },
  ];

  return (
    <div id="skills" className="container mx-auto px-4 py-10">
      <SectionHeading
        title={"Languages on Which I work"}
        dsc={"These skills reflect my passion, dedication, and development journey."}
      />

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-10 mt-8">
        {skills.map((skill, idx) => (
          <div
            key={idx}
            className="skill bg-[#140C1C] p-5 rounded-xl shadow-md hover:scale-105 transition-transform duration-300 flex flex-col items-center text-white"
          >
            <img
              src={skill.img}
              alt={skill.name}
              className="w-14 h-14 sm:w-16 sm:h-16 object-contain mb-3"
            />
            <p className="text-sm sm:text-base text-center">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MySkills;
