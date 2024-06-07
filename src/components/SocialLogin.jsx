import toast, { Toaster } from 'react-hot-toast';
// import {  FaGoogle } from 'react-icons/fa';
// import AuthProvider from '../Provider/AuthProvider';

import useAxiosPublic from '../Hooks/useAxiosPublic';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';


const SocialLogin = () => {

    const {googleSignIn} = useContext(AuthContext);
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()

    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(res => {
            console.log(res.user);
            const userInfo = { 
                email: res.user?.email,
                name: res.user?.displayName            
            }
            axiosPublic.post('/users', userInfo)
            .then(res => {
                console.log(res.data);
                toast.success('Login Successful!');
                navigate('/')
                
            })
        })
    }
    return (
        <div className=''>
            <div className="divider">OR</div>
            <button onClick={handleGoogleSignIn} className="btn btn-block">
                
                <FcGoogle className='text-3xl'></FcGoogle>
                Google
            </button>
            <Toaster />
        </div>
    );
    
};

export default SocialLogin;
