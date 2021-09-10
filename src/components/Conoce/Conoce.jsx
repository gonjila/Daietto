import styled from 'styled-components';

import ConoceText from './ConoceText.jsx';
import Conoceimages from './Conoceimages.jsx';

function Conoce() {
    return (
        <Container>
            <ConoceText />
            <Conoceimages />
            <div id='afterConoceRectangle' />
        </Container>
    );
}

export default Conoce;

const Container = styled.div`
    width: 100%;
    height: 36.274vw;
    background: transparent;
    margin-top: 4.201vw;
    z-index: 2;
    position: relative;

    display: flex;
    justify-content: space-between;

    #afterConoceRectangle {
        width: 36.669vw;
        height: 38.448vw;
        border-radius: 49px;
        background: linear-gradient(#f2f6ff 0%, #f2f6ff 74.3%, #fff 100%);
        box-shadow: 2.471vw 2.471vw 2.471vw rgba(171, 182, 204, 0.2);
        transform: rotate(-21deg);
        position: absolute;
        right: -17.297vw;
        bottom: 0;
        z-index: -1;
    }
`;
