import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useSurveyorSurvey from "../../../Hooks/useSurveyorSurvey";
// import MySurveyDetails from "./MySurveyDetails";


const MyPostedSurveys = () => {

    const axiosSecure = useAxiosSecure()
    // const surveys = useLoaderData()
    // console.log(surveys);

    const [surveys, ,refetch] = useSurveyorSurvey()

    const handleDeleteSurvey = (id) => {
        // console.log(item);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/survey/${id}`);
                console.log(res.data);

                if (res.data.deletedCount > 0) {
                    refetch();
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success",
                    });
                }
            }
        });
    };
    return (
        <div>
            <div className="overflow-x-auto m-5">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Survey Question</th>
        <th>Description</th>
        <th>Category</th>
        <th>Deadline</th>
        <th className="text-center">Update</th>
        <th className="text-center">Details</th>
        <th className="text-center">Delete</th>
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
        <td 
        // className="px-3 bg-blue-100 font-semibold text-blue-400"
        >
            <Link to={`/dashboard/surveyor/update/${survey._id}`}><button className="btn-ghost text-blue-400 p-5 rounded-md font-semibold hover:bg-blue-100">Update</button > </Link>
         </td>  
        <td 
        // className="px-3 bg-green-100 font-semibold "
        >
            <Link to={`/dashboard/surveyor/details/${survey._id}`} > <button className="btn-ghost p-5 rounded-md text-green-500 font-semibold hover:bg-green-100">Details </button></Link>
         </td> 
         {/* <td className="hidden">
            <MySurveyDetails survey={survey}></MySurveyDetails>
            </td>  */}
        <td>
          <button onClick={() => handleDeleteSurvey(survey._id)} className="btn-ghost text-pink-600 p-5 rounded-md font-semibold hover:bg-pink-200">Delete</button>
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