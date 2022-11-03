import React from 'react';
import Connect from './Connect/Connect';
import Heading from './Heading/Heading';
import Home from './Home/Home';
import Program from './Program/Program';
import Skills from './Skills/Skills';
import Testimony from './Testimony/Testimony';

const Landing = () => {
    return(
        <>
            <Home />
            <Skills />
            <Program />
            <Heading />
            <Testimony />
            <Connect />
        </>
    )
}

export default Landing;