import { useEffect, useState } from "react";
import Container from "../../components/Container/Container";
import styles from './Projects.module.css';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import projects from '../../data/projects.json';
import Wrapper from "../../components/Wrapper/Wrapper";

const ProjectImage = ({ src, alt }: { src: string; alt: string }) => {
    const [loaded, setLoaded] = useState(false);
    return (
        <div className={styles.imageWrapper}>
            {!loaded && <div className={styles.skeleton} />}
            <img
                className={`${styles.aboutImage} ${loaded ? styles.imageVisible : styles.imageHidden}`}
                src={src}
                alt={alt}
                onLoad={() => setLoaded(true)}
            />
        </div>
    );
};

const Projects = () => {
    const [index, setIndex] = useState(0);
    const [projectsToShow, setProjectsToShow] = useState(3);
    const [leftDisabled, setLeftDisabled] = useState(true);
    const [rightDisabled, setRightDisabled] = useState(false);

    useEffect(() => {
        const update = () => setProjectsToShow(window.innerWidth <= 1000 ? 1 : 3);
        update();
        window.addEventListener('resize', update);
        return () => window.removeEventListener('resize', update);
    }, []);

    useEffect(() => {
        setLeftDisabled(index === 0);
        setRightDisabled(index + projectsToShow >= projects.length);
    }, [index, projectsToShow]);

    const handleNext = () => index + projectsToShow < projects.length && setIndex(i => i + 1);
    const handlePrev = () => index > 0 && setIndex(i => i - 1);

    const dotCount = Math.max(1, projects.length - projectsToShow + 1);

    return (
        <Container id='projects'>
            <Wrapper animation="animation-revealing-left" direction="column">
                <h2 className={styles.title}>{'<Projetos/>'}</h2>
                <div className={styles.carousel}>
                    <button className={styles.leftButton} disabled={leftDisabled} onClick={handlePrev} aria-label="Projeto anterior">
                        <FaAngleLeft />
                    </button>
                    <div className={styles.projectList}>
                        {projects.slice(index, index + projectsToShow).map((project, idx) => (
                            <div key={idx} className={styles.project}>
                                <div className={styles.projectDetail}>
                                    <h3>{project.name}</h3>
                                    <ProjectImage src={project.image} alt={project.name} />
                                    <p>{project.description}</p>
                                </div>
                                <div className={styles.projectLinks}>
                                    {project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer">Link Demo</a>}
                                    <a href={project.github} target="_blank" rel="noopener noreferrer">Link Github</a>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className={styles.rightButton} disabled={rightDisabled} onClick={handleNext} aria-label="Próximo projeto">
                        <FaAngleRight />
                    </button>
                </div>
                <div className={styles.dots} aria-hidden="true">
                    {Array.from({ length: dotCount }).map((_, i) => (
                        <button
                            key={i}
                            className={`${styles.dot} ${i === index ? styles.dotActive : ''}`}
                            onClick={() => setIndex(i)}
                            aria-label={`Ir para projeto ${i + 1}`}
                        />
                    ))}
                </div>
            </Wrapper>
        </Container>
    );
};

export default Projects;
