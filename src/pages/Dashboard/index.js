import React from 'react';
import Header from '../../components/Header/';
import Footer from '../../components/Footer';
import Container from '../../components/Container';

const Dashboard = () => {
    return (
        <>
            <Header />
            <Container>
                <div>
                    <h1>Dashboard</h1>
                    <p>This is the dashboard page. Only authenticated users can see this.</p>
                </div>
            </Container>
            <Footer />
        </>
    );
};

export default Dashboard;