import { useState } from 'react';
import { FaAngleDown } from 'react-icons/fa';
import Container from "../../components/Container/Container";
import Wrapper from "../../components/Wrapper/Wrapper";
import styles from './Experiences.module.css';

const experiences = [
    {
        period: 'Frontend Developer / Full Stack – março/2026 até o momento',
        company: 'Aços Vital',
        description: 'Desenvolvimento de aplicação B2B enterprise para gestão de comissões, faturamento e controle de acessos. Arquitetura frontend com Next.js (App Router) e TypeScript, implementação de BFF via API Routes, sistema de permissões granular, integração com Azure AD + NextAuth e dashboards analíticos de vendas e faturamento.',
    },
    {
        period: 'Desenvolvedor Fullstack Pleno – setembro/2022 a julho/2023',
        company: 'Triad Integration',
        description: 'Atuação predominante como Frontend Developer com React, TypeScript e Redux na modernização de sistemas legados em Flash. Adaptação do sistema para diferentes clientes (Oi e TIM), ajustando layouts, paletas de cores, regras de negócio e endpoints de APIs REST, com interfaces responsivas usando Material UI e Styled Components.',
    },
    {
        period: 'Desenvolvedor Fullstack Júnior – agosto/2021 a agosto/2022',
        company: 'Triad Integration',
        description: 'Desenvolvimento Frontend com React e JavaScript na migração de sistemas legados em Flash para aplicações web modernas. Implementação de componentes reutilizáveis, integração com APIs REST via Axios e construção de interfaces com Material UI.',
    },
    {
        period: 'Analista de Sistemas Júnior – julho/2019 a julho/2021',
        company: 'Triad Integration',
        description: 'Análise de dados financeiros com Oracle SQL em sistemas de cobilling de operadoras de telecomunicações (Vivo e Oi). Atendimento a chamados técnicos, investigação de problemas sistêmicos e validação de dados.',
    },
];

const Experiences = () => {
    const [openIndex, setOpenIndex] = useState<number>(0);

    const toggle = (i: number) => setOpenIndex(prev => (prev === i ? -1 : i));

    return (
        <Container id='experiences'>
            <Wrapper animation="animation-revealing-right" direction="column">
                <h2 className={styles.title}>{'<Experiências/>'}</h2>
                <div className={styles.timeline}>
                    <ul>
                        {experiences.map((exp, i) => (
                            <li key={i} className={openIndex === i ? styles.open : ''}>
                                <button
                                    className={styles.accordionHeader}
                                    onClick={() => toggle(i)}
                                    aria-expanded={openIndex === i}
                                >
                                    <span>{exp.period}</span>
                                    <FaAngleDown className={`${styles.chevron} ${openIndex === i ? styles.chevronOpen : ''}`} />
                                </button>
                                <div className={`${styles.content} ${openIndex === i ? styles.contentOpen : ''}`}>
                                    <div>
                                        <h3>{exp.company}</h3>
                                        <p>{exp.description}</p>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </Wrapper>
        </Container>
    );
};

export default Experiences;
