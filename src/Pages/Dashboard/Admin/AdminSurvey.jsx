import { Link } from "react-router-dom";
import useSurveys from "../../../Hooks/useSurveys";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";


const AdminSurvey = () => {
    const [surveys, , refetch] = useSurveys()
    const axiosSecure = useAxiosSecure()
    console.log(surveys);

    const handleUnPublishSurvey = (id) => {
        // console.log(item);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#b2d683",
            cancelButtonColor: "#f4afe3ed",
            confirmButtonText: "Yes, Unpublish it!",
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/survey/${id}`);
                console.log(res.data);

                if (res.data.deletedCount > 0) {
                    refetch();
                    Swal.fire({
                        title: "Unpublished!",
                        text: "Survey Has been removed",
                        icon: "success",
                    });
                }
            }
        });
    };

    return (
        <div>
              <div>
            <div className="overflow-x-auto mx-5 my-5">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Survey Question</th>
        <th>Description</th>
        <th>Category</th>
        <th>Deadline</th>
        <th>View Response</th>
        <th>Status</th>
        <th>Unp ublish</th>

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
            <Link to={`/dashboard/surveyor/details/${survey._id}`}> <button className="btn-ghost text-blue-400 p-5 rounded-md font-semibold hover:bg-blue-100">Responses</button ></Link>
         </td> 
         <td className="px-3 bg-green-100 font-semibold text-green-400">Published</td>
        <td>
          <button onClick={() => handleUnPublishSurvey(survey._id)} className="btn-ghost text-pink-600 p-5 rounded-md font-semibold hover:bg-pink-200">Unpublish</button>
         </td>  
        
      </tr>)
      }
    </tbody>
  </table>
</div>
        </div>
        </div>
    );
};

export default AdminSurvey;