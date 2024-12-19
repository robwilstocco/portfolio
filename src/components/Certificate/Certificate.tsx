import styles from './Certificate.module.css'

interface CertificateType {
    certificate: {
        title: string,
        school: string,
        duration: string,
        date: string,
        url: string
    },
}

const Certificate = ({ certificate }: CertificateType) => {
    return (
        <div className={`${styles.certificate}`}>
            <h3 className={styles.certicateTitle}>{certificate.title}</h3>
            <div className={styles.details}>
                <div className={styles.info}>
                    <span>Instituição: </span>
                    <p>{certificate.school}</p>
                </div>
                <div className={styles.info}>
                    <span>Duração: </span>
                    <p>{certificate.duration}</p>
                </div>
                <div className={styles.info}>
                    <span>Conclusão: </span>
                    <p>{certificate.date}</p>
                </div>
                <div className={styles.info}>
                    <span>Certificado: </span>
                    <a href={certificate.url}>Clique aqui</a>
                </div>
            </div>
        </div>
    )
}

export default Certificate;