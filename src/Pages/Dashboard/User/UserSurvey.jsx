import useSurveys from "../../../Hooks/useSurveys";
import YesNoCheckbox from "../../../components/YesNocheckbox";


const UserSurvey = () => {
    const [surveys] = useSurveys()
    console.log(surveys);
    return (
        <div>
            <div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {surveys.map((item, idx) => (
        <tr key={item._id}>
        <th>{idx + 1}</th>
        <td>{item.question}</td>
        <td>{item.category}</td>
        <td>{item.description}</td>
        {/* <td>{item.question}</td> */}
        <td>
            <YesNoCheckbox item={item}></YesNoCheckbox>
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