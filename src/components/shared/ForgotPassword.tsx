import { useEffect, useRef } from 'react'
import { toast } from "sonner"
import { Button } from '../ui/button'
import { IoMdCloseCircleOutline } from 'react-icons/io'

const ForgotPassword = ({ onClose }: { onClose: (value: boolean) => void }) => {

  const handleResetPassword = (e: React.FormEvent) => {
    e.preventDefault();
    toast.warning("Your email is not registered with us!");
  }

  // ============== Close popup on outside click ===============
  const popUpRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (popUpRef.current && !popUpRef.current.contains(e.target as Node)) {
        onClose(false);
      }
    };
    window.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className='absolute top-1/2 left-1/2 -translate-1/2 z-10'>
      <div ref={popUpRef} className='p-5 bg-gray-100 dark:bg-slate-700 shadow-2xl rounded-md'>
        <IoMdCloseCircleOutline onClick={() => onClose(false)} className='ml-auto text-2xl text-gray-600 dark:text-gray-300 cursor-pointer' />
        <div className='p-4'>
          <h2 className='text-2xl font-semibold text-gray-900 dark:text-gray-200 text-center'>Reset Password</h2>
          <p className='w-70 text-center mt-2 mb-4 text-gray-900 dark:text-gray-200'>Enter your email address to get reset password link.</p>
          <form onSubmit={handleResetPassword} className='space-y-4'>
            <div>
              <input
                type="email"
                placeholder="Email address"
                className="w-full rounded-lg border border-gray-300 px-4 py-2"
              />
            </div>
            <Button type="submit" className="w-full cursor-pointer">Send Reset Link</Button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword