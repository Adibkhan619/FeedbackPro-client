import { Link } from "react-router-dom";
import useSurveys from "../../../Hooks/useSurveys";
// import UnpublishSurvey from "./UnpublishSurvey";
import { useState } from "react";

const AdminSurvey = () => {
    const [surveys] = useSurveys();
    // const axiosSecure = useAxiosSecure();
    console.log(surveys);

    const [selectedItem, setSelectedItem] = useState(null);
console.log(selectedItem);
    const openModal = (item) => {
        setSelectedItem(item);      
    };

    const closeModal = () => {
        setSelectedItem(null);
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
                            {surveys.map((survey, idx) => (
                                <tr key={survey._id}>
                                    <th>{idx + 1}</th>
                                    <th>{survey.question}</th>
                                    <td>{survey.description}</td>
                                    <td>{survey.category}</td>
                                    <td>{survey.deadline}</td>
                                    <td>
                                        <Link
                                            to={`/dashboard/surveyor/details/${survey._id}`}
                                        >
                                            {" "}
                                            <button className="btn-ghost text-blue-400 p-5 rounded-md font-semibold hover:bg-blue-100">
                                                Responses
                                            </button>
                                        </Link>
                                    </td>
                                    <td className="px-3 bg-green-100 font-semibold text-green-400">
                                        Published
                                    </td>
                                    <td>

                                    <button className="btn" onClick={()=>{
                                        document.getElementById('my_modal_1').showModal()
                                        openModal(survey)
                                    }}>open modal</button>


                                    <dialog id="my_modal_1" className="modal">
                                        <div className="modal-box">
                                            <h3 className="font-bold text-lg">{selectedItem?.question}!</h3>
                                            <p className="py-4">Press ESC key or click the button below to close</p>
                                            <div className="modal-action">
                                            <form method="dialog">
                                                <button className="btn" onClick={closeModal}>Close</button>
                                            </form>
                                            </div>
                                        </div>
                                        </dialog>                                     
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

export default AdminSurvey;
