import styled from "styled-components";

function Salad({ img, text, calories, grases }) {
    return (
        <Container>
            <img alt="salad" src={img} />
            <p>{text}</p>
            <div>
                <div>
                    <p>{calories}</p>
                    <p>calories</p>
                </div>
                <div>
                    <p>{grases}</p>
                    <p>grases</p>
                </div>
            </div>
        </Container>
    );
}

export default Salad;

const Container = styled.div`
    width: 306px;
    height: 440px;
    border-radius: 153px 153px 50px 50px;
    background: linear-gradient(#f2f6ff 0%, #f2f6ff 64.59%, #fff 100%);
    box-shadow: 50px 50px 50px rgba(171, 182, 204, 0.2);
`;
