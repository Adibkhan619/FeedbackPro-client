

const SurveyCards = ({survey}) => {
    return (
        <div>
            <div key={survey._id}>
                        <div className="card  h-full bg-base-100 shadow-xl border hover:bg-gray-100">
                            <div className="card-body">
                                <h2 className="card-title">
                                    {survey.question}
                                </h2>
                                <p>{survey.description}</p>
                                <p>{survey.category}</p>
                                <p>{survey.name}</p>
                                <p>{survey.email}</p>
                                <p>{survey.voteCount}</p>
                                <p>{survey.yes}</p>
                                <p>{survey.no}</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">
                                        Buy Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
        </div>
    );
};

export default SurveyCards;