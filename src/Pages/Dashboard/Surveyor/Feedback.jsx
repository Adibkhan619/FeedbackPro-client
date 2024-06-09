import { useContext } from "react";
import useSurveys from "../../../Hooks/useSurveys";
import { AuthContext } from "../../../Provider/AuthProvider";
import { Helmet } from "react-helmet";

const Feedback = () => {
    const [surveys] = useSurveys()
    const {user} = useContext(AuthContext)
    console.log(surveys);

    const unPublished = surveys.filter(item => item?.status === "Unpublish" && item?.email ===user?.email)
    console.log(unPublished);
    return (
        <div className="my-10 mx-5 overflow-x-auto">
              <Helmet>
                <title>Feedback Pro | Dashboard</title>
            </Helmet>
            <h1 className="text-4xl font-semibold my-10">My Feedbacks</h1>
            {
                unPublished.length === 0 && <p className="text-3xl font-semibold mb-5">No Feedback from the admin</p>
            }
              <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Survey Title</th>
        <th>Category</th>
        <th>Status</th>
        <th>Admin Feedback</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {unPublished.map((item, idx) => (
        <tr key={item._id}>
        <th>{idx + 1}</th>
        <td>{item.question}</td>
        <td>{item.category}</td>
        <td>{item.status}</td>
        <td>{item.adminFeedback}</td>
        {/* <td>{item.question}</td> */}
  
        
      </tr>
      ))}
   
    </tbody>
  </table>
        </div>
    );
};

export default Feedback;