import Container from "../../components/Container/Container";
import styles from './Inicio.module.css';

const Inicio = () => {
    return (
        <Container id='inicio'>
            <div className={styles.mainWrapper}>
                <div className={`${styles.titleWrapper} animation-slide-left`}>
                    <h1 className={styles.title}>Robert Wilson</h1>
                    <div>
                        <h2 className={`${styles.subTitle} animation-typing`}>Desenvolvedor Frontend</h2>
                    </div>
                </div>
                <img className={styles.image} src="../developer.png" alt="frontend developer" />
            </div>
        </Container>
    )
}

export default Inicio;