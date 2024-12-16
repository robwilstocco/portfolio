import Container from "../../components/Container/Container";
import styles from './Certificacoes.module.css';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import certificates from '../../data/certificates.json';
import { useState } from "react";

const Certificacoes = () => {
    const [index, setIndex] = useState(0);
    const currentCertificate = certificates[index];
    const [animationClass, setAnimationClass] = useState("");

    const handleNextCertificate = () => {
        setAnimationClass("animation-scale");
        setTimeout(() => {
            setIndex(i => (i < certificates.length - 1 ? i + 1 : 0));
            setAnimationClass("");
        }, 500);
    };

    const handleLastCertificate = () => {
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
                    <button className={styles.leftButton} onClick={handleLastCertificate

                    }>
                        <FaAngleLeft />
                    </button>
                    <div className={`${styles.certificate} ${animationClass}`}>
                        <h3 className={styles.certicateTitle}>{currentCertificate
                            .title}</h3>
                        <div className={styles.details}>
                            <div className={styles.info}>
                                <span>Instituição: </span>
                                <p>{currentCertificate
                                    .school}</p>
                            </div>
                            <div className={styles.info}>
                                <span>Duração: </span>
                                <p>{currentCertificate
                                    .duration}</p>
                            </div>
                            <div className={styles.info}>
                                <span>Conclusão: </span>
                                <p>{currentCertificate
                                    .date}</p>
                            </div>
                            <div className={styles.info}>
                                <span>Certificado: </span>
                                <a href={currentCertificate
                                    .url}>Clique aqui</a>
                            </div>
                        </div>
                    </div>
                    <button className={styles.rightButton} onClick={handleNextCertificate

                    }>
                        <FaAngleRight />
                    </button>
                </div>
            </div>
        </Container>
    )
}

export default Certificacoes;