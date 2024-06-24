import React from 'react';
import * as Icons from '../../assets/icons'; // Importe os ícones do arquivo de índice (index.js)

import styles from "./Icon.module.scss";

const Icon = ({ name, style, title }) => {
    // Determine qual ícone utilizar com base no 'name'
    let SelectedIcon = Icons[name];

    if (!SelectedIcon) {
        console.warn(`Ícone '${name}' não encontrado`);
        return null;
    }

    return (
        <SelectedIcon style={style} title={title} aria-label={title} className={styles.icon}/>
        
    );
}

export default Icon;
