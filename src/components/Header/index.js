import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css'; // Certifique-se de que este arquivo existe

const Header = ({ children }) => {
    const [host, setHost] = useState(''); //pega dados

    useEffect(() => {
        setHost(window.location.pathname);
    }, []);

    const handleCentralButtonClick = () => {
        window.location.href = "http://172.31.255.2";
    };

    return (
        <div>
            <header>
                <nav className={styles.menu}>
                    <div className={styles.logo}>
                        <Link to="/">
                            <img src="logo192.png" alt="Logo" width="50px" />
                        </Link>
                    </div>
                    <ul className={styles.navigation}>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/erro">Erro</Link></li>
                    </ul>
                    <div className={styles.centralButton}>
                        <button onClick={handleCentralButtonClick}>
                            Central
                        </button>
                    </div>
                </nav>
            </header>

            {children}

        </div>
    );
};

export default Header;
