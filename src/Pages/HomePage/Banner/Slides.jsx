import { Link } from "react-router-dom";
import Login from "../../Login/Login";

const Slides = ({image, text, paragraph}) => {
    return (
        <div className="h-[calc(100vh-68px)]">
            <div
                className="hero lg:h-screen h-[300px]  w-full"
                style={{
                    backgroundImage:
                        `url(${image})`
                }}
            >
                <div className="hero-overlay -z-999 bg-gray-900 bg-opacity-50"></div>
                <div className="  text-center text-neutral-content">
                    <div className="max-w-full lg:px-12 lg:flex justify-around lg:gap-12 lg:items-center max-h-[500px]">
                        <div className="max-w-[800px]">
                            <h1 className="mb-5 text-7xl text-left oleo font-bold ">
                            {text}
                        </h1>
                        <p className="mb-5 text-left acme text-lg hidden lg:block max-w-[600px]">
                            {paragraph}
                        </p>
                        <Link to="/surveys"><button className="btn flex btn-ghost text-xl acme text-amber-300">Explore Now</button></Link>
                        </div>
                        
                        <Login></Login>
                       
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slides;