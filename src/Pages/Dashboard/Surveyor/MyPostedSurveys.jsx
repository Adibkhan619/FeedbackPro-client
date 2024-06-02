import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useSurveyorSurvey from "../../../Hooks/useSurveyorSurvey";


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
        <th>Delete</th>
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
            <Link to={`/dashboard/surveyor/update/${survey._id}`}> Update </Link>
         </td>  
        <td>
            <Link to={`surveyor/details/${survey._id}`}> Details </Link>
         </td>  
        <td>
          <button onClick={() => handleDeleteSurvey(survey._id)} className="btn-ghost">Delete</button>
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