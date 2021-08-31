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
            <Text>
                <hr />
                <p id="title">
                    <span>Descubre </span>
                    <p>que tan fácil crear alimentos saludables</p>
                </p>
                <p id="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin egestas accumsan odio, cursus
                    laoreet mauris porttitor non. Aliquam eu neque nibh. Aenean non pellentesque justo.
                </p>
            </Text>
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

    display: flex;
    flex-direction: column;
    justify-content: center;

    hr {
        width: 3.875rem;
        height: 0rem;
        border: 0.1875rem solid #23233c;
        border-radius: 0.3125rem;
        margin-bottom: 1.5625rem;
        background: transparent;
    }
    div {
    }
    p {
    }
`;
