import { Helmet } from "react-helmet";
import {
    FaCheckCircle,
    FaExclamationCircle,
    FaTags,
    FaTimesCircle,
} from "react-icons/fa";
import { useLoaderData } from "react-router-dom";

const MySurveyDetails = () => {
    const response = useLoaderData();
    // console.log(response[0]?.id);
    console.log(response);
    const Title = response[0]?.question;
    const Description = response[0]?.description;
    const Category = response[0]?.category;
    const Name = response[0]?.name;
    const Email = response[0]?.email;

    return (
        <div className="my-10 mx-5">
            <Helmet>
                <title>Feedback Pro | Dashboard</title>
            </Helmet>
            <div className="flex lg:gap-20 gap-5 justify-start items-center">
                <p className="my-5 bg-base-300 shadow-md p-4 rounded-r-xl lg:w-64 flex font-semibold    items-center gap-2">
                    <FaTags className=" text-2xl"></FaTags>
                    {Category}
                </p>
       
            </div>

            <h1 className="text-4xl font-bold">{Title}</h1>
            <div className="flex lg:gap-20 gap-5 justify-start items-center">
                 <h1 className="my-5">Description : 
                <span className="font-bold"> {Description}</span> 
            </h1>
            <h1 className="my-5 ">
                    Created By : <span className="font-bold">{Name}</span>{" "}
                </h1>
                <h1 className="my-5 ">
                    Email : <span className="font-bold">{Email}</span>{" "}
                </h1>
            </div>
           

            {response.length === 0 && (
                <p className="text-3xl font-semibold">
                    No response recorded yet
                </p>
            )}
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Voted By</th>
                            <th>Voter Email</th>
                            <th>Yes</th>
                            <th>No </th>
                            <th>Report </th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {response.map((item, idx) => (
                            <tr key={item._id}>
                                <th>{idx + 1}</th>
                                <th>{item?.voterName}</th>
                                <td>{item?.voterEmail}</td>

                                <td>
                                    {item.Yes == 1 ? (
                                        <FaCheckCircle className="text-green-400 text-xl"></FaCheckCircle>
                                    ) : (
                                        <p> </p>
                                    )}
                                </td>
                                <td>
                                    {item.No == 1 ? (
                                        <FaTimesCircle className="text-red-400 text-xl"></FaTimesCircle>
                                    ) : (
                                        <p> </p>
                                    )}
                                </td>
                                <td>
                                    {item.report == 1 ? (
                                        <FaExclamationCircle className="text-orange-400 text-xl"></FaExclamationCircle>
                                    ) : (
                                        <p> </p>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MySurveyDetails;
