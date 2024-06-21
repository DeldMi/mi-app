import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.modie.css'; // Certifique-se de que este arquivo existe ou remova esta linha se não estiver a usar CSS

const Header = () => {
    return (
        <nav className="menu">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
};

export default Header;
