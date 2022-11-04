import React from 'react';
import './Skills.css'
import { Link } from 'react-router-dom'

const Skills = () => {
    return(
        <div className='skills'>
            <div className="sub-skills">
                <div className="first">
                    <div className="text">
                        <h2>PROFESSIONAL INFO <span>.</span></h2>
                        <p>A jdj sfnjfn d nfn  s fsfs bsfs   b bv dvb d v dhbvh dvd
                             v dj df hdf hh d dh  djk df  h jdkg kd gjd  d hd hdfjkdj d dg useDebugValue
                             ugfj nbjkkd j fdfgjkdfgd gjdgdg
                            <Link>Instagram </Link> <Link>FaceBook</Link>
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
                        <h1>30 <span>.</span></h1>
                        <p>Years of professional experience</p>
                    </div>
                    <button>Consult Now</button>
                </div>
            </div>
        </div>
    )
}

export default Skills;