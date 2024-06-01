
import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form"
import { AuthContext } from "../../Provider/AuthProvider";
import {  NavLink, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'

import SocialLogin from "../../components/SocialLogin";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const SignUp = () => {

    const { createUser, setUser, updateUserProfile, user, loading} = useContext(AuthContext);
    // const [error, setError] = useState();
    // const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    // const location = useLocation();

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

        
            // createUser(email, password).then(result => {
            //     const user = result.user
            //     updateUserProfile(name);
            // setUser({ ...result?.user, displayName: name });
            

            try {
                const result = await createUser(email, password);
    
                await updateUserProfile(name,);
                setUser({ ...result?.user, displayName: name });
    
                const { data } = await useAxiosPublic.post("/users"



                    // `https://b9a11-server-side-adibkhan619.vercel.app/jwt`,
                    // {
                    //     email: result?.user?.email,
                    // },
                    // { withCredentials: true }
                );
                navigate(from, { replace: true });
                console.log(data);
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
                console.log(data)
            } catch (err) {
                console.log(err);
            }
        }

        if (user || loading) return;



    return (
        <div>
            <div className="max-w-xl min-h-screen mx-auto">
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