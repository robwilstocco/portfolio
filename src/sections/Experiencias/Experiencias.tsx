import Container from "../../components/Container/Container";
import Wrapper from "../../components/Wrapper/Wrapper";
import styles from './Experiencias.module.css';
import './test.css';

const Experiencias = () => {
    return (
        <Container id='experiencia'>
            <Wrapper animation="animation-revealing-right" direction="column">
                <h2 className={styles.title}>{'<Experiências/>'}</h2>
                <div className="timeline">
                    <ul>
                        <li>
                            <span>Desenvolvedor Frontend Pleno - Setembro/2022 a Agosto/2023</span>
                            <div className="content">
                                <h3>Triad Systems</h3>
                                <p>
                                    Trabalhei na manutenção dos projetos revitalizados e na implementação de projetos
                                    internos utilizando Node.js, PostgreSQL, React.js e Typescript.
                                </p>
                            </div>
                        </li>
                        <li>
                            <span> Desenvolvedor Frontend Junior - Julho/2019 a Agosto/2022</span>
                            <div className="content">
                                <h3>Triad Systems</h3>
                                <p>
                                    Trabalhei na parte do frontend na revitalização de sistemas, onde modernizamos suas
                                    interfaces e funcionalidades utilizando React.js, Typescript, Styled Components,
                                    Redux.js.
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </Wrapper>
        </Container>
    )
}

export default Experiencias;