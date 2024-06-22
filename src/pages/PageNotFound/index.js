import { useEffect, useState } from 'react';
import Container from '../../components/Container';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import styles from './PageNotFound.module.css';
import imgErro404 from '../../assets/images/404-page-not-found.png';

const PageNotFound = () => {
    const [host, setHost] = useState(''); //pega dados

    useEffect(() => {
        document.title = '404';
        setHost(window.location.href);
    }, []);

    return (
        <>
            <Header />
            <Container>
                <section className={styles.container}>
                    <h2>
                        Ops! Conteúdo não localizado!
                    </h2>
                    <img src={imgErro404} className={styles.img} alt="Logo de Página não localizada" />
                    <p>O endereço "{host}" não foi encontrado!</p>
                </section>
            </Container>
            <Footer />
        </>
    );
}

export default PageNotFound;
