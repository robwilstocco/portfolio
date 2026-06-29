import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import Container from '../../components/Container/Container';
import Wrapper from '../../components/Wrapper/Wrapper';
import styles from './Contact.module.css';

const contactItems = [
    {
        icon: <FaEnvelope />,
        label: 'E-mail',
        value: 'robwil1995@gmail.com',
        href: 'mailto:robwil1995@gmail.com',
    },
    {
        icon: <FaLinkedin />,
        label: 'LinkedIn',
        value: '/in/robwilstocco',
        href: 'https://www.linkedin.com/in/robwilstocco',
    },
    {
        icon: <FaGithub />,
        label: 'GitHub',
        value: 'robwilstocco',
        href: 'https://github.com/robwilstocco',
    },
    {
        icon: <FaPhone />,
        label: 'Telefone',
        value: '+55 (11) 98167-2561',
        href: 'tel:+5511981672561',
    },
];

const Contact = () => {
    return (
        <Container id='contact'>
            <Wrapper animation="animation-revealing-left" direction="column">
                <h2 className={styles.title}>{'<Contato/>'}</h2>
                <p className={styles.subtitle}>Vamos conversar? Estou disponível para novas oportunidades.</p>
                <div className={styles.grid}>
                    {contactItems.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            className={styles.card}
                            target={item.href.startsWith('http') ? '_blank' : undefined}
                            rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            aria-label={`${item.label}: ${item.value}`}
                        >
                            <span className={styles.icon}>{item.icon}</span>
                            <span className={styles.cardLabel}>{item.label}</span>
                            <span className={styles.cardValue}>{item.value}</span>
                        </a>
                    ))}
                </div>
            </Wrapper>
        </Container>
    );
};

export default Contact;
