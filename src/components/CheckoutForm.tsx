import {CardElement, useElements, useStripe} from "@stripe/react-stripe-js";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../store/Store.ts";
import {FormEvent, useEffect} from "react";
import {confirmCardPayment, createPaymentIntent} from "../Slices/PaymentSlice.ts";

interface orderBookDetails {
    bookId : string,
    price : number,
    quantity : number
}

export const CheckoutForm = () => {
    const stripe = useStripe()
    const elements = useElements()
    const dispatch = useDispatch<AppDispatch>()
    const { loading, error, clientSecret } = useSelector((state: RootState) => state.payment)
    const cartItems = useSelector((state:RootState)=> state.addToCard.value)

    const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)

    const orderedBookDetail: orderBookDetails[] = cartItems.map((item) => ({
        bookId: item.id,
        price: item.price,
        quantity: item.quantity
    }))

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()

        if (!stripe || !elements) {
            console.error("Stripe.js has not loaded yet.")
            return
        }

        if (!clientSecret) {
            console.error("No clientSecret found.")
            return
        }

        const cardElement = elements.getElement(CardElement)
        if (!cardElement) {
            console.error("CardElement not found.")
            return
        }

        console.log("Dispatching confirmCardPayment...", { clientSecret, cardElement })

        dispatch(confirmCardPayment({ stripe, clientSecret, cardElement }))
    }
    useEffect(() => {
        dispatch(createPaymentIntent({
            amount: totalAmount * 100,
            metadata: {
                userId :"U00-002",
                books: JSON.stringify(orderedBookDetail)
            }
        }))
    }, [dispatch,cartItems])
   /* useEffect(() => {
        dispatch(createPaymentIntent()).then((res) => {
            console.log("Payment Intent Response:", res)
        })
    }, [dispatch])*/


    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: "16px",
                                color: "#32325d",
                                fontFamily: '"Inter", sans-serif',
                                "::placeholder": {
                                    color: "#aab7c4",
                                },
                                padding: "10px 0",
                            },
                        },
                    }}
                    className='border-2 border-gray-300 rounded-md '
                />
                {error && <p className="text-red-500 text-sm z-5000">{error}</p>}
            </div>
            <button
                type="submit"
                disabled={!stripe || loading}
                className="w-full bg-black text-white py-3 px-4 rounded-md font-medium hover:bg-gray-900
                 z-5000 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
            >
                {loading ? "Processing..." : "Pay"}
            </button>
        </form>
    )
}