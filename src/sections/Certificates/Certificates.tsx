import { useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import styles from './Certificates.module.css';
import certificates from '../../data/certificates.json';
import Container from "../../components/Container/Container";
import Wrapper from "../../components/Wrapper/Wrapper";
import Certificate from "../../components/Certificate/Certificate";

const Certificates = () => {
    const [index, setIndex] = useState(0);
    const [leftButtonDisabled, setLeftButtonDisabled] = useState(true);
    const [rightButtonDisabled, setRightButtonDisabled] = useState(false);
    const [certificatesToShow, setCertificatesToShow] = useState(3);

    useEffect(() => {
        const update = () => setCertificatesToShow(window.innerWidth <= 1000 ? 1 : 3);
        update();
        window.addEventListener("resize", update);
        return () => window.removeEventListener("resize", update);
    }, []);

    useEffect(() => {
        setLeftButtonDisabled(index === 0);
        setRightButtonDisabled(index + certificatesToShow >= certificates.length);
    }, [index, certificatesToShow]);

    const handleNext = () => index + certificatesToShow < certificates.length && setIndex(i => i + 1);
    const handlePrev = () => index - 1 >= 0 && setIndex(i => i - 1);

    const total = certificates.length;

    return (
        <Container id='certificates'>
            <Wrapper animation="animation-revealing-right" direction="column">
                <h2 className={styles.title}>{'<Certificações/>'}</h2>
                <div className={styles.carousel}>
                    <button disabled={leftButtonDisabled} onClick={handlePrev} aria-label="Certificado anterior">
                        <FaAngleLeft />
                    </button>
                    <div className={styles.certificateList}>
                        {certificates
                            .slice(index, index + certificatesToShow)
                            .map((certificate, idx) => (
                                <Certificate key={idx} certificate={certificate} />
                            ))}
                    </div>
                    <button disabled={rightButtonDisabled} onClick={handleNext} aria-label="Próximo certificado">
                        <FaAngleRight />
                    </button>
                </div>
                <span className={styles.counter} aria-live="polite">
                    {index + 1} – {Math.min(index + certificatesToShow, total)} de {total}
                </span>
            </Wrapper>
        </Container>
    );
};

export default Certificates;
