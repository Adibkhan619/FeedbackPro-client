import { useEffect, useState } from "react";
// import useSurveys from "../../../Hooks/useSurveys";
import SurveyCards from "../../Surveys/SurveyCards";


const HomeSurveys = () => {
    const [surveys, setSurveys] = useState()
    useEffect(()=> {
        fetch("http://localhost:5000/homeSurveys")
        .then(res => res.json())
        .then(data =>
            setSurveys(data)
        )
    },[])
    return (
        <div className="lg:grid lg: grid-cols-3 gap-5 flex overflow-auto">
            {
                surveys?.map(item => <SurveyCards key={item._id} survey={item}></SurveyCards>)
            }
        </div>
    );
};

export default HomeSurveys;