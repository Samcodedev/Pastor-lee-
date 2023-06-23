import React, {useEffect} from 'react';
import './Skills.css'
import { Link } from 'react-router-dom'
import AOS from 'aos'
import "aos/dist/aos.css"

const Skills = () => {
        
        useEffect(()=>{
            AOS.init()
            AOS.refresh()
        }, [])
    
    function link1(){
        window.location.href = "https://instagram.com/leyerosiji?igshid=YmMyMTA2M2Y="
    }

    function link2(){
        window.location.href = "https://facebook.com/olaleye.rosiji"
    }

    return(
        <div className='skills'>
            <div className="sub-skills">
                <div className="first">
                    <div className="text" data-aos={window.innerWidth > 1198 ? "fade-right" : "fade-left"}>
                        <h2>Professional Info.</h2>
                        <p>I am an Experienced Business and Data Analyst, Life Coach and CEO of Mindshift Africa, Partner with The Global Catalysts, Mentor and a Pastor, Host of a weekly love coaching session tagged TE-AMO on
                            <Link onClick={link1}>Instagram </Link> <Link onClick={link2}>FaceBook</Link>
                        </p>
                    </div>
                    <div className="work">
                        <div className="work-skill" data-aos="fade-right">
                            <h4>Pastor</h4>
                        </div>
                        <div className="work-skill" data-aos={window.innerWidth > 1198 ? "fade-right" : "fade-left"}>
                            <h4>Coach</h4>
                        </div>
                        <div className="work-skill" data-aos={window.innerWidth > 1198 ? "fade-right" : "fade-left"}>
                            <h4>Mentor</h4>
                        </div>
                        <div className="work-skill" data-aos="fade-right">
                            <h4>Councellor</h4>
                        </div>
                        <div className="work-skill" data-aos="fade-left">
                            <h4>Data Analysis</h4>
                        </div>
                    </div>
                </div>
                <div className="second">
                    <div className="box" data-aos={window.innerWidth > 1198 ? "fade-left" : "fade-up"}>
                        <h1><span>20+</span> years of professional experience</h1>
                        <div className="content">
                            <button>Consult Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills;