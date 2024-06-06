import { useLoaderData } from "react-router-dom";
import YesNoCheckbox from "../../components/YesNocheckbox";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import useAllUsers from "../../Hooks/useAllUsers";

const SurveyDetails = () => {
    const { user } = useContext(AuthContext);
    // console.log(user?.email);
    const [users] = useAllUsers();
    const axiosPublic = useAxiosPublic();
    const survey = useLoaderData();
    // console.log(users);
    const currentUser = users.find((item) => item.email == user?.email);
    console.log(currentUser);

    const {
        // _id,
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
        // e.preventDefault()
        const newComment = {
            comm: e.currentTarget.comment.value,
            email: user.email,
        };

        const res = await axiosPublic.patch(
            `/survey/comment/${survey._id}`,
            newComment
        );
        console.log(res.data);
    };

    return (
        <div>
            <h1>{question}</h1>
            <h1>{description}</h1>
            <p>{voteCount}</p>
            <p>{yes}</p>
            <p>{no}</p>
            <p>{category}</p>
            <p>{name}</p>
            <p>{email}</p>
            <p>{deadline}</p>
            <p>{report}</p>
            <div>
                {comments.map((item, idx) => (
                    <div key={idx}>
                        <p>{item.comm}</p>
                    </div>
                ))}
            </div>
            <div className="w-48">
                <YesNoCheckbox item={survey}></YesNoCheckbox>
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
                <p>Join as a pro-user to add your feedback</p>
            )}
        </div>
    );
};

export default SurveyDetails;
