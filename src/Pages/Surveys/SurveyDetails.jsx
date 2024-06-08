import { Link } from "react-router-dom";
import YesNoCheckbox from "../../components/YesNocheckbox";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import useAllUsers from "../../Hooks/useAllUsers";
import { FaTags } from "react-icons/fa";
import useSingleSurvey from "../../Hooks/useSingleSurvey";

const SurveyDetails = () => {
    const { user } = useContext(AuthContext);

    const [users] = useAllUsers();
    const axiosPublic = useAxiosPublic();

    const [survey, ,refetch] = useSingleSurvey();
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
        refetch();
    };

    return (
        <div className="lg:mx-24 md:mx-12 mx-5 lg:my-20 md:my-10 my-5">
            <div className="flex gap-10">
                <div className="w-1/2">
                    <h1 className="text-5xl font-semibold">{question}</h1>
                    <p className="my-5 bg-base-300 shadow-md p-4 rounded-r-xl w-64 flex font-semibold    items-center gap-2">
                        <FaTags className=" text-2xl"></FaTags>
                        {category}
                    </p>
                    <h1>{description}</h1>
                </div>

                <div>
                    <p className="font-semibold text-3xl">
                        <span className="p-4 text-orange-400 font-semibold ">
                            Total Votes :
                        </span>
                        {voteCount}
                    </p>
                    <p className="font-semibold">
                        <span className="p-4 text-green-500 font-semibold text-xl">
                            YES :
                        </span>
                        {yes}
                    </p>
                    <p className="font-semibold">
                        <span className="p-4 text-red-400 font-semibold text-xl">
                            NO :
                        </span>
                        {no}
                    </p>

                    <p className="font-semibold">Created By: {name}</p>
                    <p className="">{email}</p>
                    <p className="">{deadline}</p>
                    <p className="">{report}</p>
                </div>
            </div>

            {/* VOTING */}
            <div className="w-fit mt-16 card rounded-xl border">
                <div className=" space-y-3 card-body p-10">
                    <p>Put Your Vote</p>
                <YesNoCheckbox  item={survey} refetch={refetch}></YesNoCheckbox>
                </div>
                
            </div>

            {/* COMMENT */}
            <div>
                {comments?.map((item, idx) => (
                    <div key={idx}>
                        <p>{item?.comm}</p>
                        <p>{item?.name}</p>
                        <p>{item?.email}</p>
                    </div>
                ))}
            </div>

            {currentUser?.role === "pro-user" ? (
                <form onSubmit={handleAddComment}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Add comment</span>
                        </label>
                        <input
                            type="text"
                            name="comment"
                            placeholder="Your thoughts"
                            className="input input-bordered"
                        />
                    </div>
                    <button type="submit" className="btn">
                        Add Your feedback
                    </button>
                </form>
            ) : (
                <div>
                    Join as a pro-user to add your feedback
                    {user ? (
                        <Link to="user/payment">
                            <button>Join Now</button>
                        </Link>
                    ) : (
                        <p>
                            <Link to="/login"> Login First</Link>
                        </p>
                    )}
                </div>
            )}
        </div>
    );
};

export default SurveyDetails;
