import Swal from "sweetalert2";
import useAxiosPublic from "../Hooks/useAxiosPublic";
// import { FaCheckCircle, FaMarker, FaRegTimesCircle, FaThumbsUp } from "react-icons/fa";
// import useAllUsers from "../Hooks/useAllUsers";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { FaCheck, FaExclamation, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import useSingleSurvey from "../Hooks/useSingleSurvey";
// import useSingleSurvey from "../Hooks/useSingleSurvey";

const YesNoCheckbox = ({ item }) => {
    const [, ,refetch] = useSingleSurvey()
    // const [users] = useAllUsers()
    const { user } = useContext(AuthContext);
    const navigate = useNavigate()
    const [vote, setVote] = useState()
    // console.log(users);
    const axiosPublic = useAxiosPublic();
    // console.log(item);
    const handleVote = (e) =>{
        setVote(e)
       
    }

    const [checkedState, setCheckedState] = useState([false, false, false]);

    const handleCheckboxChange = (index) => {
      const newCheckedState = [false, false, false];
      newCheckedState[index] = true;
      setCheckedState(newCheckedState);
    };


    const handleChange = async (e) => {
        // 
        e.preventDefault()
        
        if(!user){
            e.preventDefault();
             Swal.fire({
                position: "center",
                icon: "warning",
                title: `Please Login first`,
                showConfirmButton: false,
                timer: 1500,
            });
            return  navigate('/login')
        }
        // const { vote } = e.target;
        // console.log(name);
        const updateData = {
            Yes: vote === "yes" ? 1 : 0,
            No: vote === "no" ? 1 : 0,
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
            report: vote === "report" ? 1 : 0,
        };

        try {
            if (updateData.Yes > 0 || updateData.No > 0 || updateData.report > 0){
                
                const res = await axiosPublic.patch(
                `/survey/${item._id}`,
                updateData
            );
            if (res.data.modifiedCount > 0) {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: `${vote} vote is added.`,
                    showConfirmButton: false,
                    timer: 1500,
                });
            }
            
            console.log(res.data);
            }
            

            const newData = {
                Yes: vote === "yes" ? 1 : 0,
                No: vote === "no" ? 1 : 0,
                report: vote === "report" ? 1 : 0,
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
            console.log(newData);
            if (newData.Yes > 0 || newData.No > 0 || newData.report > 0) {
                const newResponse = await axiosPublic.post(
                    "/response",
                    newData
                );
                console.log(newResponse.data);
            }

            if (newData.report || updateData.report) {
                Swal.fire({
                    position: "center",
                    icon: "warning",
                    title: `Survey Reported`,
                    showConfirmButton: false,
                    timer: 1500,
                });
                return;
            }

        } catch (error) {
            console.error("Error updating the form data", error);
        }
        refetch()
    };

    return (

        <form onSubmit={handleChange}>
            <div className="flex justify-around gap-10">
                <label className="flex gap-2 items-center">
                    <input
                        type="checkbox"
                        name="yes"
                        value="yes"
                        checked={checkedState[0]}
                        onChange={()=>{handleVote("yes"); handleCheckboxChange(0)}}
                        className="checkbox checkbox-md"


                    />
                    <FaCheck />
                    Yes
                </label>
                <label className="flex gap-2 items-center">
                    <input
                        type="checkbox"
                        name="no"
                        value="no"
                        checked={checkedState[1]}
                        onChange={()=>{handleVote("no"); handleCheckboxChange(1)}}
                        className="checkbox checkbox-md "


                    />
                    <FaTimes />
                    No
                </label>
                <label className="flex gap-2 items-center">
                    <input
                        type="checkbox"
                        name="report"
                        value="report"
                        checked={checkedState[2]}
                        onChange={()=>{ handleVote("report"); handleCheckboxChange(2)}}
                        className="checkbox checkbox-md "
                    />
                    {/* <FaRegTimesCircle /> */}
                    <FaExclamation></FaExclamation>
                    Report
                </label>
                <button type="submit" className="btn bg-sky-500">submit</button>
            
        </div>
        </form>
    );
};

export default YesNoCheckbox;
