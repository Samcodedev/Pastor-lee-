import React from 'react';
import './Home.css'
// import { BsInstagram, BsFacebook, BsTwitter, BsLinkedin} from 'react-icons/bs'
import profile from '../../img/IMG_20221103_160735_adobe_express.png'
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
                    <span>Lead Pastor, Live Coach, Data Analyst</span>
                    <h1>OLALEYE ROSIJI</h1>
                    <p>OLALEYE ROSIJI is a live sc  fjf ejfc sc  heffdjdjjvkj  svfalfjfja fdhfhf shf sfhasfjsh fh asfh sh fshfshfhsfh shfshfsfsh fsh fjfjhsjf fsd 
                        fhfhsdjhf f fas hfhsfh shfshkf sfk hs hfsh f kkh fhk fsh h  sh fhsfhfhsd f hf hf fhdhf sf</p>
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