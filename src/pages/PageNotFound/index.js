import { useEffect } from 'react';
import Container from '../../components/Container';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import styles from './PageNotFound.module.css';
// import imgErro404 from '../../assets/images/404-page-not-found.png';
import { Img404 } from '../../assets';

const PageNotFound = () => {
    // const [host, setHost] = useState(''); //pega dados

    useEffect(() => {
        document.title = '404';
        // setHost(window.location.href);
    }, []);

    return (
        <>
        <Header />
        <Container>
            <section className={styles.container}>
                <h2>Ops! Conteúdo não localizado!</h2>
                <img src={Img404} className={styles.img} alt="Página não encontrada" />
                <p>O endereço "{window.location.href}" não foi encontrado!</p>
            </section>
        </Container>
        <Footer />
    </>
    );
}

export default PageNotFound;
