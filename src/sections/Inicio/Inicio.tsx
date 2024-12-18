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
                </div>
                <img className={styles.image} src="../developer.png" alt="frontend developer" />
            </Wrapper>
        </Container>
    )
}

export default Inicio;