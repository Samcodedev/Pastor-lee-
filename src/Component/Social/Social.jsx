import React from 'react';
import './Social.css'
import SCard from '../cards/SCard';
import { BsTwitter, BsLinkedin, BsInstagram, BsFacebook, BsWhatsapp } from 'react-icons/bs'

const social = () => {

    const data =[
        {
            title: "WhatsApp Connect",
            content: "I share daily status updates on Faith, Business, and Multivation that will inspire you greatly",
            icon: <BsWhatsapp fontSize="50px" color="#25d366" />,
            link: ""
        },
        {
            title: "Twitter Connect",
            content: "Daily musingd and growth tips",
            icon: <BsTwitter fontSize="45px" color='#1da1f2' />,
            link: ""
        },
        {
            title: "LinkedIn Connect",
            content: "Building greate network",
            icon: <BsLinkedin fontSize="45px" color='#0072b1' />,
            link: ""
        },
        {
            title: "Facebook Connect",
            content: "Thought leadership",
            icon: <BsFacebook fontSize="45px" color='#3b5998' />,
            link: ""
        },
        {
            title: "Instagram Connect",
            content: "Value and Life style",
            icon: <BsInstagram fontSize="45px" color='#bc2a8d' />,
            link: ""
        }
    ]

    const cards = data.map((items) =>{
        return(
            <SCard 
                title={items.title}
                content={items.content}
                icon={items.icon}
                link={items.link}
            />
        )
    })

    return(
        <div className='socials'>
            <div className="sub-socials">
               {cards}
            </div>
        </div>
    )
}

export default social;