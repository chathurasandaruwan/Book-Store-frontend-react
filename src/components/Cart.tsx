import React, {useState} from 'react';
import Auth from "./Auth.tsx";
import {PaymentCard} from "./PaymentCard.tsx";

interface CartProps {
    isOpen: boolean;
    onClose: () => void;
}

const Cart: React.FC<CartProps> = ({ isOpen, onClose }) => {
    const [isAuthPageOpen, setIsAuthPageOpen] = useState(false);
    const [isSignIn, setIsSignIn] = useState(false);
    const handleQuantityChange = (id: string, quantity: number) => {
        if (quantity < 1) return;
        console.log('handleQuantityChange',id,quantity)
    };
    const handleCheckout = () => {
        setIsAuthPageOpen(!isAuthPageOpen);
    };
    const items = [
        {
            id: '1',
            title: 'Book 1',
            imageUrl: 'src/assets/home-bg.jpg',
            price: 9.99,
            quantity: 3,
        },
        {
            id: '2',
            title: 'Book 2',
            imageUrl: 'src/assets/home-bg.jpg',
            price: 19.99,
            quantity: 2,
        },
    ];
    const total = 12.97;
    return (
        <div>
            <div
                className={`fixed right-0 top-0 h-full w-96 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
                    isOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                <div className="p-4 h-full flex flex-col">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-2xl font-bold text-black">Your Cart</h2>
                        <button
                            onClick={onClose}
                            className="text-gray-500 hover:text-gray-700 transition-colors"
                        >
                            ✕
                        </button>
                    </div>

                    <div className="flex-grow overflow-y-auto">
                        {items.length === 0 ? (
                            <p className="text-gray-500 text-center mt-8">Your cart is empty</p>
                        ) : (
                            items.map((item) => (
                                <div
                                    key={item.id}
                                    className="flex items-center gap-4 border-b border-gray-200 py-4 transition-transform hover:scale-[1.02]"
                                >
                                    <img
                                        src={item.imageUrl}
                                        alt={item.title}
                                        className="w-30 h-20 object-cover rounded"
                                    />
                                    <div className="flex-grow">
                                        <h3 className="font-semibold">{item.title}</h3>
                                        <p className="text-gray-600">${item.price.toFixed(2)}</p>
                                        <div className="flex items-center gap-2 mt-2">
                                            <button
                                                onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                                                className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 transition-colors hover:cursor-pointer"
                                            >
                                                -
                                            </button>
                                            <span>{item.quantity}</span>
                                            <button
                                                onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                                                className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 transition-colors hover:cursor-pointer"
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => {
                                            console.log('remove', item.id)
                                        }}
                                        className="text-red-500 hover:text-red-700 transition-colors hover:cursor-pointer"
                                    >
                                        Remove
                                    </button>
                                </div>
                            ))
                        )}
                    </div>

                    <div className="border-t border-gray-200 pt-4 mt-4">
                        <div className="flex justify-between items-center mb-4">
                            <span className="font-semibold">Total:</span>
                            <span className="font-bold text-xl">${total.toFixed(2)}</span>
                        </div>
                        <button
                            onClick={handleCheckout}
                            disabled={items.length === 0}
                            className={`w-full py-3 rounded transition-colors ${
                                items.length === 0
                                    ? 'bg-gray-300 cursor-not-allowed'
                                    : 'bg-black hover:bg-white hover:text-black border border-black text-white hover:cursor-pointer'
                            }`}
                        >
                            Checkout
                        </button>
                    </div>
                </div>
            </div>
            <Auth isOpen={isAuthPageOpen} onClose={() => setIsAuthPageOpen(false)} action={()=>setIsSignIn(true)}/>
            <PaymentCard isOpen={isSignIn} onClose={()=>setIsSignIn(false)}/>
        </div>
    );
};

export default Cart;