import React from 'react';
import './Program.css'
import img1 from '../../img/DOXA-22 A-022.jpg'
import img2 from '../../img/DOXA-22 A-038.jpg'
import img3 from '../../img/DOXA-22 A-052.jpg'
import img4 from '../../img/DOXA-22 A-077.jpg'
import img5 from '../../img/DOXA-22 A-088.jpg'
import img6 from '../../img/DOXA-22 A-133.jpg'

const Program = () => {
    return(
        <div className='program'>
            <h1>TOP COACHING.</h1>
            <div className="sub-program">
                <div className="first">
                    <div className="img-div">
                        <img src={img1} alt="" />
                        <div className="text-d">
                            <h4>MIND SHIFT AFRICA</h4>
                            <button>VISIT</button>
                        </div>
                    </div>
                    <div className="img-div">
                        <img src={img4} alt="" />
                        <div className="text-d">
                            <h4>LOVE COUNCELLING</h4>
                            <button>VISIT</button>
                        </div>
                    </div>
                </div>
                <div className="first">
                    <div className="img-div">
                        <img src={img2} alt="" />
                        <div className="text-d">
                            <h4>MENTORING</h4>
                            <button>VISIT</button>
                        </div>
                    </div>
                    <div className="img-div">
                        <img src={img5} alt="" />
                        <div className="text-d">
                            <h4>BIBLE TEACHING</h4>
                            <button>VISIT</button>
                        </div>
                    </div>
                </div>
                <div className="first">
                    <div className="img-div">
                        <img src={img3} alt="" />
                        <div className="text-d">
                            <h4>DOXA COACHING</h4>
                            <button>VISIT</button>
                        </div>
                    </div>
                    <div className="img-div">
                        <img src={img6} alt="" />
                        <div className="text-d">
                            <h4>DOXA COACHING</h4>
                            <button>VISIT</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Program;