import React from 'react'
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

const Navbar = () => {
  return (
    <header className='shadow-md py-3 lg:py-4'>
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
                <NavigationMenuLink href='/news' className='hover:text-red-500'>News</NavigationMenuLink>

                <NavigationMenuLink className='p-0' href='/services'>
                  <NavigationMenuTrigger className='text-sm'>Services</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className='text-gray-600  rounded-md space-y-2'>
                      <li><NavigationMenuLink href='/services/web' className='px-4'>Web Development</NavigationMenuLink></li>
                      <li><NavigationMenuLink href='/services/apps' className='px-4'>Mobile App</NavigationMenuLink></li>
                      <li><NavigationMenuLink href='/services/seo' className='px-4'>SEO</NavigationMenuLink></li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuLink>

                <NavigationMenuLink href='/about' className='hover:text-red-500'>About</NavigationMenuLink>
                <NavigationMenuLink href='/contact' className='hover:text-red-500'>contact</NavigationMenuLink>

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
          <Button variant="ghost">
            <CgMenuRightAlt className=' size-6' />
          </Button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar