import React from 'react';
import './About.css'
import profile from '../../img/SAVE_20221104_160917_adobe_express.png'
import { motion } from 'framer-motion';

const About = () => {
    return(
        <div className='about'>
            <div className="sub-about">
                <motion.div 
                initial={{x: -100}}
                animate={{x: 0}} 
                transition={{
                    type: "spring",
                    damping: "20"
                }}
                className="img-div"
            >
                    <img src={profile} alt="" />
                </motion.div>
                <motion.div 
                initial={{x: 100}}
                animate={{x: 0}} 
                transition={{
                    type: "spring",
                    damping: "20"
                }}
                className="text-div"
                >
                    <h1>I'm Olaleye Rosiji</h1>
                    <span>About Me</span>
                    <p>
                        My name is Olaleye Rosiji and i'm a social media marketing expert. I work as an affiliate marketer and i earn commissions selling training programs and courses.
                        <br/><br/>
                        I've been at this for over 2years and it is this same business model that funds my lifestyle today.
                        <br/><br/>
                        I also teach complete newbies how to start and scale their own affiliate marketing business from scratch using the same strategies i employed as a beginner.

                    </p>
                </motion.div>
            </div>
        </div>
    )
}

export default About;