import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import styles from './Login.module.css';
import Header from '../../components/Header/';
import Footer from '../../components/Footer';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { login, userUUID } = useAuth();



    const handleSubmit = (event) => {
        event.preventDefault();

        login(email, password);
        if (userUUID) {
            navigate(`/dashboard/${userUUID}`);
            navigate(`/Settings/${userUUID}`);

        } else {
            setError('Email ou senha inválidos.');
        }
        // if (userUUI) {
        //     // navigate(`/protected/${userUUID}`);
        // } else {
        //     setError('Email ou senha inválidos.');
        // }


    };



    return (
        <>
            <Header />
            <div className={styles.loginContainer}>
                <form onSubmit={handleSubmit} className={styles.loginForm}>
                    <h2>Login</h2>
                    {error && <p className={styles.error}>{error}</p>}
                    <div className={styles.formGroup}>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="name"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="password">Senha:</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className={styles.loginButton}>Entrar</button>
                </form>
            </div>
            <Footer />
        </>
    );
}

export default Login;
