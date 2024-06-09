
import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form"
import { AuthContext } from "../../Provider/AuthProvider";
import {  NavLink, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

import SocialLogin from "../../components/SocialLogin";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const SignUp = () => {

    const { createUser, updateUserProfile, user, loading} = useContext(AuthContext);
    // const [error, setError] = useState();
    // const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    // const location = useLocation();
    const axiosPublic = useAxiosPublic()

        // NAVIGATE TO LAST VISITED PAGE
        useEffect(() => {
            if (user) {
                navigate("/");
            }
        }, [navigate, user]);
        const from = location.state || "/";


    const {
        register,
        handleSubmit,
        // watch,
        // formState: { errors },
      } = useForm()

      const onSubmit = async(data) => {   
        const email = data.email
        const password = data.password
        const name = data.name
        const role = 'user'

        createUser(email, password).then((result) => {
            const user = result.user;
            updateUserProfile(name)
            .then(() => {
                
                // create user entry in database
                const userInfo= {name, email, role}
                console.log(userInfo);
                axiosPublic.post("/users", userInfo)
                .then(res => {
                    console.log(res.data);
                    navigate(from, { replace: true });
                    if(res.data.insertedId){
                         Swal.fire({
                title: 'Successfully Registered!',
                // text: 'Do you want to continue',
                icon: 'success',
                confirmButtonText: 'Cool',
                confirmButtonColor: "#87CEEB"
              })
              navigate('/')
                    }
                })
            })
           
            console.log(user);
        });
        }

        if (user || loading) return;



    return (
        <div>
            <div data-aos="fade-up" data-aos-duration="1500" className="max-w-xl min-h-screen mx-auto">
  <div className="">
  
    <div className="max-w-lg my-12 mx-auto shadow-2xl bg-base-100">
      <form className="card-body " onSubmit={handleSubmit(onSubmit)}>
      <p>Already have an account? <NavLink to="/login" className="text-blue-400">Login</NavLink></p>
        <h1 className="text-4xl">Sign Up!</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="Name" className="input input-bordered" {...register("name")} required />
        </div>
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
          <button type="submit" className="btn btn-primary">Sign Up</button>
        </div>
        <SocialLogin></SocialLogin>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default SignUp;