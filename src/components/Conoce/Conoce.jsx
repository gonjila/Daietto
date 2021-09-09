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
    width: 1484px;
    height: 734px;
    background: transparent;
    margin-top: 85px;
    z-index: 2;
    position: relative;

    display: flex;
    justify-content: space-between;

    #afterConoceRectangle {
        width: 742px;
        height: 778px;
        border-radius: 49px;
        background: linear-gradient(#f2f6ff 0%, #f2f6ff 74.3%, #fff 100%);
        box-shadow: 50px 50px 50px rgba(171, 182, 204, 0.2);
        transform: rotate(-21deg);
        position: absolute;
        right: -350px;
        bottom: 0;
        z-index: -1;
    }
`;
