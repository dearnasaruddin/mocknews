'use client'
import { useState } from 'react'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import Link from 'next/link'
import { ModeToggle } from './ModeToggle'
import { Button } from '../../ui/button'
import { CgMenuRightAlt } from 'react-icons/cg'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }
  return (
    <header className='bg-gray-50 dark:bg-gray-900 shadow-md py-3 lg:py-4 fixed z-50 w-full top-0 z-50'>
      <nav className='flex items-center justify-between container'>
        {/* =========== Logo =========== */}
        <div>
          <Link href={"/"} className='font-bold text-xl lg:text-2xl'>mock News</Link>
        </div>

        {/* =========== Navigation Menu =========== */}
        <div>
          <NavigationMenu className='hidden lg:flex' viewport={false}>
            <NavigationMenuList>
              <NavigationMenuItem className='flex items-center space-x-8'>
                <NavigationMenuLink className={`${pathname == '/news' ? 'text-red-500' : 'hover:text-red-500'}`} asChild>
                  <Link href='/news'>News</Link>
                </NavigationMenuLink>

                <NavigationMenuTrigger className={`${pathname == '/services' ? 'text-red-500' : 'hover:text-red-500'} bg-transparent text-sm`} >
                  <Link href='/services'>Services</Link>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className='text-gray-600  rounded-md space-y-2'>
                    <li><NavigationMenuLink href='/services/web' className='px-4'>Web Development</NavigationMenuLink></li>
                    <li><NavigationMenuLink href='/services/apps' className='px-4'>Mobile App</NavigationMenuLink></li>
                    <li><NavigationMenuLink href='/services/seo' className='px-4'>SEO</NavigationMenuLink></li>
                  </ul>
                </NavigationMenuContent>

                <NavigationMenuLink className={`${pathname == '/about' ? 'text-red-500' : 'hover:text-red-500'}`} asChild><Link href='/about'>About</Link></NavigationMenuLink>
                <NavigationMenuLink className={`${pathname == '/contact' ? 'text-red-500' : 'hover:text-red-500'}`} asChild><Link href='/contact'>contact</Link></NavigationMenuLink>

              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* =========== Theme Switcher & Login Btn =========== */}
        <div className='hidden lg:flex items-center'>
          <ModeToggle />
          <Button variant="default" className='ml-4'>Login</Button>
        </div>

        {/* Mobile menu button */}
        <div className='lg:hidden'>
          <Button onClick={toggleMenu} variant="ghost">
            <CgMenuRightAlt className=' size-6' />
          </Button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar