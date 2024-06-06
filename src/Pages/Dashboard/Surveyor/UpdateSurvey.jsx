import { useContext, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
// import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { useLoaderData, useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const UpdateSurvey = () => {
    const { user } = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();
    const survey = useLoaderData();
    const navigate = useNavigate()
    const [startDate, setStartDate] = useState(new Date());
    const { _id, question, question2, question3, description, description2, description3, category, deadline } = survey;
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
                position: "top-end",
                icon: "success",
                title: `Your survey is updated successfully.`,
                showConfirmButton: false,
                timer: 1500,
            });
            navigate(`/dashboard/surveyor/surveys/${user?.email}`)
        }
    };

    return (
        <div>
            <div className="card lg:mx-16 lg:my-5  max-w-screen  shadow-2xl bg-base-100">
                <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                    <h1 className="text-4xl">Add Your Custom Survey</h1>
                    <p>You can add up-to 3 question into your survey</p>
                       {/* category=========> */}
                       <div className="col-span-full sm:col-span-3">
                        <label className="label">
                            <span className="text-xl">Category</span>
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
                    <div className="flex gap-5 flex-col lg:flex-row">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="text-xl">Question: 1</span>
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
                            <span className="text-xl">Description</span>
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
                    <div className="flex gap-5 flex-col lg:flex-row">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="text-xl">Question: 2</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Add Question"
                            className="input input-bordered w-full"
                            {...register("question2")}
                            defaultValue={question2}
                            required
                        />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="text-xl">Description</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Short Description"
                            className="input input-bordered"
                            {...register("description2")}
                            defaultValue={description2}
                            required
                        />
                    </div>
                    </div>
                    <div className="flex gap-5 flex-col lg:flex-row">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="text-xl">Question: 3</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Add Question"
                            className="input input-bordered w-full"
                            {...register("question3")}
                            defaultValue={question3}
                            required
                        />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="text-xl">Description</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Short Description"
                            defaultValue={description3}
                            className="input input-bordered"
                            {...register("description3")}
                            required
                        />
                    </div>
                    </div>
                   

                 

                    <div className="form-control">
                        <label className="label">
                            <span className="text-xl">Deadline</span>
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
                        <button type="submit" className="btn btn-primary">
                            Add Survey
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateSurvey;
