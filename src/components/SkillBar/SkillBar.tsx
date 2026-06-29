import { useEffect, useRef, useState } from 'react';
import {
    SiJavascript, SiReact, SiTypescript, SiNextdotjs,
    SiHtml5, SiMui, SiRedux, SiTailwindcss,
    SiStyledcomponents, SiPostgresql,
} from 'react-icons/si';
import styles from './SkillBar.module.css';

const ICON_MAP: Record<string, React.ReactNode> = {
    SiJavascript:      <SiJavascript />,
    SiReact:           <SiReact />,
    SiTypescript:      <SiTypescript />,
    SiNextdotjs:       <SiNextdotjs />,
    SiHtml5:           <SiHtml5 />,
    SiMui:             <SiMui />,
    SiRedux:           <SiRedux />,
    SiTailwindcss:     <SiTailwindcss />,
    SiStyledcomponents:<SiStyledcomponents />,
    SiPostgresql:      <SiPostgresql />,
};

interface SkillBarType {
    name: string;
    percent: string;
    icon?: string;
}

const SkillBar = ({ name, percent, icon }: SkillBarType) => {
    const [filled, setFilled] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) { setFilled(true); observer.disconnect(); } },
            { threshold: 0.3 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <div className={styles.skill} ref={ref}>
            <div className={styles.skillTitle}>
                {icon && ICON_MAP[icon] && (
                    <span className={styles.skillIcon}>{ICON_MAP[icon]}</span>
                )}
                <span>{name}</span>
                <span className={styles.percent}>{percent}</span>
            </div>
            <div className={styles.skillBar}>
                <div
                    className={styles.skillProgress}
                    style={{ width: filled ? percent : '0%' }}
                />
            </div>
        </div>
    );
};

export default SkillBar;
