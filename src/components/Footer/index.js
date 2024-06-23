
import { Link } from 'react-router-dom';
import style from './Footer.module.css';
import Icon from '../Icon';


const Footer = () => {
    let inco = {
        width: '25px',
        height: '25px',
        color: '#fff'
    };
    return (

        <>
            <nav className={style.navFooter} >
                <div className={style.boxInfo} >
                    <div>
                        <img src='logo512.png' alt='LogoBanca' />
                    </div>
                    <div className={style.dingo}>
                        <p>Dingo da impresa</p>
                    </div>


                    <nav className={style.btn_social}>



                        <ul>

                            <li id="instagram">
                                <a href="#" target="_blank" title="instagram">
                                    <Icon name='instagram' style={inco} />

                                </a>
                            </li>
                            <li id="whatsapp">
                                <a href="#" target="_blank" title="whatsapp">
                                    <Icon name='whatsapp' style={inco} />

                                </a>
                            </li>
                            <li id="linkedin">
                                <a href="#" target="_blank" title="linkedin">
                                    <Icon name='linkedin' style={inco} />

                                </a>
                            </li>


                        </ul>

                    </nav>



                </div>
                <div className={style.links}>
                    <h6>Linkes</h6>
                    <ul >
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>

                </div>
                <div className={style.boletim}>
                    <p>Boletim de Novidades</p>
                </div>
            </nav>
            <footer>
                <p>&copy; 2024 André Felipe. Todos os direitos reservados.</p>
            </footer>
        </>
    );
}

export default Footer;