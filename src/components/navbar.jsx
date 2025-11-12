import { Link } from 'react-scroll';
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";
import { useEffect, useState } from 'react';

export default function Navbar(){

    const [darkmode, setDarkmode] = useState(true);
    const [navOpen, setNavOpen] = useState(false);

    useEffect(() => {
        if(darkmode){
            document.documentElement.classList.add('dark');
        }else{
            document.documentElement.classList.remove('dark');
        }
    }, [darkmode]);
    
    const links = [
        {name : "Home", to : "home"},
        {name : "About", to : "about"},
        {name : "Projects", to : "projects"},
        {name : "Contact", to : "contact"},
        ];
    return(
        <nav className="w-full fixed top-0 left-0 bg-white dark:bg-gray-900 shadow-md z-50">
            <div className="flex justify-between max-w-7xl mx-auto px-4 py-3 items-center">
                <h1 className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400">
                    Mozzes
                </h1>
                <ul className='md:flex space-x-6 hidden'>
                    {links.map((link) => (
                        <li key={link.to}>
                            <Link to={link.to} smooth={true} duration={500} spy={true} className='cursor-pointer text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400' activeClass='!text-blue-600 dark:!text-blue-400 font-semibold'>
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className='flex items-center space-x-4'>
                    <button className='text-2xl' onClick={() => setDarkmode(!darkmode)}>
                        {/*darkmode ? (<FaSun className='text-yellow-400'/>) : (<FaMoon className='text-gray-800'/>)*/}
                    </button>
                    <button className='md:hidden text-2xl' onClick={() => setNavOpen(!navOpen)}>
                        {navOpen ? (<FaTimes className="text-gray-800 dark:text-white"/>) : (<FaBars className="text-gray-800 dark:text-white"/>)}
                    </button>
                </div>
            </div>
            {navOpen && (
                <ul className='md:hidden bg-white dark:bg-gray-900 px-4 pb-4 space-y-3'>
                    {links.map((link) => (
                        <li key={link.to}>
                            <Link className='block text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400' to={link.to} smooth={true} duration={500} onClick={() => setNavOpen(false)}>{link.name}</Link>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    )
}