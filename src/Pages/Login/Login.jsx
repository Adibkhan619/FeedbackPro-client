
import { useContext } from "react";
import { useForm } from "react-hook-form"
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { FcGoogle } from "react-icons/fc";
import SocialLogin from "../../components/SocialLogin";


const Login = () => {
    const {signIn} = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation();
    
    const from = location.state?.from?.pathname || "/";


    const {
        register,
        handleSubmit,
        // watch,
        // formState: { errors },
      } = useForm()

      const onSubmit = (data) => {
        const email = data.email;
        const password = data.password
        signIn(email, password)
        .then((result) => {
            const user = result.user;
            Swal.fire({
                title: "Successfully Logged In!",
                // text: 'Do you want to continue',
                icon: "success",
                confirmButtonText: "Cool",
            });
            navigate(from, { replace: true });
            console.log(user);
        })
        .catch((error) => {
            console.log(error);
            Swal.fire({
                title: "Login Failed!",
                // text: {error.message},
                icon: "error",
                confirmButtonText: "Cool",
            });
        });
        
        console.log(data)}



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
       <SocialLogin></SocialLogin>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;