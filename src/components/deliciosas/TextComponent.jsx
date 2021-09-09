import styled from 'styled-components';

const TextComponent = () => (
    <Text>
        <hr />
        <p id='first'>La app de dieta, perfecta para ti</p>
        <p id='second'>
            <span>Deliciosas</span> <br />
            recetas de comida saludable
        </p>
        <p id='third'>
            Encuentra las mejores recetas para llevar tu dieta a otro nivel, sin necesidad de afectar su salud
        </p>

        <div id='firstDiv'>
            <button>Descargar app</button>
            <img alt='Apple Logo' src='images/apple-logo.svg' />
            <img alt='Android Logo' src='images/android-logo.svg' />
        </div>

        <div id='secondDiv'>
            <a href='http://facebook.com/' target='_blank' rel='noreferrer'>
                Facebook
            </a>
            <p className='slash'>/</p>
            <a href='http://instagram.com/' target='_blank' rel='noreferrer'>
                <span>Instagram</span>
            </a>
            <p className='slash'>/</p>
            <a href='http://twitter.com/' target='_blank' rel='noreferrer'>
                Twitter
            </a>
        </div>
    </Text>
);

export default TextComponent;

const Text = styled.div`
    width: 40%;
    margin-right: 10%;

    hr {
        width: 62px;
        height: 0px;
        border: 3px solid #23233c;
        border-radius: 5px;
        margin-bottom: 1.236vw;
        background: transparent;
    }

    #first {
        font-weight: normal;
        font-size: 1.483vw;
        color: #7f8da0;
        margin-bottom: 1.483vw;
    }
    #second {
        font-weight: bold;
        font-size: 3.46vw;
        line-height: 3.114vw;
        color: #23233c;
        margin-bottom: 1.236vw;
        span {
            color: #6bc37c;
        }
    }
    #third {
        font-weight: normal;
        font-size: 1.236vw;
        line-height: 1.384vw;
        color: #7f8da0;
        margin-bottom: 45px;
    }

    #firstDiv {
        margin-bottom: 8.156vw;
        display: flex;
        align-items: center;

        button {
            width: 13.643vw;
            height: 3.312vw;
            font-weight: bold;
            font-size: 0.989vw;
            text-align: center;
            color: #fff;
            border-radius: 10px;
            background: #23233c;
            cursor: pointer;
        }
        img {
            width: 1.552vw;
            height: 1.892vw;
            background: transparent;
            cursor: pointer;

            &:first-of-type {
                margin: 0 2.224vw 0 4.449vw;
            }
        }
    }
    #secondDiv {
        font-weight: normal;
        font-size: 1.236vw;
        line-height: 1.384vw;

        display: flex;
        align-items: center;

        a {
            text-decoration: none;
            color: #7f8da0;
        }
        span {
            color: #6bc37c;
        }
        .slash {
            color: #7f8da0;
            font-weight: 600;
            margin: 0 0.741vw;
        }
    }
`;
