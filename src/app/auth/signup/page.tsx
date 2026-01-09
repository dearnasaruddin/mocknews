'use client'
import { useState } from 'react'
import Link from 'next/dist/client/link'
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner';

const SignupPage = () => {
  const [formData, setFormData] = useState<{
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
  }>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    toast.warning("We are not accepting new registrations at the moment. This feature will be available again soon.");
  }

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 ">
      <div className="w-full max-w-md rounded-2xl bg-slate-50 dark:bg-slate-900 p-8 shadow-lg">
        <div className='text-center text-gray-900 dark:text-gray-300 mb-6 space-y-2'>
          <h1 className="text-2xl font-semibold ">
            Sign up
          </h1>
          <p>Join us today to unlock more features such as reactions, comments and favorite listings.</p>
        </div>

        {/* =============== Login Form =============== */}
        <form onSubmit={handleLogin} className="space-y-4">
          <div className='flex gap-2'>
            <div>
              <input
                type="text"
                placeholder="First Name"
                value={formData.firstName}
                onChange={(e) =>
                  setFormData({ ...formData, firstName: e.target.value })
                }
                className="w-full rounded-lg border border-gray-300 px-4 py-2"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={(e) =>
                  setFormData({ ...formData, lastName: e.target.value })
                }
                className="w-full rounded-lg border border-gray-300 px-4 py-2"
              />
            </div>
          </div>
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
          <div>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={(e) =>
                setFormData({ ...formData, confirmPassword: e.target.value })
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



          <Button
            type="submit"
            className="w-full cursor-pointer"
          >
            Sign Up
          </Button>
        </form>
        <p className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
          Already have an account?
          <Link href="/auth/login" className="font-medium text-gray-900 dark:text-gray-400 hover:underline ml-2">
            Log in
          </Link>
        </p>
      </div>
    </div>
  )
}

export default SignupPage