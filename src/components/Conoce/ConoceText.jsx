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
        width: 3.064vw;
        border: 3px solid #23233c;
        border-radius: 0.247vw;
        margin-bottom: 1.235vw;
        background: transparent;
    }
    #conoceTitle {
        font-weight: bold;
        font-size: 2.471vw;
        line-height: 3.113vw;
        text-align: left;
        color: #23233c;

        span {
            color: #6bc37c;
        }
    }
    #conoceDescription {
        font-weight: normal;
        font-size: 1.235vw;
        line-height: 1.384vw;
        text-align: left;
        color: #7f8da0;
        margin-top: 1.483vw;
    }
`;
