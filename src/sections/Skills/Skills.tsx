import Container from "../../components/Container/Container";

const Skills = () => {
    return (
        <Container id='skills'>
            <div className='animation-revealing-left' style={{ display: 'flex', gap: '3rem' }}>
                <img src="https://place-hold.it/300x300" alt="robert wilson" style={{ border: '5px solid black', borderRadius: '50%', width: '250px', height: '250px' }} />
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', gap: '1rem', maxWidth: '45vw' }}>
                    <h2 style={{ color: '#2BBBF5' }}>Skills</h2>
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

export default Skills;