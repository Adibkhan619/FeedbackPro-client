import useSurveyorSurvey from "../../../Hooks/useSurveyorSurvey";
import icon from "../../../../public/icon/survey.png.png";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
AOS.init();


const SurveyorHome = () => {
    const [surveys, , ] = useSurveyorSurvey([]);
    
    return (
        <div className="mt-10 mx-5">
              <Helmet>
                <title>Feedback Pro | Dashboard</title>
            </Helmet>
            <h1 className="text-5xl font-semibold mb-10">
                My Posted Surveys : {surveys.length}
            </h1>
            
            <div className="flex justify-start gap-10">
            {
                surveys.length === 0 && 
                <div className="space-y-5">
                    <h1 className="text-4xl font-bold">No Survey Posted Yet</h1>
                    <div className="divider"></div>
                    <Link to="/dashboard/surveyor/create" className="btn bg-sky-300">Add Survey</Link>
                </div>
            }
                <div>
                    {surveys?.map((item, idx) => (
                        <div key={item._id}>
                            <Link to={`/dashboard/surveyor/details/${item._id}`}>
                            <div data-aos="flip-down" data-aos-duration="1500" className="border p-5 my-3 flex gap-3 items-center bg-base-200 shadow-lg hover:bg-base-100">
                                <h1 className=" font-bold bg-sky-300 px-3 py-1 rounded-full">
                                    {idx + 1}
                                </h1>
                                <div>
                                    <h1 className="text-xl font-bold">
                                        {item.question}
                                    </h1>
                                    <h1 className=" font-semibold">
                                        {item.category}
                                    </h1>
                                </div>
                            </div>
                            </Link>
                        </div>
                    ))}
                </div>
                <img data-aos="fade-up" data-aos-duration="3000" className="hidden lg:flex md:flex md:max-h-[300px] md:max-w-[300px]  lg:max-w-[450px] lg:max-h-[450px] mx-auto shadow-3xl rounded-full" src={icon} alt="" />
            </div>
        </div>
    );
};

export default SurveyorHome;
