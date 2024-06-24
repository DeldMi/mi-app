// src/components/ExampleComponent.js
import React from 'react';
import {gif } from '../../assets';
import styles from './parallax.module.css';

const Parallax = ({ children }) => {

    const style = {
        backgroundImage: `url(${gif})`,
  
    }
    return (
        <div style={style}  className={styles.parallax} >
            {/* Conteúdo adicional aqui */}
            {children}
        </div>
    );
}

export default Parallax;
