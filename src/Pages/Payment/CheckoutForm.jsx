import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import  { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CheckoutForm = () => {
    const [error, setError] = useState('')
    const {user} = useContext(AuthContext)
    const stripe = useStripe()
    const elements = useElements()
    const [message, setMessage] = useState('')
    const [transactionId, setTransactionId] = useState();
    const [clientSecret, setClientSecret] = useState('')
    const axiosSecure = useAxiosSecure()
    const membershipPrice = 5
    const navigate = useNavigate()
    useEffect(() => {
        axiosSecure.post('/create-payment-intent', {price: membershipPrice})
        .then(res => {
            console.log(res.data.clientSecret);
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
                    }
                    const res = await axiosSecure.post('/payments', payment)
                    console.log('payment saved', res.data);
                    

                    if(res.data?.insertedId){
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Payment Successful",
                            showConfirmButton: false,
                            timer: 1500
                          });
                          navigate("/")
                    }
            }

}
    return (
        <div>
            <div>
                <form onSubmit={handleSubmit}>
                    <CardElement
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
                        className="btn btn-primary my-5"
                        type="submit"
                        disabled={!stripe || !clientSecret}
                    >
                        Pay
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
