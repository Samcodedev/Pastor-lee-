import React from 'react';
import './Connect.css'
import { FiLink2 } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const Connect = () => {
    return(
        <div className='connect'>
            <div className="sub-connect">
                <div className="text">
                    <h2>Connect with me</h2>
                    <p>To get more content and for upcoming coaching.</p>
                </div>
                <Link to="social"><button>Connect <FiLink2 fontSize="25px" /></button></Link>
            </div>
        </div>
    )
}

export default Connect;