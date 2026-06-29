import { FaGithub, FaLinkedin } from "react-icons/fa";
import Container from "../../components/Container/Container";
import Wrapper from "../../components/Wrapper/Wrapper";
import styles from './Start.module.css';

const Start = () => {
    return (
        <Container id='start'>
            <Wrapper>
                <div className={`${styles.titleWrapper} animation-slide-left`}>
                    <h1 className={styles.title}>Robert Wilson</h1>
                    <div>
                        <h2 className={`${styles.subTitle} animation-typing`}>Desenvolvedor Frontend</h2>
                    </div>
                    <div className={styles.icons}>
                        <a href="https://www.linkedin.com/in/robwilstocco/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn de Robert Wilson"><FaLinkedin /></a>
                        <a href="https://github.com/robwilstocco" target="_blank" rel="noopener noreferrer" aria-label="GitHub de Robert Wilson"><FaGithub /></a>
                    </div>
                    <div className={styles.cta}>
                        <a href="#projects" className={styles.ctaSecondary}>Ver projetos</a>
                        <a href="#contact" className={styles.ctaPrimary}>Entre em contato</a>
                    </div>
                </div>
                <img className={styles.image} src="developer.png" alt="frontend developer" />
            </Wrapper>
        </Container>
    )
}

export default Start;