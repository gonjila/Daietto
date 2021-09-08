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
        margin-bottom: 25px;
        background: transparent;
    }

    #first {
        font-weight: normal;
        font-size: 30px;
        color: #7f8da0;
        margin-bottom: 30px;
    }
    #second {
        font-weight: bold;
        font-size: 70px;
        line-height: 63px;
        color: #23233c;
        margin-bottom: 25px;
        span {
            color: #6bc37c;
        }
    }
    #third {
        font-weight: normal;
        font-size: 25px;
        line-height: 28px;
        color: #7f8da0;
        margin-bottom: 45px;
    }

    #firstDiv {
        margin-bottom: 165px;
        display: flex;
        align-items: center;

        button {
            width: 276px;
            height: 67px;
            font-family: 'Google Sans';
            font-weight: bold;
            font-size: 20px;
            text-align: center;
            color: #fff;
            border-radius: 10px;
            background: #23233c;
            cursor: pointer;
        }
        img {
            width: 31.3904px;
            height: 38.2704px;
            background: transparent;
            cursor: pointer;

            &:first-of-type {
                margin: 0 45px 0 90px;
            }
        }
    }
    #secondDiv {
        font-weight: normal;
        font-size: 25px;
        line-height: 28px;

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
            margin: 0 15px;
        }
    }
`;
