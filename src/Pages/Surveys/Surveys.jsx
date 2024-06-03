import { useState } from "react";
import useSurveys from "../../Hooks/useSurveys";
import SurveyCards from "./SurveyCards";

const Surveys = () => {
    const [surveys] = useSurveys();
    const [category, setCategory] = useState()
    console.log(surveys);

    const filteredCategory = surveys.filter((item) => item.category == category);
    const handleCategory = (e) => {
        setCategory(e.target.value);
        console.log(category);
    };

    return (
        <div className="lg:mx-24 my-10">
            <select
                        onChange={handleCategory}
                        className="select select-bordered w-full max-w-xs"
                    >
                        <option value="">All</option>
                        <option value="Customer Satisfaction">Customer Satisfaction</option>
                        <option value="Employee Engagement">Employee Engagement</option>
                        <option value="Market Research">Market Research</option>
                        <option value="Product Feedback">Product Feedback</option>
                        <option value="Event Feedback">Event Feedback</option>
                    </select>
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5">
                {!category? surveys?.map((survey) => (
                    <SurveyCards survey={survey} key={survey._id}></SurveyCards>
                ))
            :
            filteredCategory?.map((survey) => (
                <SurveyCards survey={survey} key={survey._id}></SurveyCards>)
            )}
            </div>
        </div>
    );
};

export default Surveys;
