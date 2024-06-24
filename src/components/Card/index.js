import React from 'react';
import PropTypes from 'prop-types';
import styles from './Card.module.scss'; // Importa os estilos do CSS Module
import Button from '../Button';

const Card = ({ title, imageUrl, description, onClick, textButton, style }) => {
    return (
        <div className={styles.card} style={style.card}>
            <img style={style.img} src={imageUrl} alt={title} className={styles.cardImage} />
            <div style={style.div} className={styles.cardContent}>
                <h2 style={style.h2} className={styles.cardTitle}>{title}</h2>
                <p style={style.p} className={styles.cardDescription}>{description}</p>
                <Button style={style.button} onClick={onClick} className={styles.cardButton} text={textButton} />
            </div>
        </div>
    );
};

Card.propTypes = {
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    textButton: PropTypes.string.isRequired,
    style: PropTypes.shape({
        card: PropTypes.object,
        img: PropTypes.object,
        div: PropTypes.object,
        h2: PropTypes.object,
        p: PropTypes.object,
        button: PropTypes.object,
    }),
};

Card.defaultProps = {
    onClick: () => {},
    style: {
        card: {},
        img: {},
        div: {},
        h2: {},
        p: {},
        button: {},
    },
};

export default Card;
