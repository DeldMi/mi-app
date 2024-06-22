// src/context/AuthContext.js
import React, { createContext, useState, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userUUID, setUserUUID] = useState(null);

    const login = (email, password) => {
        if (email === '123' && password === '123') { // Substitua pelas suas credenciais reais
            setIsAuthenticated(true);
            setUserUUID(uuidv4());
        } else {
            alert('Credenciais inválidas');
        }
    };

    const logout = () => {
        setIsAuthenticated(false);
        setUserUUID(null);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, userUUID, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
