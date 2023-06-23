import React, {useEffect} from 'react';
import './Home.css'
// import { BsInstagram, BsFacebook, BsTwitter, BsLinkedin} from 'react-icons/bs'
import profile from '../../img/SAVE_20221104_160747_adobe_express.png'
import { FaLongArrowAltRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import AOS from 'aos'
import "aos/dist/aos.css"

const Home = () => {
    
    useEffect(()=>{
        AOS.init()
        AOS.refresh()
    }, [])

    return(
        <div className='home'>
            <div className="sub-home">
                <div className="text-div" data-aos={window.innerWidth < 1198? "fade-up" : "fade-right"}>
                    <span>Lead Pastor, Life Coach, Data Analyst</span>
                    <h1>Olaleye Rosiji</h1>
                    <p>A Business and Data Analyst dexterous at using various analytics tools to solve High profile data related problems. Leye is a Life and Love coach who has successfully coached several teenagers/adults with mind-blowing testimonies. Olaleye is also the Lead Pastor of Kings’ Hub.</p>
                        <Link to="about"><button>About Me <FaLongArrowAltRight fontSize="30px" /></button></Link>
                </div>
                <div className='img-div' data-aos="fade-up">
                    <img src={profile} alt="Olaleye Rosiji" />
                </div>
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