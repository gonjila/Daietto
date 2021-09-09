import styled from 'styled-components';

function ConoceText() {
    return (
        <Text>
            <hr />
            <p id='conoceTitle'>
                <span>Conoce</span> el detalle de los alimentos que consumes
            </p>
            <p id='conoceDescription'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin egestas accumsan odio, cursus
                laoreet mauris porttitor non. Aliquam eu neque nibh. Aenean non pellentesque justo.
            </p>
        </Text>
    );
}

export default ConoceText;

const Text = styled.div`
    width: 48%;

    display: flex;
    flex-direction: column;
    justify-content: center;

    hr {
        width: 62px;
        border: 3px solid #23233c;
        border-radius: 5px;
        margin-bottom: 25px;
        background: transparent;
    }
    #conoceTitle {
        font-weight: bold;
        font-size: 50px;
        line-height: 63px;
        text-align: left;
        color: #23233c;

        span {
            color: #6bc37c;
        }
    }
    #conoceDescription {
        font-weight: normal;
        font-size: 25px;
        line-height: 28px;
        text-align: left;
        color: #7f8da0;
        margin-top: 30px;
    }
`;
