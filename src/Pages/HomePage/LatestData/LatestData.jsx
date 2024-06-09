import  { useEffect, useState } from 'react';
import SurveyCards from '../../Surveys/SurveyCards';
import Title from '../../../components/Title';

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
            <div>
                <Title subHeading={"Stay up-to-date with the newest surveys added by our users! These fresh surveys cover a range of topics, from product feedback to event evaluations, providing timely insights and valuable data."} heading={"Latest Added Survey"}></Title>
            </div>
            <div className="lg:grid lg:grid-cols-3 md:grid-cols-2 gap-5 flex overflow-auto py-12 my-12">
            {
                surveys?.map(item => <SurveyCards key={item._id} survey={item}></SurveyCards>)
            }
        </div>
        </div>
    );
};

export default LatestData;