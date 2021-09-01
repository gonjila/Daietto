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
        width: 3.875rem;
        height: 0rem;
        border: 0.1875rem solid #23233c;
        border-radius: 0.3125rem;
        margin-bottom: 1.5625rem;
        background: transparent;
    }
    #conoceTitle {
        font-weight: bold;
        font-size: 3.125rem;
        line-height: 3.9375rem;
        text-align: left;
        color: #23233c;

        span {
            color: #6bc37c;
        }
    }
    #conoceDescription {
        font-weight: normal;
        font-size: 1.5625rem;
        line-height: 1.75rem;
        text-align: left;
        color: #7f8da0;
        margin-top: 1.875rem;
    }
`;
