import React from 'react';
import './TesCard.css'
import tes1 from '../../img/DOXA-22 A-134.jpg'

const TesCard = (props) => {
    return(
        <div className='tescard'>
             <div className="img-div">
                <img src={tes1} alt="" />
             </div>
             <div className="text-div">
                <p>{props.content}</p>
                <h4>{props.name}</h4>
                <span>{props.job}</span>
             </div>
        </div>
    )
}

export default TesCard;