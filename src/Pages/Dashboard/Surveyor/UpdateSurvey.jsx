import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
// import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { useLoaderData, useNavigate } from "react-router-dom";

const UpdateSurvey = () => {
    const { user } = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();
    const survey = useLoaderData();
    const navigate = useNavigate()
    const { _id, question, description, category, deadline } = survey;
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
            <div className="card shrink-0 mx-auto w-full max-w-md shadow-2xl bg-base-100">
                <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                    <h1 className="text-4xl">Add Your Custom Survey</h1>

                    <div className="form-control">
                        <label className="label">
                            <span className="text-xl">Question</span>
                        </label>
                        <input
                            type="text"
                            defaultValue={question}
                            className="input input-bordered"
                            {...register("question")}
                            required
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="text-xl">Description</span>
                        </label>
                        <input
                            type="text"
                            defaultValue={description}
                            className="input input-bordered"
                            {...register("description")}
                            required
                        />
                    </div>

                    {/* category=========> */}
                    <div className="col-span-full sm:col-span-3">
                        <label className="label">
                            <span className="text-xl">Category</span>
                        </label>
                        <select
                            className="select select-bordered h-6  w-full opacity-85  rounded-md focus:ring focus:ring-opacity-75 item-center text-gray-900  my-auto   p-2 text-sm"
                            {...register("category")}
                            required
                            defaultValue={category}
                        >
                            {/* <option value="" disabled selected hidden>Category</option> */}
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

                    <div className="form-control">
                        <label className="label">
                            <span className="text-xl">Deadline</span>
                        </label>
                        <input
                            type="text"
                            defaultValue={deadline}
                            className="input input-bordered"
                            {...register("deadline")}
                            required
                        />
                    </div>
                    <input
                        {...register("name")}
                        value={user.displayName}
                        className="hidden"
                    ></input>
                    <input
                        {...register("email")}
                        value={user.email}
                        className="hidden"
                    ></input>
                   

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
