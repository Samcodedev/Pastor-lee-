import React from 'react';
import './Program.css'
import img1 from '../../img/Screenshot_20221107-005429_Instagram.jpg'
import img2 from '../../img/DOXA-22 A-022.jpg'
import img3 from '../../img/Screenshot_20221107-011414_Instagram.jpg'
import img4 from '../../img/Screenshot_20221107-005107_Instagram.jpg'
import img5 from '../../img/SAVE_20221103_155931.jpg'
import img6 from '../../img/DOXA-22 A-088.jpg'

const Program = () => {
    return(
        <div className='program'>
            <h1>Top Coaching.</h1>
            <div className="sub-program">
                <div className="first">
                    <div className="img-div">
                        <img src={img1} alt="" />
                        <div className="text-d">
                            <h4>Mindshift Africa</h4>
                            <button>visit</button>
                        </div>
                    </div>
                    <div className="img-div">
                        <img src={img4} alt="" />
                        <div className="text-d">
                            <h4>Te-amo</h4>
                            <button>visit</button>
                        </div>
                    </div>
                </div>
                <div className="first">
                    <div className="img-div">
                        <img src={img2} alt="" />
                        <div className="text-d">
                            <h4>Mentoring</h4>
                            <button>visit</button>
                        </div>
                    </div>
                    <div className="img-div">
                        <img src={img5} alt="" />
                        <div className="text-d">
                            <h4>Bible Teaching</h4>
                            <button>visit</button>
                        </div>
                    </div>
                </div>
                <div className="first">
                    <div className="img-div">
                        <img src={img3} alt="" />
                        <div className="text-d">
                            <h4>Coaching</h4>
                            <button>visit</button>
                        </div>
                    </div>
                    <div className="img-div">
                        <img src={img6} alt="" />
                        <div className="text-d">
                            <h4>Life Coaching</h4>
                            <button>visit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Program;