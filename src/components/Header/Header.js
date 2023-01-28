import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/about">About</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="./service">Service</Link>
                <Link to="./contact">Contact</Link>
            </div>
        </div>
    );
};

export default Header;