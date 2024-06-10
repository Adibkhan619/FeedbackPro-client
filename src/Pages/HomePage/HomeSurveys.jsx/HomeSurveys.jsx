import { useEffect, useState } from "react";
// import useSurveys from "../../../Hooks/useSurveys";
import SurveyCards from "../../Surveys/SurveyCards";
import Title from "../../../components/Title";
import { FaArrowRight } from "react-icons/fa";

const HomeSurveys = () => {
    const [surveys, setSurveys] = useState();
    useEffect(() => {
        fetch("https://feedbackpro.vercel.app/homeSurveys")
            .then((res) => res.json())
            .then((data) => setSurveys(data));
    }, []);
    return (
        <div>
            <Title
                heading={"Our top voted surveys"}
                subHeading={
                    "Discover the most popular surveys created by our community! These top-voted surveys highlight key insights and trends across various categories, including customer satisfaction, employee engagement, and market research."
                }
            ></Title>
            <div className="lg:grid lg:grid-cols-3 gap-5 flex py-2 my-5 overflow-auto lg:py-12 lg:my-12">
                {surveys?.map((item) => (
                    <SurveyCards key={item._id} survey={item}></SurveyCards>
                ))}
            </div>
            <p className="text-center font-semibold flex items-center gap-3 justify-center lg:hidden">Scroll Right <FaArrowRight></FaArrowRight></p>
        </div>
    );
};

export default HomeSurveys;
