"use client"

import Link from 'next/link'
import Image from 'next/image'
import Wanderer from '@assets/wanderer.jpg'
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';


const Navbar: React.FC = ({

}) => {

    const { theme, setTheme } = useTheme()

    const pathname = usePathname();


    const links = [
        {
            name: "About Me",
            path: "/"
        },
        {
            name: "Some Thoughts",
            path: "/some-thoughts"
        },
        // {
        //     name: "Contact",
        //     path: "/contact"
        // }
    ]

    return (
        <>
            <div className="flex justify-between w-9/12 ml-10 py-8 items-center">
                <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                    <p className="font-bold text-slate-600 text-lg border-transparent hover:border-slate-200 border-b-4 hover:text-black dark:hover:text-white dark:border-transparent dark:text-slate-400">
                        {theme === "dark" ? "Light Mode" : "Dark Mode"}
                    </p>
                </button>
                {links.map((link) => (
                    <p key={link.name} className={pathname === link.path ? "text-black text-sm dark:text-white" : "text-slate-500 text-sm hover:text-black dark:hover:text-white dark:text-slate-400"}>
                        <Link href={link.path}>{link.name.toUpperCase()}</Link>
                    </p>
                ))}
            </div>
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