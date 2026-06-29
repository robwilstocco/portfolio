import Container from "../../components/Container/Container";
import Wrapper from "../../components/Wrapper/Wrapper";
import styles from './About.module.css';

const About = () => {
    return (
        <Container id='about'>
            <Wrapper>
                <div className={`${styles.contentWrapper} ${'animation-revealing-left'}`}>
                    <img className={styles.aboutImage} src="aboutImage.jpg" alt="robert wilson" />
                    <div className={styles.textWrapper}>
                        <h2 className={styles.aboutTitle}>{'< Sobre mim/>'}</h2>
                        <div>
                            <p className={styles.text}>
                                Desenvolvedor Frontend com foco em aplicações web B2B, especializado em React, Next.js e TypeScript.
                                Tenho experiência em arquitetura de aplicações enterprise, dashboards analíticos, controle de acesso
                                granular e integração com APIs REST, sempre com foco em clareza, segurança e escalabilidade.
                            </p>
                            <p className={styles.text}>
                                Formado em Ciência da Computação pela Universidade Cruzeiro do Sul, atuei com alto grau de autonomia
                                técnica em projetos enterprise, participando da definição de arquitetura frontend, autenticação com
                                Azure AD e implementação de padrões BFF via Next.js. Embora atue como full stack quando necessário,
                                mantenho o frontend como foco central da solução.
                            </p>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </Container>
    )
}

export default About;