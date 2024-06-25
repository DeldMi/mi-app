import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/';
import Footer from '../../components/Footer';
import Container from '../../components/Container';
import Parallax from './../../components/Parallax';
import Card from '../../components/Card';
import Button from '../../components/Button';
import Modal from '../../components/Modal';
import Icon from '../../components/Icon';

import styles from './Home.module.scss';
import { Link } from 'react-router-dom';



const Home = () => {

    const inco = {
        width: '20px',
        height: '20px',
        color: '#666fff',
        marginLeft: "1rem"
    }

    const cards = {

    }




    useEffect(() => {
        document.title = 'Home - Meu Aplicativo';
    }, []);

    // const handleCardClick = () => {
    //     alert('Card clicado!');
    //     // Adicione aqui a lógica que deseja executar ao clicar no Card
    // };


    const [modalOpen, setModalOpen] = useState(false);



    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };


    return (
        <>
            <Parallax >
                <Header />

                <div className={styles.header} >
                    <h1>Home</h1>
                    <p>This is the Home page.</p>
                </div>

            </Parallax>
            <Container >
                <div className={styles.card}>

                    <Card
                        title="Exemplo de Card"
                        imageUrl={"logo192.png"}
                        description="Este é um exemplo de Card utilizando React e CSS Modules."
                        onClick={openModal}
                        textButton='Entar'
                        style={cards}
                    />

                </div>







            </Container>
            <Footer />

            <Modal isOpen={modalOpen} onClose={closeModal}>
                <div className={styles.modalContent} >
                    <h2>Conteúdo do Modal
                        <Icon name='whatsapp' style={inco} />
                    </h2>
                    <p>Aqui você pode colocar qualquer conteúdo que desejar.<span> Voluptate aute adipisicing ex occaecat.</span></p>

                    <Link to="/Modal" ><Button onClick={closeModal} text='Fechar Modal' /></Link>
                </div>
            </Modal>
        </>
    );
};



export default Home;
