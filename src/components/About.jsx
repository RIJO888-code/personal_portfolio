import React from 'react'
import y from "../assets/3.jpg"
import {motion} from "framer-motion";
const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <h1 className='my-20 text-center text-4xl'> About <span className='text-neutral-500'>Me</span></h1>
        <div className='flex flex-wrap'>
            <motion.div
             whileInView={{opacity:1,x:0}}
             initial={{opacity:0,x:-100}}
             transition={{duration:0.5}}
            className="w-full lg:w-1/2 lg:p-8" >
            <div className='flex items-center justify-center'>
                <img className='rounded-xl' src={y} alt="about"/>
            </div>
            </motion.div>
            <motion.div 
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x:100}}
            transition={{duration:0.5}}
            className='w-full lg:w-1/2'>
            <div className='flex justify-center lg:justify-start'>
                <p className=' my-2 max-w-xl py-6 ml-10'> Hello! I’m a  B.Tech Computer Science Engineer, passionate about coding and creating impactful solutions through technology.

I have strong skills in C, Python, and JavaScript, with a solid foundation in PHP and a beginner’s understanding of Java. My primary interest lies in web development, where I enjoy designing and developing user-friendly websites that combine creativity with functionality.

Adaptability is one of my strengths, enabling me to quickly learn new technologies and work effectively in diverse environments. Whether it's solving complex problems, collaborating on projects, or diving into a new programming language, I’m always ready for a challenge.

 </p>
             
            </div>
            </motion.div>
        </div>
    </div>
  );
};

export default About;