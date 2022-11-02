import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from './Landing';

const Component = () => {
    return(
        <Router>
            {/* <NavBar /> */}
            <Routes>
                <Route path="/" element={<Landing />} />
            </Routes>
        </Router>
    )
}

export default Component;