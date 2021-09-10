import styled from 'styled-components';

function DescubreText() {
    return (
        <Text>
            <hr />
            <div id='descubreTitle'>
                <p>
                    <span>Descubre </span> que tan fácil crear alimentos saludables
                </p>
            </div>
            <p id='descubreDescription'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin egestas accumsan odio, cursus
                laoreet mauris porttitor non. Aliquam eu neque nibh. Aenean non pellentesque justo.
            </p>
        </Text>
    );
}

export default DescubreText;

const Text = styled.div`
    width: 48%;

    display: flex;
    flex-direction: column;
    justify-content: center;

    hr {
        width: 3.064vw;
        border: 3px solid #23233c;
        border-radius: 5px;
        margin-bottom: 1.235vw;
        background: transparent;
    }
    #descubreTitle {
        font-weight: bold;
        font-size: 2.471vw;
        line-height: 3.113vw;
        text-align: left;
        color: #23233c;

        span {
            color: #6bc37c;
        }
    }
    #descubreDescription {
        font-weight: normal;
        font-size: 1.235vw;
        line-height: 1.384vw;
        text-align: left;
        color: #7f8da0;
        margin-top: 3.954vw;
    }
`;
