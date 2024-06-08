import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import  { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { FaAward } from "react-icons/fa";

const CheckoutForm = () => {
    const [error, setError] = useState('')
    const {user} = useContext(AuthContext)
    const stripe = useStripe()
    const elements = useElements()
    const [message, setMessage] = useState('')
    const [transactionId, setTransactionId] = useState();
    const [clientSecret, setClientSecret] = useState('')
    const axiosSecure = useAxiosSecure()
    const axiosPublic = useAxiosPublic()
    const membershipPrice = 5
    const navigate = useNavigate()
    useEffect(() => {
        axiosSecure.post('/create-payment-intent', {price: membershipPrice})
        .then(res => {
            // console.log(res.data.clientSecret);
            setClientSecret(res.data.clientSecret)
        })

    },[axiosSecure, membershipPrice])

    const handleSubmit = async(e) => {
        e.preventDefault()

        if(!stripe || !elements){
            return 
        }
        const card = elements.getElement(CardElement)

        if(card === null){
            return
        }

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
          });
    
          if (error) {
            console.log('[error]', error);
                setError(error.message);
            
          } else {
            console.log('[PaymentMethod]', paymentMethod);
            setError("")
            setMessage('Payment Successful !')
          }

         //   CONFIRM PAYMENT ======> 
            const { paymentIntent, error: confirmError} = await stripe.confirmCardPayment(  clientSecret, {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'anonymous',
                        name: user?.displayName || 'anonymous'
                    }
                }
            })
            if(confirmError){
                console.log('confirm error')
            }else{
                console.log('payment Intent', paymentIntent);
                if(paymentIntent.status === 'succeeded')
                    setTransactionId(paymentIntent.id)

                // todo: Now save the payment into database ====> 
                    const payment = {
                        email: user.email,
                        name: user.displayName,
                        price: membershipPrice,
                        transactionId: paymentIntent.id,
                        date: new Date(), 
                    }

                    // MAKE USER PRO ------------------> 
                    axiosPublic.patch(`/users/${user.email}`).then(res => {
                    console.log('user made pro', res.data);
                    })

                    // SAVE PAYMENT ------------->
                    const res = await axiosSecure.post('/payments', payment)
                    console.log('payment saved', res.data);
                                       
                    if(res.data?.insertedId){
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Payment Successful. Now you are a Pro User " ,
                            showConfirmButton: false,
                            timer: 1500
                          });
                          navigate("/")
                    }
            }
}
    return (
        <div>
            <div className="card max-w-screen-lg border m-32 p-10  shadow-lg rounded-2xl">
                <h1 className="text-3xl flex gap-5 justify-between items-center font-semibold">Become Our Pro User <FaAward></FaAward></h1>
                <form onSubmit={handleSubmit}>
                    <CardElement className="border border-gray-300 p-5 mt-5 rounded-xl"
                        options={{
                            style: {
                                base: {
                                    fontSize: "16px",
                                    color: "#424770",
                                    "::placeholder": {
                                        color: "#aab7c4",
                                    },
                                },
                                invalid: {
                                    color: "#9e2146",
                                },
                            },
                        }}
                    />
                    <button
                        className="btn bg-sky-300 my-5 px-5 rounded-lg font-semibold"
                        type="submit"
                        // disabled={!stripe || !clientSecret}
                    >
                        Pay Now
                    </button>
                </form>
                <div>
                    {error ? (
                        <p className="text-red-500">{error}</p>
                    ) : (
                        <p className="text-green-500">{message}</p>
                    )}
                    {transactionId && (
                        <p className="text-green-500">
                            Transaction Id : {transactionId}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CheckoutForm;
