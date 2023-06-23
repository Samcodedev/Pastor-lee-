import React from 'react';
import './Program.css'
import img1 from '../../img/Screenshot_20221107-005429_Instagram.jpg'
import img2 from '../../img/DOXA-22 A-022.jpg'
import img3 from '../../img/Screenshot_20221107-011414_Instagram.jpg'
import img4 from '../../img/Screenshot_20221107-005107_Instagram.jpg'
import img5 from '../../img/Screenshot_20221107-102355_Instagram.jpg'
import img6 from '../../img/DOXA-22 A-088.jpg'
import Card from './Card';

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

    const data = [
        {
            title: "Mindshift Africa",

        },
        {
            title: "Mentorship",
            link: ""
        },
        {
            title: "Coaching",
            link: ""
        },
        {
            title: "Marriage Councel",
            link: ""
        },
        {
            title: "Lead Pastor",
            link: ""
        },
        {
            title: "Life Coaching",
            link: ""
        }
    ]

    const card = data.map((item) =>{
        return(
            <Card 
                title={item.title}
                link={item.link}
            />
        )
    })
    return(
        <div className='program'>
            <h1>Top Coaching.</h1>
            <div className="sub-program">
                {card}
            </div>
        </div>
    )
}

export default Program;