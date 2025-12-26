import { FaGithub } from "react-icons/fa";
import { MdLiveTv } from "react-icons/md";

const ProjectWork = ({ projects }) => {
    return (
        <div className="relative overflow-hidden py-16 bg-gradient-to-br via-slate-100/80 to-blue-50/60 dark:from-black dark:via-gray-950/80 dark:to-slate-950/60">
            <section>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className="group relative flex flex-col bg-gradient-to-br from-gray-900/80 via-gray-800/60 to-gray-900/80 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 border border-gray-700/40 rounded-3xl shadow-lg hover:shadow-purple-500/30 transition-transform duration-300 hover:-translate-y-2"
                            >
                                {/* Project Image */}
                                <div className="overflow-hidden rounded-t-3xl">
                                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                                        <img
                                            src={project.img}
                                            alt={project.heading}
                                            className="w-full h-52 object-cover rounded-t-3xl transform group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </a>
                                </div>

                                {/* Project Content */}
                                <div className="p-6 flex flex-col justify-between flex-1">
                                    {/* Heading & Icons */}
                                    <div className="flex items-center justify-between mb-3">
                                        <h3 className="text-xl font-semibold text-white tracking-wide">
                                            {project.heading}
                                        </h3>
                                        <div className="flex gap-2">
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-700 hover:bg-purple-600 text-white transition-colors duration-300"
                                            >
                                                <FaGithub size={18} />
                                            </a>
                                            <a
                                                href={project.live}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-700 hover:bg-purple-600 text-white transition-colors duration-300"
                                            >
                                                <MdLiveTv size={20} />
                                            </a>
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <p className="text-gray-400 text-sm leading-relaxed mt-2">
                                        {project.dsc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProjectWork;
