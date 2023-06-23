import React, {useEffect} from 'react'
import './Card.css'
import AOS from 'aos'
import "aos/dist/aos.css"

const Card = (props) => {
        
    useEffect(()=>{
        AOS.init()
        AOS.refresh()
    }, [])

  return (
    <div className='cards' data-aos="fade-up">
      <h5>{props.title}</h5>
      <button>Visite</button>
    </div>
  )
}

export default Card
