import React, { useState, useEffect } from 'react';
import 'react-light-accordion/demo/css/index.css';
import MainHeader from './MainHeader';
import ContactUsHeader from './ContactUsHeader';

function Header() {

    const [activeClass, setActiveClass] = useState('normal')

    useEffect(() => {
        window.addEventListener('scroll', () => {
            // if (window.scrollY > 0) {
            //     setActiveClass('normal');
            // }
            if (window.scrollY > 80) {
                setActiveClass('fixed');
            }
            if (window.scrollY > 200) {
                setActiveClass('innerView');
            }
        });
    }, [])

    return (
            <header className={`header ${activeClass}`}>
                <ContactUsHeader />
                <MainHeader />
            </header >
    )
}

export default Header;