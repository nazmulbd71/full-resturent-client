

const SectionTitle = ({heading,subHeading}) => {
    return (
        <div className="md:w-3/12 mx-auto my-12 text-center">
            <p className="text-[#D99904]">---{subHeading}---</p>
            <h3 className="text-3xl uppercase font-bold border-y-4">{heading}</h3>
        </div>
    );
};

export default SectionTitle;