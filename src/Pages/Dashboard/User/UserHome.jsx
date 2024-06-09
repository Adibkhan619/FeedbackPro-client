import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { FaCheckCircle, FaExclamationCircle, FaTimesCircle } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { Helmet } from "react-helmet";
AOS.init();

const UserHome = () => {
    const {user} = useContext(AuthContext)
    // console.log(user);
    const axiosPublic = useAxiosPublic()

    const {data: responses =[]} = useQuery({
        queryKey: ['response'],
        queryFn: async() =>{
            const res = await axiosPublic.get(`/response`)
            return res.data
        }
    })

    const userResponse = responses.filter(item => item?.voterEmail === user?.email)
    // console.log(userResponse);

    // console.log(responses);

    return (
        <div className="mx-5" data-aos="fade-down" data-aos-duration="1000">
              <Helmet>
                <title>Feedback Pro | Dashboard</title>
            </Helmet>
            <h1 className="mt-10 text-4xl font-semibold">My Responses</h1>
            <div className="overflow-x-auto mt-5">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Survey Question</th>
        <th>Yes Vote</th>
        <th>No Vote</th>
        <th>Report</th>
        
      </tr>
    </thead>
    <tbody className="text-base">
      {/* row 1 */}
      {
        userResponse?.map((item, idx) => 
        <tr key ={item._id}>
            <th>{idx +1 }</th>
        <th>{item.question}</th>
        <td>
        {
            item.Yes == 1 ? <FaCheckCircle className="text-green-400 text-xl"></FaCheckCircle> : <p> </p>
        }
        </td>  
        <td>
        {
            item.No == 1 ? <FaTimesCircle className="text-red-400 text-xl"></FaTimesCircle> : <p> </p>
        }
        </td>
        <td>
        {
            item.report == 1 ? <FaExclamationCircle className="text-orange-400 text-xl"></FaExclamationCircle> : <p> </p>
        }
        </td>
        

      </tr>)
      }
    </tbody>
  </table>
</div>
          
        </div>
    );
};

export default UserHome;