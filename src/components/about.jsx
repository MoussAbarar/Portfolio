import { motion } from 'framer-motion';
import {FaHtml5, FaCss3Alt, FaJs, FaBootstrap, FaReact, FaPhp, FaWordpress, FaExchangeAlt} from "react-icons/fa";
import { SiMysql, SiTailwindcss, SiJquery } from "react-icons/si";

export default function About(){

    const skills = [
        { name: "HTML", icon: <FaHtml5 className="text-orange-600" /> },
        { name: "CSS", icon: <FaCss3Alt className="text-blue-600" /> },
        { name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
        { name: "Bootstrap", icon: <FaBootstrap className="text-purple-600" /> },
        { name: "jQuery", icon: <SiJquery className="text-blue-400" /> },
        { name: "AJAX", icon: <FaExchangeAlt className="text-green-600" /> },
        { name: "React", icon: <FaReact className="text-blue-400" /> },
        { name: "Tailwind", icon: <SiTailwindcss className="text-teal-400" /> },
        { name: "PHP", icon: <FaPhp className="text-purple-800" /> },
        { name: "MySQL", icon: <SiMysql className="text-blue-700" /> },
        { name: "WordPress", icon: <FaWordpress className="text-blue-800" /> },
    ];

    return(
        <section id='about' className='min-h-screen py-16 px-4 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white'>
            <motion.div className='max-w-4xl mx-auto text-center'
            initial={{opacity: 0, y: 50}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 1}}
            >
                <h2 className='text-4xl font-bold mb-6'>About Me</h2>
                <p className='text-lg mb-4'>
                    I'm a passionate <span className='text-blue-600 dark:text-blue-400'>Full Stack Web Developer</span> with a love for clean code and modern design.
                    I specialize in building responsive websites using : 
                </p>
                <div className="flex flex-wrap justify-center gap-6 my-8">
                    {skills.map((skill, index) => (
                        <div
                        key={index}
                        className="flex flex-col items-center w-20 hover:scale-110 transition-transform"
                        >
                        <div className="text-4xl">{skill.icon}</div>
                        <p className="mt-2 text-sm">{skill.name}</p>
                        </div>
                    ))}
                </div>
                <p className='text-lg'>
                    I'm always learning new technologies and improving my skills to provide high-quality solutions for clients and personal projects.
                </p>
            </motion.div>
        </section>
    )
}