import { useLoaderData } from "react-router-dom";

const SurveyDetails = () => {
    const survey = useLoaderData()
    console.log(survey);
    const {_id, name, email, category, question, description, deadline, voteCount, yes, no, report} = survey;
    return (
        <div>
            <h1>{question}</h1>
            <h1>{description}</h1>
        </div>
    );
};

export default SurveyDetails;