import { Link } from "react-router-dom";

const Slides = ({image, text, paragraph}) => {
    return (
        <div className="">
            <div
                className="hero lg:h-screen h-[300px]  w-full"
                style={{
                    backgroundImage:
                        `url(${image})`
                }}
            >
                <div className="hero-overlay -z-999 bg-gray-900 bg-opacity-50"></div>
                <div className="  text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-7xl  oleo font-bold ">
                            {text}
                        </h1>
                        <p className="mb-5 acme text-lg hidden lg:block">
                            {paragraph}
                        </p>
                        <Link to="/allfoods"><button className="btn btn-ghost text-xl acme text-amber-300">Our Foods</button></Link>
                        {/* <Link to="/register"><button className="btn btn-primary">Get Started</button>
</Link> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slides;