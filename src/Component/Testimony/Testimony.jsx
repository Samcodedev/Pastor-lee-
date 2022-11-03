import React from 'react';
import './Testimony.css'
import TesCard from '../cards/TesCard';
import TesData from './TesData.json'
import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react'

const Testimony = () => {

    const [width, setWidth] = useState(0)
    const carousel = useRef()

    useEffect(() => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    }, [])

    const data = TesData.map((item) =>{
        return(
            <TesCard 
                name={item.name}
                content={item.content}
                job={item.job}
            />
        )
    })

    return(
        <div className='testimony' >
            <div className="fade"></div>
            <div className="fade2"></div>
            <motion.div className="carousel" ref={carousel} whileTap={{cursor: "grabbing"}}>
                <motion.div drag="x" dragConstraints={{right: 0, left: -width}} className="inner">
                    {data}
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Testimony;