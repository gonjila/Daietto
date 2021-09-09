import styled from 'styled-components';

import Salad from './Salad.jsx';
import DescubreText from './DescubreText.jsx';

function Descubre() {
    return (
        <Container>
            <div id='salads'>
                <Salad
                    id='firstSalad'
                    img='images/salad1.png'
                    text='Ensalada mixta'
                    calories='243'
                    grases='2,8g'
                />
                <Salad
                    id='secondSalad'
                    img='images/salad1.png'
                    text='Ensalada con pollo'
                    calories='543'
                    grases='2,8g'
                />
            </div>
            <DescubreText />
            <div id='afterDescubreCicle' />
            <div id='afterDescubreRectangle' />
        </Container>
    );
}

export default Descubre;

const Container = styled.div`
    width: 1484px;
    height: 734px;
    background: transparent;
    position: relative;

    display: flex;
    justify-content: space-between;

    #salads {
        width: 47%;

        display: flex;
        justify-content: space-between;
        align-items: center;

        #secondSalad {
            align-self: flex-end;
        }
    }

    #afterDescubreCicle {
        width: 301px;
        height: 301px;
        background: #d0f0d6;
        border-radius: 50%;
        position: absolute;
        right: -450px;
        top: 250px;
    }
    #afterDescubreRectangle {
        width: 742px;
        height: 602px;
        border-radius: 49px;
        background: linear-gradient(#f2f6ff 0%, #f2f6ff 74.3%, #fff 100%);
        box-shadow: 50px 50px 50px rgba(171, 182, 204, 0.2);
        position: absolute;
        transform: rotate(45deg);
        left: -750px;
        bottom: -300px;
    }
`;
