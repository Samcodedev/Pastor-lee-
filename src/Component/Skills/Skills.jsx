import React from 'react';
import './Skills.css'
import { Link } from 'react-router-dom'

const Skills = () => {

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
                    <div className="text">
                        <h2>Professional Info.</h2>
                        <p>I am an Experienced Business and Data Analyst, Life Coach and CEO of Mindshift Africa, Partner with The Global Catalysts, Mentor and a Pastor, Host of a weekly love coaching session tagged TE-AMO on
                            <Link onClick={link1}>Instagram </Link> <Link onClick={link2}>FaceBook</Link>
                        </p>
                    </div>
                    <div className="work">
                        <div className="work-skill">
                            <h4>Pastor</h4>
                        </div>
                        <div className="work-skill">
                            <h4>Coach</h4>
                        </div>
                        <div className="work-skill">
                            <h4>Mentor</h4>
                        </div>
                        <div className="work-skill">
                            <h4>Councellor</h4>
                        </div>
                        <div className="work-skill">
                            <h4>Data Analysis</h4>
                        </div>
                    </div>
                </div>
                <div className="second">
                    <div className="box">
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