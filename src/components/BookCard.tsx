
interface BookProps {
    title: string;
    author: string;
    price: number;
    description: string;
    image: string;
    stock: number;
    onViewBook: (book: any) => void;
}
export function BookCard({ title, author, price, description, image, stock, onViewBook }: BookProps) {
    return (
        <div
            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2"
        >
            <img
                src={`data:image/jpeg;base64,${image}`}
                alt={title}
                className="w-full h-48 object-cover"
            />
            <div className="p-6">
                <h2 className="text-xl font-semibold mb-1">{title}</h2>
                <p className="text-gray-600 mb-1">by {author}</p>
                <p className="text-blue-600 font-bold mb-2">${price.toFixed(2)}</p>
                <p className="absolute bottom-16 right-6 text-sm text-gray-600 mb-4">Stock: {stock}</p>
                <div className="flex justify-between">
                    <button
                        onClick={() => onViewBook({title, author, price, description, image, stock})}
                        className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-black hover:text-white transition-colors"
                    >
                        View
                    </button>
                    <button
                        onClick={() => {
                            console.log("add to cart");
                        }}
                        className="bg-black text-white px-4 py-2 rounded hover:bg-gray-300 hover:text-black transition-colors"
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
}