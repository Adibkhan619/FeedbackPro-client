import { Link, useLoaderData } from "react-router-dom";


const MyPostedSurveys = () => {
    const surveys = useLoaderData()
    console.log(surveys);
    return (
        <div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Survey Question</th>
        <th>Description</th>
        <th>Category</th>
        <th>Deadline</th>
        <th>Update</th>
        <th>Details</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        surveys.map((survey, idx) => 
        <tr key ={survey._id}>
            <th>{idx +1 }</th>
        <th>{survey.question}</th>
        <td>{survey.description}</td>
        <td>{survey.category}</td>
        <td>{survey.deadline}</td>
        <td>
            <Link to={`/dashboard/surveyor/update/${survey._id}`}> update </Link>
         </td>  
        <td>
            <Link to={`surveyor/details/${survey._id}`}> update </Link>
         </td>  
        
      </tr>)
      }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyPostedSurveys;