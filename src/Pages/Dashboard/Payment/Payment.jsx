import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import {Elements} from "@stripe/react-stripe-js"
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from "./CheckoutForm";

// TODO: add publishable key
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK)

const Payment = () => {
    return (
        <div>
            <SectionTitle heading="payment" subHeading='Please Pay to Eat' />
            <div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm />
                </Elements>
            </div>
            
        </div>
    );
};

export default Payment;