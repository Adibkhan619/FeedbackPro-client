import { useEffect, useState } from "react";
// import useSurveys from "../../../Hooks/useSurveys";
import SurveyCards from "../../Surveys/SurveyCards";
import Title from "../../../components/Title";

const HomeSurveys = () => {
    const [surveys, setSurveys] = useState();
    useEffect(() => {
        fetch("http://localhost:5000/homeSurveys")
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
            <div className="lg:grid lg: grid-cols-3 gap-5 flex overflow-auto py-12 my-12">
                {surveys?.map((item) => (
                    <SurveyCards key={item._id} survey={item}></SurveyCards>
                ))}
            </div>
        </div>
    );
};

export default HomeSurveys;
