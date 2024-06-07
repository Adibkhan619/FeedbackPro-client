import { Link } from "react-router-dom";
import Login from "../../Login/Login";

const Slides = ({image, text, paragraph}) => {
    return (
        <div className="lg:h-[calc(100vh-68px)] h-full w-full">
            <div
                className="hero lg:h-screen h-full  w-full"
                style={{
                    backgroundImage:
                        `url(${image})`
                }}
            >
                <div className="hero-overlay -z-999 bg-gray-900 bg-opacity-50"></div>
                <div className="  text-center text-neutral-content">
                    <div className="lg:px-12 p-8 lg:flex justify-around lg:gap-12 lg:items-center max-h-[500px]">
                        <div className="max-w-[800px]">
                            <h1 className="mb-5 text-7xl text-left oleo font-bold ">
                            {text}
                        </h1>
                        <p className="mb-5 text-left acme text-lg hidden md:flex lg:flex max-w-[600px]">
                            {paragraph}
                        </p>
                        <Link to="/surveys"><button className="btn flex btn-ghost text-xl acme text-amber-300">Explore Now</button></Link>
                        </div>

                       
                        <div className="hidden lg:flex">
                             <Login></Login>
                        
                       
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slides;