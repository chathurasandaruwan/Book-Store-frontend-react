import React from 'react';

const AboutUs: React.FC = () => {
    return (
        <section id="about" className="py-16">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-2xl font-semibold text-black mb-4">Our Story</h3>
                            <p className="text-gray-600">
                                Founded in 2025, BookStore has been a haven for book lovers. We started with a simple mission:
                                to make quality books accessible to everyone at affordable prices.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-2xl font-semibold text-black mb-4">Our Mission</h3>
                            <p className="text-gray-600">
                                We believe in the power of knowledge and the joy of reading. Our mission is to connect readers
                                with their next favorite book while providing exceptional service.
                            </p>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-2xl font-semibold text-black mb-4">What Sets Us Apart</h3>
                            <ul className="space-y-3 text-gray-600">
                                <li className="flex items-center">
                                    <span className="w-2 h-2 bg-black rounded-full mr-2"></span>
                                    Carefully curated collection of books
                                </li>
                                <li className="flex items-center">
                                    <span className="w-2 h-2 bg-black rounded-full mr-2"></span>
                                    Competitive prices and regular deals
                                </li>
                                <li className="flex items-center">
                                    <span className="w-2 h-2 bg-black rounded-full mr-2"></span>
                                    Fast and reliable shipping
                                </li>
                                <li className="flex items-center">
                                    <span className="w-2 h-2 bg-black rounded-full mr-2"></span>
                                    Exceptional customer service
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-2xl font-semibold text-black mb-4">Our Values</h3>
                            <ul className="space-y-3 text-gray-600">
                                <li className="flex items-center">
                                    <span className="w-2 h-2 bg-black rounded-full mr-2"></span>
                                    Customer satisfaction
                                </li>
                                <li className="flex items-center">
                                    <span className="w-2 h-2 bg-black rounded-full mr-2"></span>
                                    Quality and authenticity
                                </li>
                                <li className="flex items-center">
                                    <span className="w-2 h-2 bg-black rounded-full mr-2"></span>
                                    Community engagement
                                </li>
                                <li className="flex items-center">
                                    <span className="w-2 h-2 bg-black rounded-full mr-2"></span>
                                    Environmental responsibility
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;