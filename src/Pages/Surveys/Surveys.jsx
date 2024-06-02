import useSurveys from "../../Hooks/useSurveys";

const Surveys = () => {
    const [surveys] = useSurveys();
    console.log(surveys);

    return (
        <div className="lg:mx-24 my-10">
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5">
                {surveys?.map((survey) => (
                    <div key={survey._id}>
                        <div className="card  h-full bg-base-100 shadow-xl border hover:bg-gray-100">
                            <div className="card-body">
                                <h2 className="card-title">
                                    {survey.question}
                                </h2>
                                <p>{survey.description}</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">
                                        Buy Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Surveys;
