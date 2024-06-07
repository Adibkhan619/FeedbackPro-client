import { useContext, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
// import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AddSurvey = () => {
    const { user } = useContext(AuthContext);
    const axiosPublic = useAxiosPublic()
    const [startDate, setStartDate] = useState(new Date());

    const {
        register,
        handleSubmit,
        reset
    } = useForm();

    const onSubmit = async(data) => {
        data.deadline=startDate
        data.comment=[],
        data.status="Publish"
        data.adminFeedback= ""
        console.log(data);
        const res = await axiosPublic.post("/surveys", data)
        console.log(res.data);
        if(res.data.insertedId){
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `Your survey is added.`,
                showConfirmButton: false,
                timer: 1500
              });
              reset()
        }

    };

    return (
        <div>
            <div className="card lg:mx-16 lg:my-5 lg:flex-row flex-col-reverse max-w-full  shadow-2xl bg-base-100">
                <div className="card-body w-1/2 hidden lg:flex">
                    {/* <h1>Add survey</h1> */}
                    <p>Creating surveys has never been easier! Whether you’re looking to gauge customer satisfaction, understand employee engagement, conduct market research, gather product feedback, or collect event feedback, our survey tool empowers you to gather valuable insights with just a few clicks. Customize your surveys and start collecting responses in no time!</p>
                </div>
                <form className="card-body w-full" onSubmit={handleSubmit(onSubmit)}>
                    <h1 className="text-4xl">Add Your Custom Survey</h1>
                    {/* <p>You can add up-to 3 question into your survey</p> */}
                       {/* category=========> */}
                       <div className="col-span-full sm:col-span-3">
                        <label className="label">
                            <span className="text-xl">Survey Category</span>
                        </label>
                        <select
                            
                            className="select select-bordered h-6  w-full opacity-85  rounded-md focus:ring focus:ring-opacity-75 item-center text-gray-900 dark:text-white  my-auto   p-2 text-sm"
                            {...register("category")}
                            required
                            placeholder="Category"
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
                    <div className="flex gap-5 flex-col ">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="text-xl">Enter your question :</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Add Question"
                            className="input input-bordered w-full"
                            {...register("question")}
                            required
                        />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="text-xl">Short description : </span>
                        </label>
                        <input
                            type="text"
                            placeholder="Short Description"
                            className="input input-bordered"
                            {...register("description")}
                            required
                        />
                    </div>
                    </div>
                    {/* <div className="flex gap-5 flex-col lg:flex-row">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="text-xl">Question: 2</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Add Question"
                            className="input input-bordered w-full"
                            {...register("question2")}
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
                            {...register("description3")}
                            required
                        />
                    </div>
                    </div> */}
                   

                 

                    <div className="form-control">
                        <label className="label">
                            <span className="text-xl">Voting deadline</span>
                        </label>

                        <DatePicker
                        {...register("deadline")}
                        className="input input-bordered w-full"
                        type="text"
                        
                        selected={startDate} onChange={(date) => setStartDate(date)} required/>

                    </div>
                    <input {...register("name")} value={user?.displayName} className="hidden"></input>
                    <input {...register("email")} value={user?.email} className="hidden"></input>
                    
                    <div className="form-control mt-6">
                        <button type="submit" className="btn btn-primary">
                            Post Your Survey
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddSurvey;
