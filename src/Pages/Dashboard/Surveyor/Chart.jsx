
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import useSurveyorSurvey from '../../../Hooks/useSurveyorSurvey';
const Chart = () => {
    const [surveys] = useSurveyorSurvey()
    return (
        <div>
            <LineChart width={600} height={300} data={surveys} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
    <Line type="monotone" dataKey="yes" stroke="#8884d8" />
    <Line type="monotone" dataKey="no" stroke="#82ca9d" />
    
    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    <XAxis dataKey="question" />
    <YAxis />
    <Tooltip />
  </LineChart>
        </div>
    );
};

export default Chart;