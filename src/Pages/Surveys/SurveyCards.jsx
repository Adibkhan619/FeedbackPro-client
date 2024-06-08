import { Link } from "react-router-dom";
import { FaTag, FaUser } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";

const SurveyCards = ({ survey }) => {
    return (
        <Fade>
            <Link to={`/survey/${survey._id}`}>
                <div>
                    <div key={survey?._id}>
                        <div className="rounded-xl shadow-md  dark:bg-base-100   bg-white   card hover:bg-base-300 dark:hover:bg-base-300">
                            <div className="card-body h-72 ">
                                <h2 className="card-title  text-3xl flex justify-start items-start">
                                    {survey?.question}
                                </h2>
                                <p className="dmSerif text-lg  ">
                                    <em>{survey?.description}</em>
                                </p>

                                <div className="mt-5 space-y-2">
                                    <p className=" text-base  flex items-center gap-4">
                                        <FaTag className="text-orange-400"></FaTag>
                                        {survey?.category}
                                    </p>

                                    <p className="  text-base  flex items-center gap-4">
                                        <FaUser className="text-sky-500"></FaUser>
                                        Voted: {survey?.voteCount} times
                                    </p>
                                </div>

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
        </Fade>
    );
};

export default SurveyCards;
