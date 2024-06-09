/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import SurveyCards from "./SurveyCards";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const Surveys = () => {
    // const [surveys, setSurveys] = useSurveys();
    const [surveys, setSurveys] = useState([]);
    const axiosPublic = useAxiosPublic();
    const [category, setCategory] = useState();
    const [sort, setSort] = useState("");
    // console.log(sort);
    // console.log(surveys);

    useEffect(() => {
        const getData = async () => {
            const { data } = await axiosPublic.get(
                `http://localhost:5000/surveys?sort=${sort}`
            );
            setSurveys(data);
        };
        getData();
        // console.log(getData);
    }, [sort]);
    console.log(surveys);
    console.log(sort);

    const filteredCategory = surveys.filter(
        (item) => item.category == category
    );
    const handleCategory = (e) => {
        setCategory(e.target.value);
        console.log(category);
    };

    return (
        <div className="lg:mx-24">
            <div className="my-10 flex gap-5 justify-between">

                <h1 className="text-4xl font-semibold"><span className="font-bold text-5xl">Feedback Pro</span> Surveys</h1>
                
                <div className="flex gap-5">
                    {/* CATEGORY */}
                <select
                    onChange={handleCategory}
                    className="select select-bordered w-full max-w-xs rounded-xl"
                >
                    <option value="">Sort by Category</option>
                    <option value="Customer Satisfaction">
                        Customer Satisfaction
                    </option>
                    <option value="Employee Engagement">
                        Employee Engagement
                    </option>
                    <option value="Market Research">Market Research</option>
                    <option value="Product Feedback">Product Feedback</option>
                    <option value="Event Feedback">Event Feedback</option>
                </select>

                {/* SORT */}
                <select
                    onChange={(e) => {
                        setSort(e.target.value);
                    }}
                    value={sort}
                    name="sort"
                    className="select select-bordered w-full max-w-xs rounded-xl menu"
                >
                    <option value="">Sort By Vote Count</option>
                    <option value="asc">Ascending</option>
                    <option value="dsc">Descending</option>
                </select>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mb-10 gap-5">
                {!category
                    ? surveys?.map((survey) => (
                          <SurveyCards
                              survey={survey}
                              key={survey._id}
                          ></SurveyCards>
                      ))
                    : filteredCategory?.map((survey) => (
                          <SurveyCards
                              survey={survey}
                              key={survey._id}
                          ></SurveyCards>
                      ))}
            </div>
        </div>
    );
};

export default Surveys;
