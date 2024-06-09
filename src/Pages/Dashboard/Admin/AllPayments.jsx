import usePayments from "../../../Hooks/usePayments";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { Helmet } from "react-helmet";
AOS.init();

const AllPayments = () => {
    const [payments] = usePayments()
    console.log(payments);
    return (
        <div  data-aos="fade-up" data-aos-duration="1500" className="mx-5">
              <Helmet>
                <title>Feedback Pro | Dashboard</title>
            </Helmet>
            <h1 className="text-4xl ml-5 font-bold my-7">Payments </h1>
              <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Transaction ID</th>
        <th>User Name</th>
        <th>User Email</th>
        <th>Date</th>


      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        payments.map((item, idx) => 
        <tr key ={item._id}>
            <th>{idx +1 }</th>
        <th>{item.transactionId}</th>
        <td>{item.name}</td>
        <td>{item.email}</td>
        <td>{item.date}</td>
       
        
      </tr>)
      }
    </tbody>
  </table>
        </div>
    );
};

export default AllPayments;