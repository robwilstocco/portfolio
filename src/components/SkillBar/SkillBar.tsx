import styles from './SkillBar.module.css';

interface SkillBarType {
    name: string,
    percent: string
}

const SkillBar = ({ name, percent }: SkillBarType) => {
    return (
        <div className={styles.skill}>
            <div className={styles.skillTitle}>
                <span>{name}</span>
                <span>{percent}</span>
            </div>
            <div className={styles.skillBar}>
                <div className={styles.skillProgress} style={{ width: percent }} />
            </div>
        </div>
    )
}

export default SkillBar;