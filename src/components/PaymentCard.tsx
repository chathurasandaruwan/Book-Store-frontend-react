

interface paymentModelProps {
    isOpen: boolean;
    onClose: () => void;
}
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
                    </div>
                </div>
            </div>
        </div>
    );
}