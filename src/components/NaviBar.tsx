import {useState} from "react";

export function NaviBar() {
    const [isOpen, setIsOpen] = useState(false)

    const menuItems = [
        { title: "Dashboard", href: "#" },
        { title: "Inventory", href: "#" },
        { title: "Sales", href: "#" },
        { title: "Settings", href: "#" },
    ]
    return (
        <nav className="glass-effect sticky top-0 z-50">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <a href="/" className="text-2xl font-serif text-white">
                        Bookstore
                    </a>

                    <div className="hidden md:flex space-x-4">
                        {menuItems.map((item) => (
                            <a key={item.title} href={item.href}
                               className="text-white hover:text-gray-300 transition-colors">
                                {item.title}
                            </a>
                        ))}
                    </div>
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-300"
                        >
                            <svg
                                className={`h-6 w-6 ${isOpen ? 'hidden' : 'block'}`}
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                            <svg
                                className={`h-6 w-6 ${isOpen ? 'block' : 'hidden'}`}
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                </div>

                {isOpen && (
                    <div className="md:hidden">
                        {menuItems.map((item) => (
                            <a
                                key={item.title}
                                href={item.href}
                                className="block text-white hover:text-gray-300 py-2"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.title}
                            </a>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    );
}