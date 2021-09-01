import styled from 'styled-components';

import ConoceText from './ConoceText.jsx';
import Conoceimages from './Conoceimages.jsx';

function Conoce() {
    return (
        <Container>
            <ConoceText />
            <Conoceimages />
        </Container>
    );
}

export default Conoce;

const Container = styled.div`
    width: 92.75rem;
    height: 45.875rem;
    background: transparent;
    margin-top: 5.3125rem;

    display: flex;
    justify-content: space-between;
`;
