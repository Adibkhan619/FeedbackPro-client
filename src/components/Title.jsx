import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

const Title = ({subHeading, heading}) => {
    return (
        <div data-aos="fade-up" data-aos-duration="2000">
            <div className="bg-gradient-to-r from-sky-300 via-sky-400 to-sky-300 ... text-center text-base-100 p-8 lg:px-16 space-y-5 ">
                <h1 className="text-5xl font-bold ">{heading}</h1>
                {/* <div className="divider"></div> */}
                <p className=" hidden lg:flex md:flex">{subHeading}</p>
            </div>
        </div>
    );
};

export default Title;