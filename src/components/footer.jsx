import { Link } from 'react-scroll';

export default function Footer(){

    const links = [
        {name : "Home", to : "home"},
        {name : "About", to : "about"},
        {name : "Projects", to : "projects"},
        {name : "Contact", to : "contact"},
    ]

    return(
        <footer className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 py-6">
            <div className='max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4'> 
                <div className='flex gap-6 text-sm'>
                    {links.map((link) => (
                        <Link to={link.to} smooth={true} duration={500} className='cursor-pointer hover:text-blue-600 transition'>{link.name}</Link>
                    ))}
                </div>
                <p className='text-sm text-center'>
                    &copy; {new Date().getFullYear()} Mozzes. All rights reserved.
                </p>
            </div>
        </footer>
    )
}