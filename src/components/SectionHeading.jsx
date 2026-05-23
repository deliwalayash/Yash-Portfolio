const SectionHeading = ({ title, dsc }) => {


    return (
        <div>
            <h2 className="section-heading-title text-4xl font-bold my-6 text-[#8750f7] text-center">
                {title}
            </h2>
            <div className="section-heading-description text-center text-[#DDDDDD] font-semibold mb-5 leading-8">
                {dsc}
            </div>
        </div>
    )
}

export default SectionHeading
