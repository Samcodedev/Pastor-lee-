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
                    <p>An Enthusiastic Business and Data Analyst with academic background in Statistics. Dexterous at using various Analytics tools and Algorithms with precision to solve high profile data related problems.
                        <br/><br/>
                        Experienced in deploying Administrative and Project Management tools to various fields including IT, Critical analysis, Education, Training and development and Recovery Operations. Given to learning new solutions and upskilling. Adept with the use of Spreadsheets, thorough with descriptive statistics and data management including data collection, data cleaning, data analysis, presentation and so on.
                        <br/><br/>
                        Tenacious about leveraging analytic skills and models to assist high-end corporates and align a fast and improved solutions to positively influence the bottom line.
                        <br/><br/>
                        He is a Leader per excellence, a Counselor/Coach and Pastor/Mentor to several Gen-Zs and Millenials.
                    </p>
                </motion.div>
            </div>
        </div>
    )
}

export default About;
