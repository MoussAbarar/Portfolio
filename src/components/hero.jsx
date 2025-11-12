import { Link } from 'react-scroll';
import { motion } from "framer-motion";
//import ana from './images/ana-removebg-preview.png';
import { useEffect, useRef, useState} from 'react';
import * as THREE from 'three';
import NET from 'vanta/dist/vanta.net.min';

export default function Hero(){

    const bar = useRef();
    const [vantaEffect, setVantaEffect] = useState(null);
    const vantaRef = useRef(null);
    let pair = 0;

    useEffect(() => {
        if(!vantaEffect){
            setVantaEffect(
                NET({
                    el: vantaRef.current,
                    THREE: THREE,
                    mouseControls: true,
                    touchControls: true,
                    gyroControls: false,
                    minHeight: 200.00,
                    minWidth: 200.00,
                    scale: 1.00,
                    scaleMobile: 1.00,
                    color: '#fff',
                    backgroundColor: '#111827',
                    points: 15.00,
                    maxDistance: 2.00
                })
            )
        }
    }, [vantaEffect])

    useEffect(() => {
        let write = setInterval(() => {

            if(pair%2 === 0){
                bar.current.style.opacity = '0';
            }else{
                bar.current.style.opacity = '1';
            }
            pair++;
        }, 500);

        return () => clearInterval(write);

    }, [pair])

    return(
        <section ref={vantaRef} id='home' className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 text-black dark:text-white px-4">
            <motion.div 
            initial={{opacity: 0, y: 30}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 1}}
            className='text-center'
            >
                {/*<img src={ana} alt="" srcset="" className='w-64 h-64 mx-auto rounded-full'/>*/}
                <h1 className='text-4xl md:text-6xl font-bold mb-4'>Hi I'm <span className='text-blue-600 dark:text-blue-400'>Moussa Abarar</span></h1>
                <p className='text-xl md:text-2xl mb-4'>Full Stack Web Developer <span ref={bar} className='text-3xl'>|</span></p>
                <p className='text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-6'>I’m a full-stack web developer passionate about turning creative ideas into functional and visually appealing digital experiences.</p>
                <div className='flex flex-col justify-center sm:flex-row gap-4'>
                    <Link to='projects' smooth={true} duration={500} className='cursor-pointer inline-block text-blue-600 border-blue-600 dark:border-gray-900 dark:bg-white border-2 hover:text-blue-800 px-6 py-3 rounded-3xl transition w-fit sm:mx-0 mx-auto sm:w-1/3'>My Projects</Link>
                    <Link to='contact' smooth={true} duration={500} className='cursor-pointer inline-block bg-blue-600 border-blue-600 border-2 dark:border-blue-500 dark:bg-blue-500 text-white dark:hover:bg-blue-400 px-6 py-3 rounded-3xl hover:bg-blue-700 transition w-fit sm:mx-0 mx-auto sm:w-1/3'>Contact Me</Link>
                </div>
            </motion.div>
        </section>
    )
}