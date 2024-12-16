import Container from "../../components/Container/Container";
import styles from './Certificacoes.module.css';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import certificates from '../../data/certificates.json';
import { useState } from "react";

const Certificacoes = () => {
    const [index, setIndex] = useState(0);
    const currentProject = certificates[index];
    const [animationClass, setAnimationClass] = useState("");

    const handleNextProject = () => {
        setAnimationClass("animation-scale");
        setTimeout(() => {
            setIndex(i => (i < certificates.length - 1 ? i + 1 : 0));
            setAnimationClass("");
        }, 500);
    };

    const handleLastProject = () => {
        setAnimationClass("animation-scale");
        setTimeout(() => {
            setIndex(i => (i > 0 ? i - 1 : certificates.length - 1));
            setAnimationClass("");
        }, 500);
    };
    return (
        <Container id='certificacoes'>
            <div className={`${styles.wrapper} animation-revealing-right`}>
                <h2 className={styles.title}>{'<Certificações/>'}</h2>
                <div className={styles.carousel}>
                    <button className={styles.leftButton} onClick={handleLastProject}>
                        <FaAngleLeft />
                    </button>
                    <div className={`${styles.project} ${animationClass}`}>
                        <h3>{currentProject.title}</h3>
                        <p>{currentProject.school}</p>
                        <p>{currentProject.duration}</p>
                        <p>{currentProject.date}</p>
                        <p>{currentProject.url}</p>
                    </div>
                    <div className={`${styles.project} ${animationClass}`}>
                        <h3>{currentProject.title}</h3>
                        <p>{currentProject.school}</p>
                        <p>{currentProject.duration}</p>
                        <p>{currentProject.date}</p>
                        <p>{currentProject.url}</p>
                    </div>
                    <div className={`${styles.project} ${animationClass}`}>
                        <h3>{currentProject.title}</h3>
                        <p>{currentProject.school}</p>
                        <p>{currentProject.duration}</p>
                        <p>{currentProject.date}</p>
                        <p>{currentProject.url}</p>
                    </div>
                    <button className={styles.rightButton} onClick={handleNextProject}>
                        <FaAngleRight />
                    </button>
                </div>
            </div>
        </Container>
    )
}

export default Certificacoes;