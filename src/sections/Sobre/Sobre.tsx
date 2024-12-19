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
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                            <p className={styles.text}>
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </Container>
    )
}

export default Sobre;