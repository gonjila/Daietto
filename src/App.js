import styled from 'styled-components';

import Navbar from './components/Navbar.jsx';
import Conoce from './components/Conoce/Conoce.jsx';
import Deliciosas from './components/deliciosas/Deliciosas.jsx';
import Descubre from './components/descubre/Descubre.jsx';
import Footer from './components/Footer.jsx';

function App() {
    return (
        <Container>
            <Navbar />
            <Deliciosas />
            <Descubre />
            <Conoce />
            <Footer />
        </Container>
    );
}

export default App;

const Container = styled.div`
    width: 100vw - 16px;
    padding: 0 8%;
    background: #f2f6ff;
    overflow: hidden;
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;
`;
