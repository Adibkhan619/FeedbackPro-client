import usePayments from "../../../Hooks/usePayments";


const AllPayments = () => {
    const [payments] = usePayments()
    console.log(payments);
    return (
        <div>
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