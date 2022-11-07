import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './About/About';
import Landing from './Landing';
import Social from './Social/Social';
import NavBar from './NavBar/NavBar';
import Error from './Error/Error';

const Component = () => {
    return(
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/about" element={<About />} />
                <Route path="/social" element={<Social />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </Router>
    )
}

export default Component;