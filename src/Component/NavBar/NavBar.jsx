import React from 'react';
import './NavBar.css'
import { useNavigate } from 'react-router-dom'

const NavBar = () => {

    const navigate = useNavigate()

    function home(){
        navigate(
            "/"
        )
    }

    function about(){
        navigate(
            "/about"
        )
    }

    function connect(){
        navigate(
            "/social"
        )
    }

    return(
        <div className='navbar'>
            <ul>
                <li onClick={home}>
                    Home<span className='line'></span>
                </li>
                <li onClick={about}>
                    About<span className='line'></span>
                </li>
                <li onClick={connect}>
                    Connect<span className='line'></span>
                </li>
            </ul>
        </div>
    )
}

export default NavBar;