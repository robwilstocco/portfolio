import Container from "../../components/Container/Container";
import styles from './Projetos.module.css';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import projects from '../../data/projects.json';
import { useState } from "react";

const Projetos = () => {
    const [index, setIndex] = useState(0);
    const currentProject = projects[index];
    const [animationClass, setAnimationClass] = useState("");

    const handleNextProject = () => {
        setAnimationClass("animation-scale");
        setTimeout(() => {
            setIndex(i => (i < projects.length - 1 ? i + 1 : 0));
            setAnimationClass("");
        }, 500);
    };

    const handleLastProject = () => {
        setAnimationClass("animation-scale");
        setTimeout(() => {
            setIndex(i => (i > 0 ? i - 1 : projects.length - 1));
            setAnimationClass("");
        }, 500);
    };

    return (
        <Container id='projetos'>
            <div className={`${styles.wrapper} animation-revealing-left`}>
                <h2 className={styles.title}>{'<Projetos/>'}</h2>
                <div className={styles.carousel}>
                    <button className={styles.leftButton} onClick={handleLastProject}>
                        <FaAngleLeft />
                    </button>
                    <div className={`${styles.project} ${animationClass}`}>
                        <h3>{currentProject.name}</h3>
                        <img className={styles.aboutImage} src={currentProject.image} alt="project" />
                        <p>{currentProject.description}</p>
                    </div>
                    <button className={styles.rightButton} onClick={handleNextProject}>
                        <FaAngleRight />
                    </button>
                </div>
            </div>
        </Container>
    )
}

export default Projetos;