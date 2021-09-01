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
        </Container>
    );
}

export default Descubre;

const Container = styled.div`
    width: 92.75rem;
    height: 45.875rem;
    background: transparent;

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
`;
