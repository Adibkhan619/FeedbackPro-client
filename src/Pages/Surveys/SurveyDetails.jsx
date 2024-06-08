import { Link } from "react-router-dom";
import YesNoCheckbox from "../../components/YesNocheckbox";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import useAllUsers from "../../Hooks/useAllUsers";
import {
    FaArrowAltCircleDown,
    FaComment,
    FaTags,
    FaUser,
} from "react-icons/fa";
import useSingleSurvey from "../../Hooks/useSingleSurvey";
import Swal from "sweetalert2";
import { Fade } from "react-awesome-reveal";
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

const SurveyDetails = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { user } = useContext(AuthContext);

    const [users] = useAllUsers();
    const axiosPublic = useAxiosPublic();

    const [survey, , refetch] = useSingleSurvey();
    console.log(survey);

    const currentUser = users.find((item) => item.email == user?.email);
    console.log(currentUser);

    const {
        name,
        email,
        category,
        question,
        description,
        deadline,
        voteCount,
        yes,
        no,
        report,
        comments,
    } = survey;
    console.log(survey);

    const handleAddComment = async (e) => {
        e.preventDefault();
        const newComment = {
            comm: e.currentTarget.comment.value,
            email: user.email,
            name: user.displayName,
        };

        const res = await axiosPublic.patch(
            `/survey/comment/${survey._id}`,
            newComment
        );
        console.log(res.data);
        if (res.data.modifiedCount > 0) {
            Swal.fire({
                position: "center",
                icon: "success",
                title: `Your Comment Added`,
                showConfirmButton: false,
                timer: 1500,
            });
        }
        refetch();
    };

    return (
        <Fade>
            <div className="lg:mx-48  mx-5 lg:my-8 md:my-3 my-3">
            <div className="flex-col flex lg:flex-row lg:gap-10 items-center lg:justify-between">
                <div className="lg:w-1/2 space-y-3">
                    <p className="my-5 bg-base-300 shadow-md p-4 rounded-r-xl lg:w-64 flex font-semibold    items-center gap-2">
                        <FaTags className=" text-2xl"></FaTags>
                        {category}
                    </p>
                    <h1 className="text-5xl font-semibold animate__flipInX animate__animated" >{question}</h1>
                    <h1 className="dmSerif text-xl font-semibold">
                        {description}
                    </h1>

                    {/* VOTING */}
                    <div className="lg:w-fit mt-5 card rounded-2xl  dark:bg-base-100 shadow-md bg-white">
                        <div className=" space-y-3 card-body p-5">
                            <p className="w-fit font-semibold flex text-white items-center gap-2  bg-sky-400 px-3 py-1 rounded-3xl">
                                <FaArrowAltCircleDown className="text-xl" />
                                Cast Your Vote Here
                            </p>
                            <YesNoCheckbox
                                item={survey}
                                refetch={refetch}
                            ></YesNoCheckbox>
                        </div>
                    </div>
                </div>

                <div className="lg:text-right text-center mt-10 " data-aos="zoom-in-down" data-aos-duration="2000">
                    <p className="font-bold text-5xl">
                        <span className="p-4 text-orange-400 font-bold ">
                            Total Votes :
                        </span>
                        {voteCount}
                    </p>
                    <p className="font-bold text-4xl">
                        <span className="p-4 text-green-500 font-bold ">
                            YES :
                        </span>
                        {yes}
                    </p>
                    <p className="font-bold text-4xl">
                        <span className="p-4 text-red-400 font-bold ">
                            NO :
                        </span>
                        {no}
                    </p>
                    <p className="font-semibold text-xl">
                        <span className="p-4 text-orange-600 font-semibold ">
                            Report :
                        </span>
                        {report}
                    </p>

                    <p className="font-semibold mt-10">Created By: {name}</p>
                    <p className="">{email}</p>
                    <p className="">{deadline}</p>
                </div>
            </div>

            {currentUser?.role === "pro-user" ? (
                <form
                    onSubmit={handleAddComment}
                    className="mt-10 lg:w-1/2"
                >
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text text-2xl font-semibold">
                                Add comment
                            </span>
                        </label>
                        <input
                            type="text"
                            name="comment"
                            placeholder="Your thoughts"
                            className="input input-bordered rounded-lg "
                        />
                    </div>
                    <button
                        type="submit"
                        className="btn rounded-xl mt-5 bg-sky-300 text-base-100"
                    >
                        Add Your feedback
                    </button>
                </form>
            ) : (
                <div className="lg:mt-5">
                    Join as a pro-user to add comment
                    {currentUser?.role === "user" && (
                        <Link to="/dashboard/user/payment">
                            <button className="btn ml-5">Join Now</button>
                        </Link>
                    )}
                </div>
            )}
            {/* COMMENT */}
            <div className="lg:mt-10 ">
                <h1 className="text-2xl font-semibold my-5">Comments</h1>
                {comments?.map((item, idx) => (
                    <div key={idx}>
                        <div className="card p-5 shadow-md lg:w-1/2 " data-aos="flip-down" data-aos-duration="2000">
                            <div className="flex items-center gap-5">
                                <FaUser></FaUser>
                                <div>
                                    <p className="font-semibold">
                                        {item?.name}
                                    </p>
                                    <p className="text-sm">{item?.email}</p>
                                </div>
                            </div>

                            <div className="flex gap-3  items-center ">
                                <FaComment className="text-xl "></FaComment>
                                <p className="text-xl mt-2 ">{item?.comm}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </Fade>
    );
};

export default SurveyDetails;
