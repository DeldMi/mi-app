
import { Link } from 'react-router-dom';
import './Footer.module.css';

const Footer = () => {
    return (
        <>
            <nav>
                <div>
                    
                    

                </div>
                <div>
                    <ul>
                        <ul >
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </ul>
                </div>
                <div>

                </div>
            </nav>
            <footer>
                <p>&copy; 2024 André Felipe. Todos os direitos reservados.</p>
            </footer>
        </>
    );
}

export default Footer;