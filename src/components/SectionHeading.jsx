import BlurText from "../bitsComponent/BlurText"

const SectionHeading = ({ title, dsc }) => {


    return (
        <div>
            <BlurText
                text={title}
                delay={150}
                animateBy="words"
                direction="top"
                className="text-4xl font-bold my-6 text-[#8750f7] flex justify-center"
            />
            <div className="text-center text-[#DDDDDD] font-semibold mb-5 leading-8">
                {dsc}
            </div>
        </div>
    )
}

export default SectionHeading