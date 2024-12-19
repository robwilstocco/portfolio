import { useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import styles from './Certificacoes.module.css';
import certificates from '../../data/certificates.json';
import Container from "../../components/Container/Container";
import Wrapper from "../../components/Wrapper/Wrapper";
import Certificate from "../../components/Certificate/Certificate";

const Certificacoes = () => {
    const [index, setIndex] = useState(0);
    const [leftButtonDisabled, setLeftButtonDisabled] = useState(true);
    const [rightButtonDisabled, setRightButtonDisabled] = useState(false);

    const first = certificates[index];
    const second = certificates[index + 1];
    const third = certificates[index + 2];

    useEffect(() => {
        if (index === 0) {
            setLeftButtonDisabled(true);
        } else if (index + 3 === certificates.length) {
            setRightButtonDisabled(true);
        } else {
            setLeftButtonDisabled(false);
            setRightButtonDisabled(false);
        }
    }, [index]);

    const handleNextCertificate = () => {
        return index + 2 < certificates.length - 1 && setIndex(i => i + 1);
    };

    const handleLastCertificate = () => {
        return index - 1 >= 0 && setIndex(i => i - 1);
    };

    return (
        <Container id='certificacoes'>
            <Wrapper animation="animation-revealing-right" direction="column">
                <h2 className={styles.title}>{'<Certificações/>'}</h2>
                <div className={styles.carousel}>
                    <button disabled={leftButtonDisabled} onClick={handleLastCertificate}><FaAngleLeft /></button>
                    <div style={{ display: 'flex', gap: '2rem' }}>
                        <Certificate certificate={first} />
                        <Certificate certificate={second} />
                        <Certificate certificate={third} />
                    </div>
                    <button disabled={rightButtonDisabled} onClick={handleNextCertificate}><FaAngleRight /></button>
                </div>
            </Wrapper>
        </Container>
    )
}

export default Certificacoes;