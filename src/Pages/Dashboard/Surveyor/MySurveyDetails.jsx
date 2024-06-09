
import { FaCheckCircle, FaExclamationCircle, FaTags, FaTimesCircle } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";


const MySurveyDetails = () => {


    const response = useLoaderData()
    console.log(response[0]?.id);
    const Title = response[0]?.question
    const Description = response[0]?.description
    const Category = response[0]?.category

    return (
        <div className="my-10 mx-5">
             <p className="my-5 bg-base-300 shadow-md p-4 rounded-r-xl lg:w-64 flex font-semibold    items-center gap-2">
                        <FaTags className=" text-2xl"></FaTags>
                        {Category}
                    </p>
             <h1 className="text-4xl font-bold">{Title}</h1>
             <h1 className="my-5">{Description}</h1>
        <div className="overflow-x-auto">
           


<table className="table">
{/* head */}
<thead>
  <tr>
    <th></th>
    <th>User Name</th>
    <th>User Email</th>
    <th>Yes</th>
    <th>No </th>
    <th>Report </th>
  </tr>
</thead>
<tbody>
  {/* row 1 */}
  {
    response.map((item, idx) => 
    <tr key ={item._id}>
        <th>{idx +1 }</th>
    <th>{item?.name}</th>
    <td>{item?.email}</td>
   
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

export default MySurveyDetails;