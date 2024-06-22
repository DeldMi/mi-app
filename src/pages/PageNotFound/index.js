import Container from '../../components/Container';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import styles from './PageNotFound.module.css';
import imgErro404 from './img/404-page-not-found.png';

const PageNotFound = () => {
    return (
        <>
            <Header />
            <Container   > 
                <section className={styles.container}>
                    <h2>
                        Ops! Conteudo não localizado!
                    </h2>
                    <img src={imgErro404} className={styles.img} alt="Logo de Pagina não localizada" />
                </section>
            </Container>
            <Footer />
        </>
    );
}

export default PageNotFound;