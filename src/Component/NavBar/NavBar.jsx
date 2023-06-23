import React from 'react';
// import './NavBar.css'
// import { useNavigate } from 'react-router-dom'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {

    // const navigate = useNavigate()

    // function home(){
    //     navigate(
    //         "/"
    //     )
    // }

    // function about(){
    //     navigate(
    //         "/about"
    //     )
    // }

    // function connect(){
    //     navigate(
    //         "/social"
    //     )
    // }

    return(
        <>
            <Navbar bg="light" data-bs-theme="light" sticky="top">
                <Container>
                    <Navbar.Brand href="#home">LEE</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                        <Nav.Link href="/social">Global Impact</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar;