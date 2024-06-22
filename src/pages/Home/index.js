import React, { useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Container from '../../components/Container';

const Home = () => {
    useEffect(() => {
        document.title = 'Home - Meu Aplicativo';
      }, []);

    return (
        <>
            <Header></Header>
                <Container >
                    
                </Container>
            <Footer />
        </>
    );
};

export default Home;
