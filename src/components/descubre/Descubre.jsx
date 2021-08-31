import styled from "styled-components";
import Salad from "./Salad";

function Descubre() {
    return (
        <Container>
            <div id="salads">
                <Salad
                    id="firstSalad"
                    img="images/salad1.png"
                    text="Ensalada mixta"
                    calories="243"
                    grases="2,8g"
                />
                <Salad
                    id="secondSalad"
                    img="images/salad1.png"
                    text="Ensalada con pollo"
                    calories="543"
                    grases="2,8g"
                />
            </div>
            <Text></Text>
        </Container>
    );
}

export default Descubre;

const Container = styled.div`
    width: 1484px;
    height: 734px;
    background: transparent;

    display: flex;

    #salads {
        width: 50%;

        display: flex;
        justify-content: space-between;
        align-items: center;

        #secondSalad {
            align-self: flex-end;
        }
    }
`;

const Text = styled.div`
    width: 50%;
`;
