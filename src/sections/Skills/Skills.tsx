import Container from "../../components/Container/Container";
import SkillBar from "../../components/SkillBar/SkillBar";
import Wrapper from "../../components/Wrapper/Wrapper";
import styles from './Skills.module.css';
import skills from '../../data/skills.json';

const Skills = () => {
    return (
        <Container id='skills'>
            <Wrapper animation="animation-revealing-left" direction="column">
                <h1 className={styles.title}>{`<${'Skills'}/>`}</h1>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '2rem' }}>
                    {skills.map((skill, index) => (
                        <SkillBar key={index} name={skill.name} percent={skill.percent} />
                    ))}
                </div>
            </Wrapper>
        </Container>
    )
}

export default Skills;