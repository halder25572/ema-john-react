import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="" />
            <div>
                <a href="./home">Home</a>
                <a href="./about">About</a>
                <a href="./service">Service</a>
                <a href="./contact">Contact</a>
            </div>
        </div>
    );
};

export default Header;