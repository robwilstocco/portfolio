import { FaGithub, FaLinkedin } from "react-icons/fa";
import Container from "../../components/Container/Container";
import Wrapper from "../../components/Wrapper/Wrapper";
import styles from './Inicio.module.css';

const Inicio = () => {
    return (
        <Container id='inicio'>
            <Wrapper>
                <div className={`${styles.titleWrapper} animation-slide-left`}>
                    <h1 className={styles.title}>Robert Wilson</h1>
                    <div>
                        <h2 className={`${styles.subTitle} animation-typing`}>Desenvolvedor Frontend</h2>
                    </div>
                    <div className={styles.icons}>
                        <a href="https://www.linkedin.com/in/robwilstocco/"><FaLinkedin /></a>
                        <a href="https://github.com/robwilstocco"><FaGithub /></a>
                    </div>
                </div>
                <img className={styles.image} src="../developer.png" alt="frontend developer" />
            </Wrapper>
        </Container>
    )
}

export default Inicio;