import React, { useState } from "react"

interface AuthModelProps {
    isOpen: boolean;
    onClose: () => void;
    action: () => void;
}
export default function Auth({isOpen, onClose , action}:AuthModelProps) {
    const [isFlipped, setIsFlipped] = useState(false)
    /*console.log("Auth isOpen", isOpen)*/
    const [singUpData, setSingUpData] = useState({name: "", email: "", password: ""})
    const [signInData, setSignInData] = useState({email: "", password: ""})
    if (!isOpen) return null;

    const toggleFlip = () => setIsFlipped(!isFlipped)
    const handleChangeSignUp = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setSingUpData((prevState) => ({
            ...prevState,
            [name]: value,
        }))
    }
    const handleChangeSignIn = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setSignInData((prevState) => ({
            ...prevState,
            [name]: value,
        }))
    }
    const handleSubmitSingUp = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log("Form submitted:", singUpData)
        setSingUpData({name: "", email: "", password: ""})
        onClose();
        action();
    }
    const handleSubmitSignIn = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log("Form submitted:", signInData)
        setSignInData({email: "", password: ""})
        onClose();
        action();
    }


    return (
        <div className="fixed flex w-full z-50 h-screen items-center justify-center glass-effect inset-0 p-4">
            <div className="relative w-full max-w-2xl perspective-1000">
                <div
                    className={`relative h-[600px] w-full duration-1000 preserve-3d ${isFlipped ? "rotate-y-180" : ""}`}>
                    {/* Sign In Page */}
                    <div className="absolute h-full w-full backface-hidden rounded-xl bg-white p-18 shadow-2xl">
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 hover:cursor-pointer"
                        >
                            ✕
                        </button>
                        <h2 className="mb-6 text-3xl font-bold text-gray-800">Sign In</h2>
                        <form className="space-y-4" onSubmit={handleSubmitSignIn}>
                            <div>
                                <label htmlFor="signin-email" className='block text-sm font-medium text-gray-700'>Email</label>
                                <input id="signin-email" name="email" value={signInData.email} type="email" placeholder="Enter your email" className='mt-1 w-full p-2 border border-gray-400 rounded-lg' required onChange={handleChangeSignIn}/>
                            </div>
                            <div>
                                <label htmlFor="signin-password" className='block text-sm font-medium text-gray-700'>Password</label>
                                <input id="signin-password" name="password" value={signInData.password} type="password" placeholder="Enter your password" className='mt-1 w-full p-2 border border-gray-400 rounded-lg' required onChange={handleChangeSignIn}/>
                            </div>
                            <button className="w-full bg-black border-2 border-black text-white rounded px-10 py-2 mt-4 hover:bg-gray-300 hover:text-black hover:cursor-pointer" type="submit">
                                Sign In
                            </button>
                        </form>
                        <p className="mt-4 text-center text-sm text-gray-600">
                            Don't have an account?{" "}
                            <button onClick={toggleFlip} className="text-blue-500 hover:underline hover:cursor-pointer">
                                Sign Up
                            </button>
                        </p>
                    </div>

                    {/* Sign Up Page */}
                    <div
                        className="absolute h-full w-full rotate-y-180 backface-hidden rounded-xl bg-white p-18 shadow-2xl">
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 hover:cursor-pointer"
                        >
                            ✕
                        </button>
                        <h2 className="mb-6 text-3xl font-bold text-gray-800">Sign Up</h2>
                        <form className="space-y-4" onSubmit={handleSubmitSingUp}>
                            <div>
                                <label htmlFor="signup-name" className='block text-sm font-medium text-gray-700'>Full
                                    Name</label>
                                <input id="signup-name" name="name" value={singUpData.name} type="text" placeholder="Enter your full name"
                                       className='mt-1 w-full p-2 border border-gray-400 rounded-lg' required onChange={handleChangeSignUp}/>
                            </div>
                            <div>
                                <label htmlFor="signup-email"
                                       className='block text-sm font-medium text-gray-700'>Email</label>
                                <input id="signup-email" name="email" value={singUpData.email} type="email" placeholder="Enter your email"
                                       className='mt-1 w-full p-2 border border-gray-400 rounded-lg' required onChange={handleChangeSignUp}/>
                            </div>
                            <div>
                                <label htmlFor="signup-password"
                                       className='block text-sm font-medium text-gray-700'>Password</label>
                                <input id="signup-password" name="password" value={singUpData.password} type="password" placeholder="Create a password"
                                       className='mt-1 w-full p-2 border border-gray-400 rounded-lg' required onChange={handleChangeSignUp}/>
                            </div>
                            <button type="submit"
                                    className="w-full bg-black border-2 border-black text-white rounded px-10 py-2 mt-4 hover:bg-gray-300 hover:text-black hover:cursor-pointer">
                                Sign Up
                            </button>
                        </form>
                        <p className="mt-4 text-center text-sm text-gray-600">
                            Already have an account?{" "}
                            <button onClick={toggleFlip} className="text-blue-500 hover:underline hover:cursor-pointer">
                                Sign In
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

