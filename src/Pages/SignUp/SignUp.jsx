
import { useContext } from "react";
import { useForm } from "react-hook-form"
import { AuthContext } from "../../Provider/AuthProvider";
import {  useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'

import SocialLogin from "../../components/SocialLogin";

const SignUp = () => {

    const { createUser, setUser, updateUserProfile} = useContext(AuthContext);
    // const [error, setError] = useState();
    // const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    // const location = useLocation();

    const {
        register,
        handleSubmit,
        // watch,
        // formState: { errors },
      } = useForm()

      const onSubmit = (data) => {   
        const email = data.email
        const password = data.password
        const name = data.name

        
            createUser(email, password).then(result => {
                const user = result.user
                updateUserProfile(name);
            setUser({ ...result?.user, displayName: name });
                if(user){
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Sign up successful",
                        showConfirmButton: false,
                        timer: 1500
                      });
                      navigate('/')
                }
            console.log(user);
            })
        
        console.log(data)}

        // const googleSignIn = 


    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Register now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body " onSubmit={handleSubmit(onSubmit)}>
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