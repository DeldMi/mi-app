import React from 'react';
import * as Icons from './img'; // Importe os ícones do arquivo de índice (index.js)

const Icon = ({ name, style, title }) => {
    // Determine qual ícone utilizar com base no 'name'
    let SelectedIcon = Icons[name];

    if (!SelectedIcon) {
        console.warn(`Ícone '${name}' não encontrado`);
        return null;
    }

    return (
        <SelectedIcon style={style} title={title} aria-label={title} />
    );
}

export default Icon;
