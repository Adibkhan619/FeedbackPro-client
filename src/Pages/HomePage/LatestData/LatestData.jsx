import  { useEffect, useState } from 'react';
import SurveyCards from '../../Surveys/SurveyCards';

const LatestData = () => {
    const [surveys, setSurveys] = useState()
    useEffect(()=> {
        fetch("http://localhost:5000/latestData")
        .then(res => res.json())
        .then(data =>
            setSurveys(data)
        )
    },[])
    return (
        <div>
            <div className="lg:grid lg: grid-cols-3 flex overflow-auto">
            {
                surveys?.map(item => <SurveyCards key={item._id} survey={item}></SurveyCards>)
            }
        </div>
        </div>
    );
};

export default LatestData;