import styled from "styled-components";
import Deliciosas from "./components/deliciosas/Deliciosas";

import Navbar from "./components/Navbar";

function App() {
    return (
        <Container>
            <Navbar />
            <Deliciosas />
        </Container>
    );
}

export default App;

const Container = styled.div`
    width: 120rem;
    height: 209.1875rem;
    padding: 0 10.625rem;
    background: #f2f6ff;
    overflow: hidden;

    display: flex;
    flex-direction: column;
`;
