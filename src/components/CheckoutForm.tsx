import {CardElement, useElements, useStripe} from "@stripe/react-stripe-js";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../store/Store.ts";
import {useEffect} from "react";

export const CheckoutForm = () => {
    const stripe = useStripe()
    const elements = useElements()
    const dispatch = useDispatch<AppDispatch>()
    const { loading, error, clientSecret } = useSelector((state: RootState) => state.payment)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!stripe || !elements || !clientSecret) return

        const cardElement = elements.getElement(CardElement)
        if (!cardElement) return

        dispatch(confirmCardPayment({ clientSecret, cardElement }))
    }

    useEffect(() => {
        dispatch(createPaymentIntent());
    }, [dispatch])

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="p-3 border rounded-md">
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
            </div>
            <button
                type="submit"
                disabled={!stripe || loading}
                className={`w-full py-2 px-4 rounded-md font-semibold text-white transition-colors ${
                    !stripe || loading ? "bg-gray-300 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700 active:bg-blue-800"
                }`}
            >
                {loading ? (
                    <span className="flex items-center justify-center">
            <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
            >
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Processing...
          </span>
                ) : (
                    "Pay $20.00"
                )}
            </button>
            {error && <p className="text-red-500 text-sm mt-2 animate-fade-in-down">{error}</p>}
        </form>
    )
}