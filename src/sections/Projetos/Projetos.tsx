import Container from "../../components/Container/Container";
import styles from './Projetos.module.css';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

const Projetos = () => {
    return (
        <Container id='projetos'>
            <div className={`${styles.wrapper} animation-revealing-left`}>
                <h2 className={styles.title}>{'<Projetos/>'}</h2>
                <div className={styles.carousel}>
                    {/* <button className={styles.leftButton}> */}
                    <FaAngleLeft />
                    {/* </button> */}
                    <div className={styles.project}>
                        <h3>Project name</h3>
                        <img className={styles.aboutImage} src="https://place-hold.it/300x200" alt="project" />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                    <button><FaAngleRight /></button>
                </div>
            </div>
        </Container>
    )
}

export default Projetos;