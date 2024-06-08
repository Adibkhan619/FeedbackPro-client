import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

const Title = ({subHeading, heading}) => {
    return (
        <div data-aos="fade-up" data-aos-duration="3000">
            <div className="bg-gradient-to-r from-sky-300 via-sky-400 to-sky-300 ... text-center text-base-100 py-12 px-16 space-y-5 rounded-2xl">
                <h1 className="text-5xl font-semibold">{heading}</h1>
                {/* <div className="divider"></div> */}
                <p className=" ">{subHeading}</p>
            </div>
        </div>
    );
};

export default Title;