'use client'
import { useEffect, useRef, useState } from 'react'
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
import { IoMdCloseCircleOutline } from 'react-icons/io'
import newsData from "@/data/newsData"

const Navbar = () => {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navMenuRef = useRef<HTMLDivElement>(null);

  // ========== Close menu on outside click ===========
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navMenuRef.current && !navMenuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // ========== Categories List ===========
  const categories = Array.from(new Set(newsData.map(article => article.category)))
  useEffect(() => {
    categories.unshift('All')
  }, [])

  return (
    pathname.includes('/auth') ?
      <></>
      :
      <header className='bg-gray-50 dark:bg-gray-900 shadow-md py-1.5 md:py-4 fixed w-full top-0 z-50'>
        <nav className='flex items-center justify-between container'>
          {/* =========== Logo =========== */}
          <div>
            <Link href={"/"} className='font-bold text-2xl'>mock News</Link>
          </div>
          {/* ============= Desktop Navigation Menu Items ============= */}
          <NavigationMenu className='hidden md:flex' viewport={false}>
            <NavigationMenuList>
              <NavigationMenuItem className='md:flex items-center space-x-3 lg:space-x-8'>
                <NavigationMenuLink className={`${pathname.includes('/news') ? 'text-red-500' : 'hover:text-red-500'}`} asChild>
                  <Link href='/news'>News</Link>
                </NavigationMenuLink>

                <NavigationMenuTrigger className='hover:text-red-500 bg-transparent text-sm text-gray-900 dark:text-gray-100 font-normal' >
                  Categories
                </NavigationMenuTrigger>

                <NavigationMenuContent className='px-0'>
                  <ul className='text-gray-600 dark:text-gray-300 rounded-md'>

                    {categories?.map((category) => (
                      <li><NavigationMenuLink key={category}>
                        <Link href={`/news/${category.toLowerCase()}`} className='px-4'>{category}</Link>
                      </NavigationMenuLink></li>
                    ))}

                  </ul>
                </NavigationMenuContent>

                <NavigationMenuLink className={`${pathname == '/about' ? 'text-red-500' : 'hover:text-red-500'}`} asChild><Link href='/about'>About</Link></NavigationMenuLink>
                <NavigationMenuLink className={`${pathname == '/contact' ? 'text-red-500' : 'hover:text-red-500'}`} asChild><Link href='/contact'>contact</Link></NavigationMenuLink>

              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* =========== Navigation Menu =========== */}
          <div ref={navMenuRef} className={` ${isMenuOpen ? 'max-md:right-0' : 'hidden max-md:-right-full'} md:flex md:items-center md:justify-between md:gap-6 duration-200  max-md:absolute max-md:top-0 max-md:w-[60vw] max-md:bg-gray-100 max-md:dark:bg-gray-800 max-md:shadow-2xl max-md:h-dvh max-md:p-8 max-md:z-40`}>
            <IoMdCloseCircleOutline onClick={() => setIsMenuOpen(false)} className='absolute top-5 right-5 text-2xl md:hidden' />

            {/* ============ Mobile Navigation Menu Items =========== */}
            <div className='md:hidden max-md:mt-4'>
              <NavigationMenu viewport={false}>
                <NavigationMenuList>
                  <NavigationMenuItem className='lg:flex items-center space-x-8 max-lg:space-y-2'>
                    <NavigationMenuLink className={`${pathname == '/news' ? 'text-red-500' : 'hover:text-red-500'}`} asChild>
                      <Link onClick={() => setIsMenuOpen(false)} href='/news'>News</Link>
                    </NavigationMenuLink>

                    <NavigationMenuTrigger className='hover:text-red-500 bg-transparent text-sm text-gray-900 dark:text-gray-100 font-normal px-2'>
                      Categories
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className='text-gray-600 dark:text-gray-300'>
                        {categories?.map((category) => (
                          <li><NavigationMenuLink key={category}>
                            <Link onClick={() => setIsMenuOpen(false)} href={`/news/${category.toLowerCase()}`} className='px-2'>{category}</Link>
                          </NavigationMenuLink></li>
                        ))}
                      </ul>
                    </NavigationMenuContent>

                    <NavigationMenuLink className={`${pathname == '/about' ? 'text-red-500' : 'hover:text-red-500'}`} asChild><Link onClick={() => setIsMenuOpen(false)} href='/about'>About</Link></NavigationMenuLink>
                    <NavigationMenuLink className={`${pathname == '/contact' ? 'text-red-500' : 'hover:text-red-500'}`} asChild><Link onClick={() => setIsMenuOpen(false)} href='/contact'>contact</Link></NavigationMenuLink>

                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            {/* =========== Theme Switcher & Login Btn =========== */}
            <div className='flex items-center max-md:justify-center max-md:mt-6 max-md:pt-6 max-md:border-t max-md:border-gray-300 max-md:dark:border-gray-700 '>
              <ModeToggle />
              <Link onClick={() => setIsMenuOpen(false)} href="/auth/login" className='ml-4 py-2 px-6 rounded-md text-sm font-medium bg-[#0f172b] dark:bg-[#e2e8f0] hover:bg-gray-700 dark:hover:bg-gray-300 duration-200 text-[#f9fafb] dark:text-[#3e4657]'>Login</Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className='md:hidden'>
            <Button className='-mr-2.5' onClick={() => setIsMenuOpen(true)} variant="ghost">
              <CgMenuRightAlt className='size-7' />
            </Button>
          </div>
        </nav>
      </header>
  )

}

export default Navbar