import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.scss'; // Importe os estilos do seu arquivo CSS/Sass
import { toast } from 'react-toastify';

const Button = ({ text, onClick, type, style }) => {

    try {
        // Qualquer lógica que pode gerar um erro
        
    } catch (error) {
        // Captura o erro e mostra uma notificação
        toast.error(`Erro: ${error.message}`);
    }


    return (
        <button
            className={styles.button}
            type={type}
            onClick={onClick}
            style={style}
        >
            {text}
        </button>
    );
};

Button.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    type: PropTypes.oneOf(['button', 'submit', 'reset']),
    style: PropTypes.object,
};

Button.defaultProps = {
    type: 'button',
    style: {},
};

export default Button;
