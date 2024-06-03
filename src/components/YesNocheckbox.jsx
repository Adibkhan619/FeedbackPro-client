import Swal from "sweetalert2";
import useAxiosPublic from "../Hooks/useAxiosPublic";
// import { FaCheckCircle, FaMarker, FaRegTimesCircle, FaThumbsUp } from "react-icons/fa";
// import useAllUsers from "../Hooks/useAllUsers";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import {
    FaCheck,
    FaExclamation,
    FaTimes,
} from "react-icons/fa";

const YesNoCheckbox = ({ item }) => {
    // const [users] = useAllUsers()
    const { user } = useContext(AuthContext);
    // console.log(users);
    const axiosPublic = useAxiosPublic();
    // console.log(item);
    const handleChange = async (e) => {
        const { name } = e.target;

        const updateData = {
            Yes: name === "yes" ? 1 : 0,
            No: name === "no" ? 1 : 0,
            question: item.question,
            category: item.category,
            description: item.description,
            deadline: item.deadline,
            name: item.name,
            email: item.email,
            voteCount: 1,
            voterName: user.displayName,
            voterEmail: user.email,
            id: item._id,
            report: name === "report" ? 1 : 0,
        };

        try {
            const res = await axiosPublic.patch(
                `/survey/${item._id}`,
                updateData
            );

            const newData = {
                Yes: name === "yes" ? 1 : 0,
                No: name === "no" ? 1 : 0,
                report: name === "report" ? 1 : 0,
                name: item.name,
                email: item.email,
                question: item.question,
                category: item.category,
                description: item.description,
                deadline: item.deadline,
                voteCount: 1,
                voterName: user.displayName,
                voterEmail: user.email,
                id: item._id,
            };
            const newResponse = await axiosPublic.post("/response", newData);
            console.log(newResponse.data);

            if (newData.report) {
                Swal.fire({
                    position: "center",
                    icon: "warning",
                    title: `Survey Reported`,
                    showConfirmButton: false,
                    timer: 1500,
                });
                return;
            }

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
        } catch (error) {
            console.error("Error updating the form data", error);
        }
    };

    return (
        <div className="flex justify-around gap-10">
            <label className="flex gap-2 items-center">
                <input
                    type="checkbox"
                    name="yes"
                    onChange={handleChange}
                    className="checkbox checkbox-md"
                />
                <FaCheck />
                Yes
            </label>
            <label className="flex gap-2 items-center">
                <input
                    type="checkbox"
                    name="no"
                    onChange={handleChange}
                    className="checkbox checkbox-md "
                />
                <FaTimes />
                No
            </label>
            <label className="flex gap-2 items-center">
                <input
                    type="checkbox"
                    name="report"
                    onChange={handleChange}
                    className="checkbox checkbox-md "
                />
                {/* <FaRegTimesCircle /> */}
                <FaExclamation></FaExclamation>
                Report
            </label>
        </div>
    );
};

export default YesNoCheckbox;
