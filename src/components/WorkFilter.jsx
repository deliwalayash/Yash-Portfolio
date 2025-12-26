import { useState } from "react";

const WorkFilter = ({getName}) => {
    const filters = ["all", "react", "javascript", "html / css"];

    const getId = (id) => {
        getName(id);
    }

    return (
        <div className="px-4 py-6 flex justify-center">
            <div className="inline-flex flex-wrap justify-center gap-3 sm:gap-5 bg-[#000012] rounded-full shadow-lg p-2">
                {filters.map((filter, index) => (
                    <button
                        id = {`${filter}`}
                        key={index}
                        onClick={(e) => {
                            getId(e.target.id)
                        }}
                        className={`px-4 py-2 capitalize rounded-3xl text-sm sm:text-base border border-[#8750f7] text-[#8750f7] focus:bg-[#8750f7] focus:text-white font-semibold transition-all duration-300 ease-in-out
                        `}
                    >
                        {filter}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default WorkFilter;
