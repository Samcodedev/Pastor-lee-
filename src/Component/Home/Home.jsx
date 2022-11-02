import React from 'react';
import './Home.css'
import { BsInstagram, BsFacebook, BsTwitter, BsLinkedin} from 'react-icons/bs'
import profile from '../../img/DOXA-22 A-321_adobe_express.png'

const Home = () => {
    return(
        <div className='home'>
            <div className="sub-home">
                <div className="text-div">
                    <span>Lead Pastor, Live Coach, Data Analyst</span>
                    <h1>OLALEYE ROSIJI</h1>
                    <p>OLALEYE ROSIJI is a live sc  fjf ejfc sc  heffdjdjjvkj  svfalfjfja fdhfhf shf sfhasfjsh fh asfh sh fshfshfhsfh shfshfsfsh fsh fjfjhsjf fsd 
                        fhfhsdjhf f fas hfhsfh shfshkf sfk hs hfsh f kkh fhk fsh h  sh fhsfhfhsd f hf hf fhdhf sf</p>
                        <button>About Me</button>
                </div>
                <div className="img-div">
                    <img src={profile} alt="Olaleye Rosiji" />
                </div>
            </div>
            <div className="social">
                <BsInstagram fontSize="30px" />
                <BsFacebook fontSize="30px" />
                <BsTwitter fontSize="30px" />
                <BsLinkedin fontSize="30px" />
            </div>
        </div>
    )
}

export default Home;