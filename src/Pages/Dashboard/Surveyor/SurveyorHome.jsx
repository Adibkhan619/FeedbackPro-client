import useSurveyorSurvey from "../../../Hooks/useSurveyorSurvey";
import icon from "../../../../public/icon/survey.png.png";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();


const SurveyorHome = () => {
    const [surveys] = useSurveyorSurvey();
    return (
        <div className="mt-10 mx-5">
            <h1 className="text-5xl font-semibold mb-10">
                My Posted Surveys : {surveys.length}
            </h1>
            <div className="flex justify-start gap-10">
                <div>
                    {surveys?.map((item, idx) => (
                        <div key={item._id}>
                            <div data-aos="flip-down" data-aos-duration="1500" className="border p-5 my-3 flex gap-3 items-center bg-base-200 shadow-lg">
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
                        </div>
                    ))}
                </div>
                <img data-aos="fade-up" data-aos-duration="3000" className="max-w-[500px] max-h-[500px] shadow-3xl rounded-full" src={icon} alt="" />
            </div>
        </div>
    );
};

export default SurveyorHome;
