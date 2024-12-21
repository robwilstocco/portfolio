import Container from "../../components/Container/Container";
import Wrapper from "../../components/Wrapper/Wrapper";
import styles from './Sobre.module.css';

const Sobre = () => {
    return (
        <Container id='sobre'>
            <Wrapper>
                <div className={`${styles.teste} ${'animation-revealing-left'}`}>
                    <img className={styles.aboutImage} src="https://place-hold.it/300x300" alt="robert wilson" />
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

export default Sobre;