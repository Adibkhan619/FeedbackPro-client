import  { useEffect, useState } from 'react';
import SurveyCards from '../../Surveys/SurveyCards';
import Title from '../../../components/Title';
import { FaArrowRight } from 'react-icons/fa';

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
            <div className="lg:grid lg:grid-cols-3 md:grid-cols-2 gap-5 flex overflow-auto my-5 lg:py-12 lg:my-12">
            {
                surveys?.map(item => <SurveyCards key={item._id} survey={item}></SurveyCards>)
            }
        </div>
        <p className="text-center font-semibold flex items-center gap-3 justify-center lg:hidden">Scroll Right <FaArrowRight></FaArrowRight></p>
        </div>
    );
};

export default LatestData;