
import { useContext } from "react";
import { useForm } from "react-hook-form"
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import SocialLogin from "../../components/SocialLogin";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { Helmet } from "react-helmet";
AOS.init();

const Login = () => {
    const {signIn} = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation();
    const {user, loading} = useContext(AuthContext)
    // const from = location.state?.from?.pathname || "/";
    const from = location.state?.from?.pathname || "/";
    // console.log(from);
    // console.log(location);
    // console.log(navigate);

    const {
        register,
        handleSubmit,
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
                confirmButtonColor: "#87CEEB"
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
                confirmButtonText: "Go Back",
            });
        });    
        console.log(data)}

        if (user || loading) return;

    return (
        <div>
              <Helmet>
                <title>Feedback Pro | Login</title>
            </Helmet>
            <div className=" ">
  <div className=" " data-aos="fade-down" data-aos-duration="1500">
    
    <div className="card max-w-lg my-24 mx-auto  bg-base-100 text-center  rounded-2xl">
      <form className="card-body min-w-[400px]" onSubmit={handleSubmit(onSubmit)}>
        <p className="text-primary"><small>Do not have an account? </small><NavLink to="/signUp" className=" font-semibold">Sign Up</NavLink></p>
        <h1 className="text-4xl font-semibold text-blue-400">Log In</h1>
        <div className="form-control">
          <label className="label ">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered " {...register("email")} required />
        </div>
        <div className="form-control">
          <label className="label ">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered " {...register("password")} required />
         
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