import Container from "../../components/Container/Container";

const Certificacoes = () => {
    return (
        <Container id='certificacoes'>
            <div className="animation-revealing-right" style={{ display: 'flex', gap: '3rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', gap: '1rem', maxWidth: '45vw' }}>
                    <h2 style={{ color: '#2BBBF5' }}>Certificações</h2>
                    <p style={{ color: 'white' }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            </div>
        </Container>
    )
}

export default Certificacoes;