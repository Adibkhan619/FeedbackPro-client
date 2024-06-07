

const Title = ({subHeading, heading}) => {
    return (
        <div>
            <div className="bg-gradient-to-r from-sky-400 via-sky-500 to-sky-400 ... text-center text-base-100 py-12 px-16 space-y-5 rounded-2xl">
                <h1 className="text-5xl font-semibold">{heading}</h1>
                {/* <div className="divider"></div> */}
                <p className=" ">{subHeading}</p>
            </div>
        </div>
    );
};

export default Title;