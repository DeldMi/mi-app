import React, { useState, useEffect } from 'react';
import styles from './ScrollToTopButton.module.scss'; // Certifique-se de que o caminho está correto
import Icon from '../Icon';

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        const scrolled = document.documentElement.scrollTop;
        const maxScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        setIsVisible(scrolled > (maxScroll - window.innerHeight / 2));
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <button 
            className={`${styles.scrollToTop} ${isVisible ? styles.visible : ''}`} 
            onClick={scrollToTop}
        >
            <Icon name='ArrowUpDouble' />
        </button>
    );
};

export default ScrollToTopButton;