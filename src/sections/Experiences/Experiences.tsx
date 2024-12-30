import Container from "../../components/Container/Container";
import Wrapper from "../../components/Wrapper/Wrapper";
import styles from './Experiences.module.css';

const Experiences = () => {
    return (
        <Container id='experiences'>
            <Wrapper animation="animation-revealing-right" direction="column">
                <h2 className={styles.title}>{'<Experiências/>'}</h2>
                <div className={styles.timeline}>
                    <ul>
                        <li>
                            <span>Desenvolvedor Frontend Pleno - Setembro/2022 a Agosto/2023</span>
                            <div className={styles.content}>
                                <h3>Triad Systems</h3>
                                <p>
                                    Atuei no desenvolvimento, correções de bugs e implementação de melhorias dos sistemas revitalizados, além de acompanhar o deploy das aplicações.
                                </p>
                            </div>
                        </li>
                        <li>
                            <span> Desenvolvedor Frontend Junior - Julho/2019 a Agosto/2022</span>
                            <div className={styles.content}>
                                <h3>Triad Systems</h3>
                                <p>
                                    Contribui ativamente na revitalização de sistemas desenvolvidos em Flash (ActionScript 3.0) que foi descontinuado.
                                    Modernizamos os novos sistema utilizando React.js, Typescript, Styled Components e Material UI,
                                    gerenciamos os estados com Redux e fizemos a integração com o backend em Java.
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </Wrapper>
        </Container>
    )
}

export default Experiences;