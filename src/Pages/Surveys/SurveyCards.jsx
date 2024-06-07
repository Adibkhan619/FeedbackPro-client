import { Link } from "react-router-dom";


const SurveyCards = ({survey}) => {
    return (
        <Link to={`/survey/${survey._id}`}>
        <div>
            <div key={survey?._id}>
                        <div className=" h-52 bg-base-100  border hover:bg-gray-100 ">
                            <div className="card-body h-full py-5">
                                <h2 className="card-title">
                                    {survey?.question}
                                </h2>
                                <p>{survey?.description}</p>
                                <div className="flex justify-between">
                               
                                </div>
                                     <p> Category: {survey?.category}</p>
                                <p>vote: {survey?.voteCount}</p>
                                {/* <p>{survey.name}</p>
                                <p>{survey.email}</p>
                                <p>Yes: {survey.yes}</p>
                                <p>No: {survey.no}</p> */}
                                <div className="card-actions justify-end">
                                    {/* <button className="btn btn-primary">
                                        Buy Now
                                    </button> */}
                                </div>
                            </div>
                        </div>
                    </div>
        </div>
        </Link>
    );
};

export default SurveyCards;