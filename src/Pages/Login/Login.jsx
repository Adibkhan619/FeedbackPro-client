
import { useForm } from "react-hook-form"
import { NavLink } from "react-router-dom";


const Login = () => {

    const {
        register,
        handleSubmit,
        // watch,
        // formState: { errors },
      } = useForm()

      const onSubmit = (data) => console.log(data)


    return (
        <div>
            <div className=" ">
  <div className=" ">
    
    <div className="max-w-lg my-24 mx-auto shadow-2xl bg-base-100">
      <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
        <p>Don't have an account? <NavLink to="/signUp" className="text-blue-400">Sign Up</NavLink></p>
        <h1 className="text-4xl">Log In</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" {...register("email")} required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" {...register("password")} required />
         
        </div>
        <div className="form-control mt-6">
          <button type="submit" className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;