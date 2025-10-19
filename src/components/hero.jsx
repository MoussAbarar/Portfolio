import { Link } from 'react-scroll';
import { motion } from "framer-motion";

export default function Hero(){
    return(
        <section id='home' className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 text-black dark:text-white px-4">
            <motion.div 
            initial={{opacity: 0, y: 30}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 1}}
            className='text-center'
            >
                <h1 className='text-4xl md:text-6xl font-bold mb-4'>Hi I'm <span className='text-blue-600 dark:text-blue-400'>Moussa Abarar</span></h1>
                <p className='text-xl md:text-2xl mb-6'>Full Stack Web Developer</p>
                <p className='text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-6'>I’m a full-stack web developer passionate about turning creative ideas into functional and visually appealing digital experiences. 
                    I focus on writing clean, efficient code and crafting intuitive user interfaces. I enjoy projects that challenge both logic and creativity from building responsive layouts to optimizing back-end systems. 
                    My goal is to deliver websites that look great, perform flawlessly, and provide an exceptional user experience across all devices.</p>
                <div className='flex flex-col justify-center sm:flex-row gap-4'>
                    <Link to='contact' smooth={true} duration={500} className='cursor-pointer inline-block bg-blue-600 border-blue-600 border-2 dark:border-blue-500 dark:bg-blue-500 text-white dark:hover:bg-blue-400 px-6 py-3 rounded-3xl hover:bg-blue-700 transition w-fit sm:mx-0 mx-auto sm:w-1/3'>Contact Me</Link>
                    <Link to='projects' smooth={true} duration={500} className='cursor-pointer inline-block text-blue-600 border-blue-600 dark:border-gray-900 dark:bg-white border-2 hover:text-blue-800 px-6 py-3 rounded-3xl transition w-fit sm:mx-0 mx-auto sm:w-1/3'>My Projects</Link>
                </div>
            </motion.div>
        </section>
    )
}