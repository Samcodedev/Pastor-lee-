import React from 'react';
import './Social.css'
import SCard from '../cards/SCard';
import { BsTwitter, BsLinkedin, BsInstagram, BsFacebook } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'

const social = () => {

    const data =[
        {
            title: "Email Messaging",
            content: "Get in touch with me for business collaborations.",
            icon: <MdEmail fontSize="50px" color="#d65e5e" />,
            link: ""
        },
        {
            title: "Twitter Connect",
            content: "Coaching, Business tips and inspiring tweets",
            icon: <BsTwitter fontSize="45px" color='#1da1f2' />,
            link: "https://twitter.com/leyislee?t=G1MYKugE0-EgidbC4SoVvg&s=09"
        },
        {
            title: "LinkedIn Connect",
            content: "Connecting and networking in term of business",
            icon: <BsLinkedin fontSize="45px" color='#0072b1' />,
            link: "https://www.linkedin.com/in/olaleye-rosiji"
        },
        {
            title: "Facebook Connect",
            content: "Upcoming coaching and mentorship programs",
            icon: <BsFacebook fontSize="45px" color='#3b5998' />,
            link: "https://facebook.com/olaleye.rosiji"
        },
        {
            title: "Instagram Connect",
            content: "Bible teaching, coaching and love mentorship programs",
            icon: <BsInstagram fontSize="45px" color='#bc2a8d' />,
            link: "https://instagram.com/leyerosiji?igshid=YmMyMTA2M2Y="
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