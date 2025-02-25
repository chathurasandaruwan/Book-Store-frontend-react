import {Card} from "./Card.tsx";

interface paymentModelProps {
    isOpen: boolean;
    onClose: () => void;
}
import { Elements } from "@stripe/react-stripe-js"
import {loadStripe} from "@stripe/stripe-js";
import {CheckoutForm} from "./CheckoutForm.tsx";

const stripePromise = loadStripe("pk_test_51QwRZEFT0e4jydPMcUjKdYQNs7IOymtlgQQDjsXxKq52nSRyeNEAgY6pgd6YGPhp7lKS3STzcgo9LFNJHinTB7JU00uxGpfuMJ")

export function PaymentCard({isOpen, onClose}: paymentModelProps) {
    if (!isOpen) return null;
    return (
        <div className="fixed flex w-full z-50 h-screen items-center justify-center glass-effect inset-0 p-4">
            <div className="relative w-full max-w-2xl perspective-1000">
                <div
                    className='relative h-[600px] w-full duration-1000 preserve-3d'>
                    <div className="absolute h-full w-full backface-hidden rounded-xl bg-white p-18 shadow-2xl">
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 hover:cursor-pointer"
                        >
                            ✕
                        </button>
                        <h1 className="text-3xl font-bold text-gray-800">Checkout</h1>
                    </div>
                    <Card title="Complete Your Purchase" description="Enter your payment details below">
                        <Elements stripe={stripePromise}>
                            <CheckoutForm/>
                        </Elements>
                    </Card>
                    <div className="mt-4 flex justify-center text-sm text-gray-500">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 mr-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                            />
                        </svg>
                        Payments are secure and encrypted
                    </div>
                </div>
            </div>
        </div>
    );
}