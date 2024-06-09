import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { Helmet } from "react-helmet";
AOS.init();

const UserReport = () => {
    const {user} = useContext(AuthContext)
    const reports = useLoaderData()
    // console.log(reports);

    const report = reports.filter(item => item?.voterEmail === user?.email)
    const filteredReports = report.filter(item => item.report === 1 )
    console.log(filteredReports);
    return (
        <div  data-aos="fade-down" data-aos-duration="1000">
              <Helmet>
                <title>Feedback Pro | Dashboard</title>
            </Helmet>
            <div className="overflow-x-auto mt-10 mx-5">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Survey Question</th>
        <th>Description</th>
        <th>Category</th>
        <th>Deadline</th>
      </tr>
    </thead>
    <tbody >
      {/* row 1 */}
      {
        filteredReports.map((item, idx) => 
        <tr key ={item._id} className="text-base">
            <th>{idx +1 }</th>
        <th>{item.question}</th>
        <td>{item.description}</td>
        <td>{item.category}</td>
        <td>{item.deadline}</td>     
      </tr>)
      }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default UserReport;