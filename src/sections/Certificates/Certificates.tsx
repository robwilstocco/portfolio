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
        const updateCertificatesToShow = () => {
            if (window.innerWidth <= 1000) {
                setCertificatesToShow(1);
            } else {
                setCertificatesToShow(3);
            }
        };

        updateCertificatesToShow();
        window.addEventListener("resize", updateCertificatesToShow);

        return () => window.removeEventListener("resize", updateCertificatesToShow);
    }, []);

    useEffect(() => {
        if (index === 0) {
            setLeftButtonDisabled(true);
        } else if (index + certificatesToShow === certificates.length) {
            setRightButtonDisabled(true);
        } else {
            setLeftButtonDisabled(false);
            setRightButtonDisabled(false);
        }
    }, [index, certificatesToShow]);

    const handleNextCertificate = () => {
        return index + certificatesToShow < certificates.length && setIndex(i => i + 1);
    };

    const handleLastCertificate = () => {
        return index - 1 >= 0 && setIndex(i => i - 1);
    };

    return (
        <Container id='certificates'>
            <Wrapper animation="animation-revealing-right" direction="column">
                <h2 className={styles.title}>{'<Certificações/>'}</h2>
                <div className={styles.carousel}>
                    <button disabled={leftButtonDisabled} onClick={handleLastCertificate}>
                        <FaAngleLeft />
                    </button>
                    <div style={{ display: 'flex', gap: '2rem' }}>
                        {certificates
                            .slice(index, index + certificatesToShow)
                            .map((certificate, idx) => (
                                <Certificate key={idx} certificate={certificate} />
                            ))}
                    </div>
                    <button disabled={rightButtonDisabled} onClick={handleNextCertificate}>
                        <FaAngleRight />
                    </button>
                </div>
            </Wrapper>
        </Container>
    );
};

export default Certificates;
