import { useEffect, useState } from 'react';
import { FaAngleUp } from 'react-icons/fa';
import styles from './ScrollToTop.module.css';

const ScrollToTop = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => setVisible(window.scrollY > 400);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    if (!visible) return null;

    return (
        <button
            className={styles.button}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Voltar ao topo"
        >
            <FaAngleUp />
        </button>
    );
};

export default ScrollToTop;
