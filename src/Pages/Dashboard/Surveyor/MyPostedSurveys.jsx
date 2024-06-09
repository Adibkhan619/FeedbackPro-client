import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useSurveyorSurvey from "../../../Hooks/useSurveyorSurvey";
import Chart from "./Chart";
import { useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { Helmet } from "react-helmet";
AOS.init();

const MyPostedSurveys = () => {
    const axiosSecure = useAxiosSecure();
    const [chart, setChart] = useState(false);
    const [category, setCategory] = useState();
    // console.log(chart);
    const [surveys, , refetch] = useSurveyorSurvey();

    const handleToggle = (e) => {
        if (e.target.checked) {
            setChart(true);
        } else {
            setChart(false);
        }
    };

    const filteredCategory = surveys.filter(
        (item) => item.category == category
    );
    const handleCategory = (e) => {
        setCategory(e.target.value);
        console.log(category);
    };

    const handleDeleteSurvey = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#58aeff",
            cancelButtonColor: "#fc5555",
            confirmButtonText: "Yes, Delete it",
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/survey/${id}`);
                console.log(res.data);

                if (res.data.deletedCount > 0) {
                    refetch();
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your survey has been deleted.",
                        icon: "success",                   
                    });
                }
            }
        });
    };
    return (
        <div className="my-10 mx-5">
              <Helmet>
                <title>Feedback Pro | Dashboard</title>
            </Helmet>
            <div className="flex items-center justify-start gap-24 mx-5">
                <h1 className="text-4xl font-semibold">My Posted Surveys</h1>
                <div className="flex gap-6 items-center">
                    {!chart? <p className="font-semibold">Click for Chart view</p>: <p className="font-semibold">Click for Table view</p>}
                    <input
                type="checkbox"
                onChange={handleToggle}
                className="toggle"
                value=""
            />
                </div>
            </div>
            
            <div className="">
                



            {chart ? (
                <Chart></Chart>
            ) : (
                <div className="overflow-x-auto m-5">
                    <select
                        onChange={handleCategory}
                        className="select select-bordered w-full max-w-xs mb-5"
                    >
                        <option value="">Sort by Category</option>
                        <option value="Customer Satisfaction">
                            Customer Satisfaction
                        </option>
                        <option value="Employee Engagement">
                            Employee Engagement
                        </option>
                        <option value="Market Research">Market Research</option>
                        <option value="Product Feedback">
                            Product Feedback
                        </option>
                        <option value="Event Feedback">Event Feedback</option>
                    </select>
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Survey Question</th>
                                <th>Description</th>
                                <th>Category</th>
                                <th>Deadline</th>
                                <th>Status</th>

                                <th className="text-center">Update</th>
                                <th className="text-center">Details</th>
                                <th className="text-center">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {!category
                                ? surveys?.map((survey, idx) => (
                                   
                                    <tr key={survey._id} data-aos="flip-down" data-aos-duration="1500">
                                          <th>{idx + 1}</th>
                                          <td>{survey.question}</td>
                                          <td>{survey.description} </td>
                                          <td>{survey.category}</td>
                                          <td>{survey.deadline?.slice(0,10)}</td>

                                          {survey?.status ==="Unpublish" ? <td >
                                            <p className="px-3 py-1 text-center rounded-lg bg-red-400  font-semibold text-white"> {survey?.status}</p>
                                       
                                    </td>
                                    :
                                    <td>
                                      <p className="px-3 py-1 text-center rounded-lg bg-green-400  font-semibold text-white"> {survey?.status}</p>
                                    </td>}
                                          <td
                                          // className="px-3 bg-blue-100 font-semibold text-blue-400"
                                          >
                                              <Link
                                                  to={`/dashboard/surveyor/update/${survey._id}`}
                                              >
                                                  <button className="btn-ghost text-blue-400 p-5 rounded-md font-semibold hover:bg-blue-100">
                                                      Update
                                                  </button>{" "}
                                              </Link>
                                          </td>
                                          <td
                                          // className="px-3 bg-green-100 font-semibold "
                                          >
                                              <Link
                                                  to={`/dashboard/surveyor/details/${survey._id}`}
                                              >
                                                  {" "}
                                                  <button className="btn-ghost p-5 rounded-md text-orange-500 font-semibold hover:bg-orange-200">
                                                      Details{" "}
                                                  </button>
                                              </Link>
                                          </td>
                                          {/* <td className="hidden">
            <MySurveyDetails survey={survey}></MySurveyDetails>
            </td>  */}
                                          <td>
                                              <button
                                                  onClick={() =>
                                                      handleDeleteSurvey(
                                                          survey._id
                                                      )
                                                  }
                                                  className="btn-ghost text-pink-600 p-5 rounded-md font-semibold hover:bg-pink-200"
                                              >
                                                  Delete
                                              </button>
                                          </td>
                                      </tr>
                                    
                                      
                                  ))
                                : filteredCategory?.map((survey, idx) => (
                                    <>
                                    <tr key={survey._id}>
                                          <th>{idx + 1}</th>
                                          <th>
                                            <ol>
                                                <li>{survey.question}</li> 
                                                <li>{survey?.question2}</li> 
                                                <li>{survey?.question3}</li>  
                                            </ol>
                                          </th>
                                          <td>
                                            <ol>
                                                <li> {survey.description}</li>
                                                <li> {survey?.description2}</li>
                                                <li> {survey?.description3}</li>
                                            </ol>
                                            <br />            
                                          </td>
                                          <td>{survey.category}</td>
                                          <td>
                                            {survey.deadline.slice(0,10)}
                                            </td>
                                          <td>
                                            {
                                                survey.status === "Publish" ? <p className="bg-green-400 px-2 text-center rounded-xl text-white font-semibold py-1">{survey.status}</p> : <p className="bg-orange-600 px-2 text-center rounded-xl text-white font-semibold py-1">{survey.status}</p>
                                            }
                                            
                                            </td>
                                          <td
                                          // className="px-3 bg-blue-100 font-semibold text-blue-400"
                                          >
                                              <Link
                                                  to={`/dashboard/surveyor/update/${survey._id}`}
                                              >
                                                  <button className="btn-ghost text-blue-400 p-5 rounded-md font-semibold hover:bg-blue-100">
                                                      Update
                                                  </button>{" "}
                                              </Link>
                                          </td>
                                          <td
                                          // className="px-3 bg-green-100 font-semibold "
                                          >
                                              <Link
                                                  to={`/dashboard/surveyor/details/${survey._id}`}
                                              >
                                                  {" "}
                                                  <button className="btn-ghost p-5 rounded-md text-green-500 font-semibold hover:bg-green-100">
                                                      Details{" "}
                                                  </button>
                                              </Link>
                                          </td>
                                          {/* <td className="hidden">
            <MySurveyDetails survey={survey}></MySurveyDetails>
            </td>  */}
                                          <td>
                                              <button
                                                  onClick={() =>
                                                      handleDeleteSurvey(
                                                          survey._id
                                                      )
                                                  }
                                                  className="btn-ghost text-pink-600 p-5 rounded-md font-semibold hover:bg-pink-200"
                                              >
                                                  Delete
                                              </button>
                                          </td>
                                      </tr>
                                    </>
                                      
                                  ))}
                        </tbody>
                    </table>
                </div>
            )}
            </div>
            
        </div>
    );
};

export default MyPostedSurveys;
