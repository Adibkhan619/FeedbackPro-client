import { useLoaderData } from "react-router-dom";
import YesNoCheckbox from "../../components/YesNocheckbox";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const SurveyDetails = () => {
    const {user} = useContext(AuthContext)
    const axiosPublic = useAxiosPublic()
    const survey = useLoaderData();
    // console.log(survey);
    const {
        _id,
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
        comment
    } = survey;
    console.log(survey);
    // const [array, setArray] = useState([comment])
    const handleAddComment = async(e) => {
        e.preventDefault()

        const newComment = {comm:e.currentTarget.comment.value, email:user.email}

        const res = await axiosPublic.patch(`/survey/comment/${survey._id}`, newComment)
        console.log(res.data);
    }

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
                {
                    comment.map(item => (
                        <p key={item._id}>
                            {item.comm}
                        </p>
                    ))
                }
            </div>
            <div className="w-48">
                <YesNoCheckbox item={survey}></YesNoCheckbox>
            </div>
            <form onSubmit={handleAddComment}>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input
                        type="text"
                        name="comment"
                        placeholder="Your thoughts"
                        className="input input-bordered"
                    />
                </div>
                <button type="submit">Add Comment</button>
            </form>
        </div>
    );
};

export default SurveyDetails;
