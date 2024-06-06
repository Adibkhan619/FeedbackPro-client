import { Link } from "react-router-dom";
import useSurveys from "../../../Hooks/useSurveys";
// import UnpublishSurvey from "./UnpublishSurvey";
import { useState } from "react";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";


const AdminSurvey = () => {
    const [surveys] = useSurveys();
    // const axiosSecure = useAxiosSecure();
    const axiosPublic = useAxiosPublic();
    console.log(surveys);

    const [selectedItem, setSelectedItem] = useState(null);
    console.log(selectedItem);

    const openModal = (item) => {
        setSelectedItem(item);
    };

    const closeModal = () => {
        // setSelectedItem();
    };

    const handleUnPublish = async (e) => {
        // e.preventDefault()
        // console.log(e.currenTarget.feedback.value);
        const updateData = {
            status: "Unpublish",
            adminFeedback: e.currentTarget.feedback.value,
        };

        const res = await axiosPublic.patch(
            `/survey/status/${selectedItem._id}`,
            updateData
        );
        if (res.data.modifiedCount > 0) {
            Swal.fire({
                position: "center",
                icon: "success",
                title: `Your vote is added.`,
                showConfirmButton: false,
                timer: 1500,
            });
        }
        console.log(res.data);
        // console.log(item);
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
                                    
                                    {survey.status ==="Unpublish" ? <td className="px-3 bg-red-100 font-semibold text-red-400">
                                        {survey.status}
                                    </td>
                                    :
                                    <td className="px-3 bg-green-100 font-semibold text-green-400">
                                        {survey.status}
                                    </td>}
                                    <td>
                                        <button
                                            className="btn"
                                            onClick={() => {
                                                document
                                                    .getElementById(
                                                        "my_modal_1"
                                                    )
                                                    .showModal();
                                                openModal(survey);
                                            }}
                                        >
                                            Unpublish
                                        </button>

                                        <dialog
                                            id="my_modal_1"
                                            className="modal"
                                        >
                                            <div className="modal-box">
                                                <h3 className="font-bold text-lg">
                                                    {selectedItem?.question}
                                                </h3>
                                                <p className="py-4">
                                                    {selectedItem?.description}
                                                </p>
                                                <div className="">
                                                    <form
                                                        method="dialog"
                                                        onSubmit={
                                                            handleUnPublish
                                                        }
                                                    >
                                                        <div className="form-control">
                                                            <label className="label">
                                                                <span className="label-text">
                                                                    Why do you want to unpublish the survey?
                                                                </span>
                                                            </label>
                                                            <input

                                                                type="text"
                                                                name="feedback"
                                                                placeholder="Feedback"
                                                                className="input input-bordered w-full my-5"
                                                                required
                                                            />
                                                        </div>
                                                        <div className="flex justify-between items-center">
                                                            <button
                                                            className="btn bg-pink-300"
                                                            type="submit"
                                                            onClick={closeModal}
                                                        >
                                                            Unpublish
                                                        </button>
                                                        <p>Press <span className="text-green-400">Esc </span>to cancel</p>
                                                        </div>
                                                        
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
