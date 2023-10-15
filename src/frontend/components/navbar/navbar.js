import React, { useState, useEffect } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
    const [showMenu, setShowMenu] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

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
                        <img
                            src={isSmallScreen ? "/images/logo-small.png" : "/images/logo.png"}
                            alt="Logo"
                            className="logo"
                        />
                    </Link>
                </li>
                <li><Link to="/info">Información</Link></li>
                <li><Link to="/" className='inicio-button'>Inicio</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
