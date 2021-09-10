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
    width: 100%;
    height: 36.274vw;
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
        width: 14.875vw;
        height: 14.875vw;
        background: #d0f0d6;
        border-radius: 50%;
        position: absolute;
        right: -22.239vw;
        top: 12.355vw;
    }
    #afterDescubreRectangle {
        width: 36.669vw;
        height: 29.75vw;
        border-radius: 2.422vw;
        background: linear-gradient(#f2f6ff 0%, #f2f6ff 74.3%, #fff 100%);
        box-shadow: 2.471vw 2.471vw 2.471vw rgba(171, 182, 204, 0.2);
        position: absolute;
        transform: rotate(45deg);
        left: -37.064vw;
        bottom: -14.826vw;
    }
`;
