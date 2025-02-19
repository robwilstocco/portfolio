import Container from "../../components/Container/Container";
import Wrapper from "../../components/Wrapper/Wrapper";
import styles from './About.module.css';

const About = () => {
    return (
        <Container id='about'>
            <Wrapper>
                <div className={`${styles.contentWrapper} ${'animation-revealing-left'}`}>
                    <img className={styles.aboutImage} src="aboutImage.jpg" alt="robert wilson" />
                    <div className={styles.textWrapper}>
                        <h2 className={styles.aboutTitle}>{'< Sobre mim/>'}</h2>
                        <div>
                            <p className={styles.text}>
                                Desde pequeno interessado por tecnologia e sempre curioso para descobrir como as
                                coisas funcionam. Essa curiosidade acabou me levando à carreira de desenvolvedor,
                                onde pude ver a mágica de códigos se tornarem belas interfaces e sistemas inteiros.
                            </p>
                            <p className={styles.text}>
                                Sou formado em Ciência da Computação e possuo experiência em Desenvolvimento Frontend, onde atuei em diversos
                                projetos de modernização de sistemas legados em Flash.
                            </p>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </Container>
    )
}

export default About;