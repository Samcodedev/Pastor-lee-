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
                        An Enthusiastic Business and Data Analyst with academic background in Statistics. Dexterous at using various Analytics tools and Algorithms with precision to solve high profile data related problems.
                        <br/><br/>
                        Experienced in deploying Agile/Scrum to Projects and to various fields including Critical analysis, Education, Training and development, Life Coaching and Recovery Operations. Given to learning new solutions and upskilling. Adept with the use of Spreadsheets, thorough with descriptive statistics and data management including data collection, data cleaning, data analysis, presentation and so on.
                        <br/><br/>
                        Tenacious about leveraging my analytic skills and models to assist high-end corporates align a fast and improved solutions to positively influence the bottom line.
                        <br/><br/>
                        The lead Pastor of the Kings’ Hub, Lead Coach at Mindshift Africa, Partner with The Global Catalysts, Love Coach at TE-AMO( a weekly instagram-live session)
                    </p>
                </motion.div>
            </div>
        </div>
    )
}

export default About;