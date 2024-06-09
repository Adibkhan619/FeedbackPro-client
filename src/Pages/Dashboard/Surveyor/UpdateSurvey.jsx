import { useContext, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { useLoaderData, useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Helmet } from "react-helmet";

const UpdateSurvey = () => {
    const { user } = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();
    const survey = useLoaderData();
    const navigate = useNavigate()
    const [startDate, setStartDate] = useState(new Date());
    const { _id, question,  description, category, deadline } = survey;
    console.log(survey);

    const {
        register,
        handleSubmit,  
    } = useForm();

    const onSubmit = async (data) => {
        console.log(data);
        const res = await axiosPublic.patch(`/survey/${_id}`, data);
        console.log(res.data);
        if (res.data.modifiedCount > 0) {
            Swal.fire({
                position: "center",
                icon: "success",
                title: `Your survey has been updated successfully.`,
                showConfirmButton: false,
                timer: 1500,
            });
            navigate(`/dashboard/surveyor/surveys/${user?.email}`)
        }
    };

    return (
        <div>
            <div className="card lg:mx-16 lg:my-16 bg-base-200 max-w-screen  shadow-2xl ">
            <Helmet>
                <title>Feedback Pro | Dashboard</title>
            </Helmet>
                <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                    <h1 className="text-4xl font-semibold">Update Your Existing Survey</h1>
                    
                       {/* category=========> */}
                       <div className="col-span-full sm:col-span-3">
                        <label className="label">
                            <span className="text-lg font-semibold">Category</span>
                        </label>
                        <select
                            
                            className="select select-bordered h-6  w-full opacity-85  rounded-md focus:ring focus:ring-opacity-75 item-center text-gray-900  my-auto   p-2 text-sm"
                            {...register("category")}
                            required
                            placeholder="Category"
                            defaultValue={category}
                        >
                            <option value="" disabled selected hidden>Category</option>
                            <option value="Customer Satisfaction">
                                Customer Satisfaction
                            </option>
                            <option value="Employee Engagement">
                                Employee Engagement
                            </option>
                            <option value="Market Research">
                                Market Research
                            </option>
                            <option value="Product Feedback">
                                Product Feedback
                            </option>
                            <option value="Event Feedback">
                                Event Feedback
                            </option>
                        </select>
                    </div>

                    {/* questions */}
                    <div className="">
                    <div className="form-control ">
                        <label className="label">
                            <span className="text-lg font-semibold">Question</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Add Question"
                            className="input input-bordered w-full"
                            {...register("question")}
                            defaultValue={question}
                            required
                        />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="text-lg font-semibold">Description</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Short Description"
                            className="input input-bordered"
                            {...register("description")}
                            defaultValue={description}
                            required
                        />
                    </div>
                    </div>
                  

                 

                    <div className="form-control">
                        <label className="label">
                            <span className="text-lg font-semibold">Deadline</span>
                        </label>

                        <DatePicker
                        {...register("deadline")}
                        className="input input-bordered w-full"
                        defaultValue={deadline}
                        selected={startDate} onChange={(date) => setStartDate(date)} required/>

                        {/* <input
                            type="text"
                            placeholder="Deadline"  
                        /> */}
                    </div>
                    <input {...register("name")} value={user?.displayName} className="hidden"></input>
                    <input {...register("email")} value={user?.email} className="hidden"></input>
                    
                    <div className="form-control mt-6">
                        <button type="submit" className="btn bg-sky-300 font-bold">
                            Update Survey
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateSurvey;
