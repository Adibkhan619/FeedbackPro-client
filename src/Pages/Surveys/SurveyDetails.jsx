import { useLoaderData } from "react-router-dom";
import YesNoCheckbox from "../../components/YesNocheckbox";

const SurveyDetails = () => {
    const survey = useLoaderData()
    console.log(survey);
    const {_id, name, email, category, question, description, deadline, voteCount, yes, no, report} = survey;
    return (
        <div>
            <h1>{question}</h1>
            <h1>{description}</h1>
            <p>{voteCount}</p>
            <p>{yes}</p>
            <p>{no}</p>
            <p>{category}</p>
            <p>{name}</p>
            <p>{email}</p>
            <p>{deadline}</p>
            <p>{report}</p>
            <div className="w-48">
                <YesNoCheckbox item={survey}></YesNoCheckbox>
            </div>
           
        </div>
    );
};

export default SurveyDetails;