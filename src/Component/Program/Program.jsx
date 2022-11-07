import React from 'react';
import './Program.css'
import img1 from '../../img/Screenshot_20221107-005429_Instagram.jpg'
import img2 from '../../img/DOXA-22 A-022.jpg'
import img3 from '../../img/Screenshot_20221107-011414_Instagram.jpg'
import img4 from '../../img/Screenshot_20221107-005107_Instagram.jpg'
import img5 from '../../img/Screenshot_20221107-102355_Instagram.jpg'
import img6 from '../../img/DOXA-22 A-088.jpg'

const Program = () => {

    function link1(){
        window.location.href = "https://www.linkedin.com/in/olaleye-rosiji"
    }
    function link2(){
        window.location.href = "https://instagram.com/leyerosiji?igshid=YmMyMTA2M2Y="
    }
    function link3(){
        window.location.href = "https://instagram.com/leyerosiji?igshid=YmMyMTA2M2Y="
    }
    function link4(){
        window.location.href = "https://t.me/KingshubBC"
    }
    function link5(){
        window.location.href = "https://www.linkedin.com/in/olaleye-rosiji"
    }
    function link6(){
        window.location.href = "https://instagram.com/leyerosiji?igshid=YmMyMTA2M2Y="
    }
    return(
        <div className='program'>
            <h1>Top Coaching.</h1>
            <div className="sub-program">
                <div className="first">
                    <div className="img-div">
                        <img src={img1} alt="" />
                        <div className="text-d">
                            <h4>Mindshift Africa</h4>
                            <button onClick={link1}>visit</button>
                        </div>
                    </div>
                    <div className="img-div">
                        <img src={img4} alt="" />
                        <div className="text-d">
                            <h4>Te-amo</h4>
                            <button onClick={link2}>visit</button>
                        </div>
                    </div>
                </div>
                <div className="first">
                    <div className="img-div">
                        <img src={img2} alt="" />
                        <div className="text-d">
                            <h4>Mentoring</h4>
                            <button onClick={link3}>visit</button>
                        </div>
                    </div>
                    <div className="img-div">
                        <img src={img5} alt="" />
                        <div className="text-d">
                            <h4>Bible Teaching</h4>
                            <button onClick={link4}>visit</button>
                        </div>
                    </div>
                </div>
                <div className="first">
                    <div className="img-div">
                        <img src={img3} alt="" />
                        <div className="text-d">
                            <h4>Coaching</h4>
                            <button onClick={link5}>visit</button>
                        </div>
                    </div>
                    <div className="img-div">
                        <img src={img6} alt="" />
                        <div className="text-d">
                            <h4>Life Coaching</h4>
                            <button onClick={link6}>visit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Program;