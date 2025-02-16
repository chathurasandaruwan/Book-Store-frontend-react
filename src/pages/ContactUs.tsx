import AboutUs from "../components/AboutUs.tsx";
import {TitleBar} from "../components/TitleBar.tsx";
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from "@heroicons/react/24/outline"
import React,{useState} from "react";

export function ContactUs() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }))
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log("Form submitted:", formData)
        setFormData({ name: "", email: "", message: "" })
    }
    return (
        <section className='bg-gray-200'>
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
                <TitleBar>Our Story</TitleBar>
                <AboutUs/>
                <TitleBar>Get in Touch</TitleBar>
                <div className="glass-effect shadow-md rounded-lg overflow-hidden md:flex mt-8">
                    <div className="md:w-1/2 p-6 bg-black text-white py-28 px-16">
                        <p className="mb-6">
                            We'd love to hear from you. Please fill out the form or contact us using the information
                            below.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-center">
                                <EnvelopeIcon className="w-6 h-6 mr-2"/>
                                <span>contact@example.com</span>
                            </div>
                            <div className="flex items-center">
                                <PhoneIcon className="w-6 h-6 mr-2"/>
                                <span>+94-123-4567</span>
                            </div>
                            <div className="flex items-center">
                                <MapPinIcon className="w-6 h-6 mr-2"/>
                                <span>
                                    123 Main Street,City, State 12345
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/2 p-6">
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="mt-1 w-full p-2 border border-gray-400 rounded-lg"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="mt-1 w-full p-2 border border-gray-400 rounded-lg"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    className="mt-1 w-full p-2 border border-gray-400 rounded-lg h-32"
                                    rows={4}
                                />
                            </div>
                            <button type="submit" className="w-full bg-black border-2 border-black text-white rounded px-10 py-2 hover:bg-gray-300 hover:text-black hover:cursor-pointer">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}