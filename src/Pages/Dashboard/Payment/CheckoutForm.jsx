import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useEffect, useState } from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import useCart from '../../../Hooks/useCart';
import useAuth from '../../../Hooks/useAuth';

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const axiosSecure = useAxiosSecure();
    const [cart] = useCart();
    const { user } = useAuth();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);

    useEffect(() => {
        if (totalPrice > 0) {
            axiosSecure.post('/create-payment-intent', { price: totalPrice })
                .then(res => {
                    setClientSecret(res.data.clientSecret);
                    console.log(res.data.clientSecret);
                })
        }
    }, [axiosSecure, totalPrice]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

        if (error) {
            setError(error.message)
            console.log('[error]', error);
        }

        else {
            setError('')
            console.log('[paymentMethod]', paymentMethod);
        }

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
                }
            }
        })

        if (confirmError) {
            console.log('[confirm error]', confirmError);
        }
        else {
            console.log('[payment intent]', paymentIntent)
            if (paymentIntent.status === 'succeeded') {
                setTransactionId(paymentIntent.id);
                const payment = {
                    email: user?.email,
                    price: totalPrice,
                    date: new Date(), // convert utc time zone
                    cartIds: cart.map(item => item._id),
                    menuItemIds: cart.map(item => item.menuId),
                    status: 'Pending',
                    transactionId: paymentIntent.id
                };
                const res = await axiosSecure.post('/payments', payment);
                console.log('[payment saved]', res.data)
            }
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-primary btn-sm mt-4' type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
                <p className='text-red-600'>{error}</p>
                {transactionId && <p className='text-green-600'>Your transaction id: {transactionId}</p>}
            </form>
        </div>
    );
};

export default CheckoutForm;