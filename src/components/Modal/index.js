import React from 'react';
import PropTypes from 'prop-types';
import styles from './Modal.module.scss'; // Importe seu arquivo CSS para estilizar o modal
import Icon from '../Icon';
import { Link } from 'react-router-dom';

const Modal = ({ isOpen, onClose, children }) => {
    
    const icon = {
        color: '#555',
        width: '25px',
        height: '25px',
        float: 'right',
        cursor: 'pointer',
        fontSize: '20px',
        lineHeight: '20px',

    };

    if (!isOpen) return null;

    return (
       
            <div className={styles.modalOverlay}>
                <div className={styles.modal}>
                    <div className={styles.modalCloseBtn}>
                        <Link onClick={onClose} >
                            <Icon name="cls" style={icon} />
                        </Link>
                    </div>
                    <div className={styles.modalContent}>
                        {children}
                    </div>
            </div>
        </div>
    );
};

Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
};

export default Modal;
