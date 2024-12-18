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
                            <span>3rd January 2020</span>
                            <div className="content">
                                <h3>What Is Lorem Ipsum?</h3>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                                </p>
                            </div>
                        </li>
                        <li>
                            <span>21st Jun 2019</span>
                            <div className="content">
                                <h3>What Is Lorem Ipsum?</h3>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                </p>
                            </div>
                        </li>
                        <li>
                            <span>15th April 2018</span>
                            <div className="content">
                                <h3>What Is Lorem Ipsum?</h3>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
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