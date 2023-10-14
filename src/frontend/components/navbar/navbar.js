import React, { useState } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
    const [showMenu, setShowMenu] = useState(false);
    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <nav>
            <div className={`menu-btn ${showMenu ? 'active' : ''}`} onClick={toggleMenu}>
                <div className={`bar ${showMenu ? 'active' : ''}`}></div>
                <div className={`bar ${showMenu ? 'active' : ''}`}></div>
                <div className={`bar ${showMenu ? 'active' : ''}`}></div>
            </div>
            <ul className={`menu ${showMenu ? 'active' : ''}`}>
                <li className="special-item">
                    <Link to="/" className="logo-label-container">
                        <img src="/images/logo.png" alt="Logo" className="logo" />
                    </Link>
                </li>
                <li><Link to="/">Información</Link></li>
                <li><Link to="/" className='inicio-button'>Inicio</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
