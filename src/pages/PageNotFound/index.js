import styles from './PageNotFound.module.css';

const PageNotFound = () =>{
    return (
        <section className={styles.container}>
            <h2>
                Ops! Conteudo não localizado!
                </h2> 
                <img src="/img/404-page-not-found.png" alt="Logo de Pagina não localizada" />
        </section> 
    );
}

export default PageNotFound;