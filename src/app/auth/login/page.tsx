'use client';
import ForgotPassword from "@/components/shared/ForgotPassword";
import { useState } from "react";
import { toast } from "sonner"
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import Link from "next/link";
import { Button } from "@/components/ui/button";


const page = () => {

    const [forgotPassPopUp, setForgotPassPopUp] = useState(false);

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        toast.warning("Invalid credentials!");
    }
    const handleGoogleLogin = () => {
        toast.info("Google login is not implemented yet.");
    }
    const handleAppleLogin = () => {
        toast.info("Apple login is not implemented yet.");
    }
    const handleForgotPassPopUp = (value: boolean) => {
        setForgotPassPopUp(value);
    }

    return (
        <div className="min-h-[80vh] flex items-center justify-center px-4 ">
            <div className="w-full max-w-md rounded-2xl bg-slate-50 dark:bg-slate-900 p-8 shadow-lg">
                <h1 className="mb-6 text-center text-2xl font-semibold text-gray-900 dark:text-gray-300 ">
                    Log in with
                </h1>

                {/* =============== login with Google & Apple =============== */}
                <div className="flex gap-3">
                    <button onClick={handleGoogleLogin} type="button" className="flex w-1/2 items-center justify-center gap-2 rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium hover:scale-105 duration-200 cursor-pointer">
                        <FcGoogle />
                        Google
                    </button>

                    <button onClick={handleAppleLogin} type="button" className="flex w-1/2 items-center justify-center gap-2 rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium hover:scale-105 duration-200 cursor-pointer">
                        <FaApple />
                        Apple
                    </button>
                </div>

                {/* Divider */}
                <div className="my-6 flex items-center">
                    <div className="h-px flex-1 bg-gray-200" />
                    <span className="px-3 text-sm text-gray-400">or</span>
                    <div className="h-px flex-1 bg-gray-200" />
                </div>

                {/* =============== Login Form =============== */}
                <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                        <input
                            type="email"
                            placeholder="Email address"
                            value={formData.email}
                            onChange={(e) =>
                                setFormData({ ...formData, email: e.target.value })
                            }
                            className="w-full rounded-lg border border-gray-300 px-4 py-2"
                        />
                    </div>

                    <div>
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            value={formData.password}
                            onChange={(e) =>
                                setFormData({ ...formData, password: e.target.value })
                            }
                            className="w-full rounded-lg border border-gray-300 px-4 py-2"
                        />
                        {
                            formData.password.length > 0 && (
                                <span className="absolute right-10 top-52 cursor-pointer text-gray-500">
                                    {
                                        showPassword ?
                                            <IoEyeOffOutline onClick={() => setShowPassword(false)} />
                                            :
                                            <IoEyeOutline onClick={() => setShowPassword(true)} />
                                    }
                                </span>
                            )
                        }
                    </div>

                    <div className="text-right">
                        <p onClick={() => handleForgotPassPopUp(true)} className="text-sm text-gray-900 dark:text-gray-400 hover:underline cursor-pointer">
                            Forgot password?
                        </p>
                    </div>

                    <Button
                        type="submit"
                        className="w-full cursor-pointer"
                    >
                        Log In
                    </Button>
                </form>
                {forgotPassPopUp && <ForgotPassword onClose={handleForgotPassPopUp} />}
                <p className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
                    Don&apos;t have an account?
                    <Link href="/auth/signup" className="font-medium text-gray-900 dark:text-gray-400 hover:underline ml-2">
                        Sign up
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default page