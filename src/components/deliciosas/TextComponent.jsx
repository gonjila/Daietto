import styled from "styled-components";

const TextComponent = () => {
    return (
        <Text>
            <hr />
            <p id="first">La app de dieta, perfecta para ti</p>
            <p id="second">
                <span>Deliciosas</span> <br />
                recetas de comida saludable
            </p>
            <p id="third">
                Encuentra las mejores recetas para llevar tu dieta a otro nivel, sin necesidad de afectar su salud
            </p>

            <div id="firstDiv">
                <button>Descargar app</button>
                <img alt="Apple Logo" src="images/apple-logo.svg" />
                <img alt="Android Logo" src="images/android-logo.svg" />
            </div>

            <div id="secondDiv">
                <a href="http://facebook.com/" target="_blank" rel="noreferrer">
                    Facebook
                </a>
                <p className="slash">/</p>
                <a href="http://instagram.com/" target="_blank" rel="noreferrer">
                    <span>Instagram</span>
                </a>
                <p className="slash">/</p>
                <a href="http://twitter.com/" target="_blank" rel="noreferrer">
                    Twitter
                </a>
            </div>
        </Text>
    );
};

export default TextComponent;

const Text = styled.div`
    width: 40%;
    margin-right: 10%;

    hr {
        width: 3.875rem;
        height: 0rem;
        border: 0.1875rem solid #23233c;
        border-radius: 0.3125rem;
        margin-bottom: 1.5625rem;
        background: transparent;
    }

    #first {
        font-weight: normal;
        font-size: 1.875rem;
        color: #7f8da0;
        margin-bottom: 1.875rem;
    }
    #second {
        font-weight: bold;
        font-size: 4.375rem;
        line-height: 3.9375rem;
        color: #23233c;
        margin-bottom: 1.5625rem;
        span {
            color: #6bc37c;
        }
    }
    #third {
        font-weight: normal;
        font-size: 1.5625rem;
        line-height: 1.75rem;
        color: #7f8da0;
        margin-bottom: 2.8125rem;
    }

    #firstDiv {
        margin-bottom: 10.3125rem;
        display: flex;
        align-items: center;

        button {
            width: 17.25rem;
            height: 4.1875rem;
            font-family: "Google Sans";
            font-weight: bold;
            font-size: 1.25rem;
            text-align: center;
            color: #fff;
            border-radius: 0.625rem;
            background: #23233c;
        }
        img {
            width: 1.9619rem;
            height: 2.3919rem;
            background: transparent;

            &:first-of-type {
                margin: 0 2.8125rem 0 5.625rem;
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
