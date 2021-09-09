import styled from 'styled-components';
import PicturesComponent from './PicturesComponent.jsx';
import TextComponent from './TextComponent.jsx';

const Deliciosas = () => (
    <Container>
        <TextComponent />
        <PicturesComponent />
        <div id='deliciosasRectangle' />
    </Container>
);

export default Deliciosas;

const Container = styled.div`
    height: auto;
    margin-bottom: 30px;

    display: flex;
    justify-content: space-between;

    #deliciosasRectangle {
        width: 35vw;
        height: 602px;
        /* width: 742px; */
        border-radius: 49px;
        background: linear-gradient(#f2f6ff 0%, #f2f6ff 74.3%, #fff 100%);
        box-shadow: 50px 50px 50px rgba(171, 182, 204, 0.2);
        transform: rotate(37deg);
        position: absolute;
        top: 0px;
        right: 0px;
        right: -600px;
    }
`;
