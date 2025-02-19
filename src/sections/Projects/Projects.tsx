import Container from "../../components/Container/Container";
import styles from './Projects.module.css';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import projects from '../../data/projects.json';
import { useState } from "react";
import Wrapper from "../../components/Wrapper/Wrapper";

const Projects = () => {
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
        <Container id='projects'>
            <Wrapper animation="animation-revealing-left" direction="column">
                <h2 className={styles.title}>{'<Projetos/>'}</h2>
                <div className={styles.carousel}>
                    <button className={styles.leftButton} onClick={handleLastProject}>
                        <FaAngleLeft />
                    </button>
                    <div className={`${styles.project} ${animationClass}`}>
                        <div className={`${styles.projectDetail}`}>
                            <h3>{currentProject.name}</h3>
                            <img className={styles.aboutImage} src={currentProject.image} alt="project" />
                            <p>{currentProject.description}</p>
                        </div>
                        <div className={`${styles.projectLinks}`}>
                            {currentProject.demo && (<a href={currentProject.demo}>Link Demo</a>)}
                            <a href={currentProject.github}>Link Github</a>
                        </div>
                    </div>
                    <button className={styles.rightButton} onClick={handleNextProject}>
                        <FaAngleRight />
                    </button>
                </div>
            </Wrapper>
        </Container>
    )
}

export default Projects;