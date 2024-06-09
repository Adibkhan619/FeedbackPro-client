
import useSurveys from "../../../Hooks/useSurveys";
import YesNoCheckbox2 from "../../../components/YesNocheckbox2";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

const UserSurvey = () => {
    const [surveys] = useSurveys()
    // console.log(surveys);
    
    
    return (
        <div data-aos="fade-up" data-aos-duration="1000" className="m-5">
            <div className="">
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Survey Title</th>
        <th>Category</th>
        <th>Description</th>
        <th>Deadline</th>
        <th className="text-center">Vote</th>
      </tr>
    </thead>
    <tbody className="">
      {/* row 1 */}
      {
      surveys?.map((item, idx) => (
        <tr key={item._id} className="">
        <th>{idx + 1}</th>
        <td>{item.question}</td>
        <td>{item.category}</td>
        <td>{item.description}</td>
        <td>{item.deadline}</td>
        {/* <td>{item.question}</td> */}
        <td>
            <YesNoCheckbox2 item={item}></YesNoCheckbox2>
        </td>
        
      </tr>
      ))}
   
    </tbody>
  </table>
</div>
            </div>

        </div>
    );
};

export default UserSurvey;