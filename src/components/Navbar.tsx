"use client"

import Link from 'next/link'
import Image from 'next/image'
import Wanderer from '@assets/wanderer.jpg'
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';



const Navbar: React.FC = ({

}) => {
   

    return (
        <>
            <Menu />
            <div className="w-full">
                <Image 
                    src={Wanderer} 
                    alt="Hero Image" 
                    className='w-full h-[50vh] brightness-75 object-cover object-top'
                    width={200} 
                    height={200} 
                />
            </div>
        </>
    )
}

export default Navbar


const Menu: React.FC = ({
}) => {

    const links = [
        {
            name: "About Me",
            path: "/"
        },
        {
            name: "Some Thoughts",
            path: "/some-thoughts"
        },
    ]

    const pathname = usePathname();


    return (
        <>
        {/* Regular Navbar */}
        <div className="justify-between w-9/12 ml-10 py-8 items-center hidden md:flex">
            <ChangeTheme />
            {links.map((link) => (
                <p key={link.name} className={pathname === link.path ? "text-black text-sm dark:text-white d-hidden md:d-block" : "text-slate-500 text-sm hover:text-black dark:hover:text-white dark:text-slate-400 d-hidden md:d-block"}>
                    <Link href={link.path}>{link.name.toUpperCase()}</Link>
                </p>
            ))}        
        </div>
        
        {/* Mobile Navbar */}
        <div className="justify-between w-full px-3 py-8 items-center flex md:hidden">
            <ChangeTheme />
            {links.map((link) => (
                <p key={link.name} className={pathname === link.path ? "text-black text-sm dark:text-white d-hidden md:d-block" : "text-slate-500 text-sm hover:text-black dark:hover:text-white dark:text-slate-400 d-hidden md:d-block"}>
                    <Link href={link.path}>{link.name.toUpperCase()}</Link>
                </p>
            ))}        
        </div>
    </>
    )
}

const ChangeTheme: React.FC = () => {

    const { theme, setTheme } = useTheme()

    return (
            <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                <p className="font-bold text-slate-600 text-lg border-transparent hover:border-slate-200 border-b-4 hover:text-black dark:hover:text-white dark:border-transparent dark:text-slate-400">
                    {theme === "dark" ? "Light Mode" : "Dark Mode"}
                </p>
            </button>
    )
}
