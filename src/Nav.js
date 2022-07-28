import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => {

    return (
        <div className='nav-container'>
            <h1>NY TIMES NEWS READER</h1>
            <div className='home-btn-container'>
                <Link to='/'>
                    <button className='home-btn'>HOME</button>
                </Link>
            </div>
        </div>
    )
}

export default Nav;