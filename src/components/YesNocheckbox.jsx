import Swal from "sweetalert2";
import useAxiosPublic from "../Hooks/useAxiosPublic";
// import { FaCheckCircle, FaMarker, FaRegTimesCircle, FaThumbsUp } from "react-icons/fa";
// import useAllUsers from "../Hooks/useAllUsers";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const YesNoCheckbox = ({ item }) => {
    // const [users] = useAllUsers()
    const {user} = useContext(AuthContext)
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
            voteCount: 1,
            votedBy: user.displayName
        };

        try {
            const res = await axiosPublic.patch(
                `/survey/${item._id}`,
                updateData
            );
            if(res.data.modifiedCount> 0){
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: `Your vote is added.`,
                    showConfirmButton: false,
                    timer: 1500
                  });
         }
            console.log(res.data);
        } catch (error) {
            console.error("Error updating the form data", error);
        }
    };

    return (
            <div className="flex justify-around">
                <label className="flex gap-2 items-center">
                    
                        
                    <input
                        type="checkbox"
                        name="yes"
                          onChange={handleChange}
                          className="checkbox checkbox-md"
                    />
                    
                    {/* <FaCheckCircle/> */}
                    Yes
                </label>
                <label className="flex gap-2 items-center">
                    
                    
                    <input
                        type="checkbox"
                        name="no"
                        id="no"
                          onChange={handleChange}
                          className="checkbox checkbox-md "
                    />
                    
                    
                    {/* <FaRegTimesCircle /> */}
                    No
                </label>
            </div>

    );
};

export default YesNoCheckbox;
