import React from 'react';
import './Home.css'
// import { BsInstagram, BsFacebook, BsTwitter, BsLinkedin} from 'react-icons/bs'
import profile from '../../img/SAVE_20221104_160747_adobe_express.png'
import { FaLongArrowAltRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion';

const Home = () => {
    return(
        <div className='home'>
            <div className="sub-home">
                <motion.div 
                initial={{x: -100}}
                animate={{x: 0}} 
                transition={{
                    type: "spring",
                    damping: "20"
                }}
                className="text-div"
                >
                    <span>Lead Pastor, Life Coach, Data Analyst</span>
                    <h1>Olaleye Rosiji</h1>
                    <p>A Business and Data Analyst dexterous at using various analytics tools to solve High profile data related problems. Leye is a Life and Love coach who has successfully coached several teenagers/adults with mind-blowing testimonies. Olaleye is also the Lead Pastor of Kings’ Hub.</p>
                        <Link to="about"><button>About Me <FaLongArrowAltRight fontSize="30px" /></button></Link>
                </motion.div>
                <motion.div 
                    initial={{x: 100}}
                    animate={{x: 0}} 
                    transition={{
                        type: "spring",
                        damping: "20"
                    }}
                    className="img-div"
                >
                    <img src={profile} alt="Olaleye Rosiji" />
                </motion.div>
            </div>
            {/* <div className="social">
                <BsInstagram fontSize="30px" />
                <BsFacebook fontSize="30px" />
                <BsTwitter fontSize="30px" />
                <BsLinkedin fontSize="30px" />
            </div> */}
        </div>
    )
}

export default Home;