'use client'
import Link from 'next/link'
import { Button } from '../ui/button'
import { AiOutlineGithub, AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai'
import { usePathname } from 'next/navigation'

const Footer = () => {
  const pathname = usePathname()
  return (
    pathname.includes('/auth') ?
      <></>
      :
    <footer className="bg-gray-100 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Logo and Description */}
          <div className="text-center md:text-left">
            <Link href={'/'} className="text-2xl font-bold text-gray-900 dark:text-white">
              mock News
            </Link>
            <p className="md:max-lg:max-w-60 mt-2 text-gray-600 dark:text-gray-400">
              Building a better digital experience for everyone.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-3 lg:space-x-6 text-gray-600 dark:text-gray-400">
            <Link href="/about" className="hover:text-gray-900 dark:hover:text-white">
              About Us
            </Link>
            <Link href="/news" className="hover:text-gray-900 dark:hover:text-white">
              All News
            </Link>
            <Link href="/contact" className="hover:text-gray-900 dark:hover:text-white">
              Contact
            </Link>
            <Link href="/privacy" className="hover:text-gray-900 dark:hover:text-white">
              Privacy Policy
            </Link>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <Link
              href="https://twitter.com"
              target='_blank'
              aria-label="Twitter"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <AiOutlineTwitter size={24} />
            </Link>
            <Link
              href="https://instagram.com"
              target='_blank'
              aria-label="Instagram"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <AiOutlineInstagram size={24} />
            </Link>
            <Link
              href="https://github.com"
              target='_blank'
              aria-label="Github"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <AiOutlineGithub size={24} />
            </Link>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-4 md:mt-8 text-center md:flex md:justify-between md:items-center">
          <p className="text-gray-600 dark:text-gray-400 group cursor-default select-none">
            &copy; {new Date().getFullYear()} All rights reserved by <Link className='group-hover:text-[#fe3e57] duration-200' href="https://nasars-portfolio.vercel.app/" target='_blank'>Nasar</Link>
          </p>

          <Button variant="outline" className="mt-4 md:mt-0 dark:bg-gray-900 dark:text-white">
            Subscribe
          </Button>
        </div>
      </div>
    </footer>
  )
}

export default Footer