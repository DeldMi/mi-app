import React from 'react';
// import { useParams } from 'react-router-dom';
 import { useAuth } from '../../context/AuthContext';

const ProtectedPage = () => {
    // const { uuid } = useParams();
    // const { userUUID } = useAuth();

    // if (uuid !== userUUID) {
    //     return <p>Acesso não autorizado.</p>;
    // }

    const { userUUID } = useAuth();

    return (
        <div>
        <h1>Protected Page</h1>
        <p>Your UUID: {userUUID}</p>
    </div>
    );
};

export default ProtectedPage;
