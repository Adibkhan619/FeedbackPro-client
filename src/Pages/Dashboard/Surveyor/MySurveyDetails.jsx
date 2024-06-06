
import { useLoaderData } from "react-router-dom";


const MySurveyDetails = () => {


    const response = useLoaderData()
    console.log(response[0]?.id);
    const Title = response[0]?.question
    const Description = response[0]?.description
    const Category = response[0]?.category

    return (
        <div>
             <h1>{Title}</h1>
             <h1>{Description}</h1>
             <h1>{Category}</h1>
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
   
    <td className="  text-xl">{item.Yes} </td>

    <td className=" text-xl">{item.No} </td>
  </tr>)
  }
</tbody>
</table>
</div>
    </div>
    );
};

export default MySurveyDetails;