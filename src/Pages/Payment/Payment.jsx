import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { Helmet } from 'react-helmet';
AOS.init();


const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK)
const Payment = () => {

    return (
        <div data-aos="fade-up" data-aos-duration="1500">
              <Helmet>
                <title>Feedback Pro | Payment</title>
            </Helmet>
            <Elements stripe={stripePromise}>
                <CheckoutForm></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;