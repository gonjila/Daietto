/* eslint-disable import/extensions */
import styled from 'styled-components';
import { FiFacebook, FiTwitter } from 'react-icons/fi';
import { FaInstagram } from 'react-icons/fa';

function Footer() {
    return (
        <Container>
            <Text>
                <div id='footerLogo'>
                    <div>
                        <img alt='logo' src='images/ProjectLogo.svg' />
                    </div>
                    <p>Daietto</p>
                </div>
                <div id='footerList1'>
                    <p>Daietto</p>
                    <p>Beneficios</p>
                    <p>Crédito Contacto</p>
                </div>
                <div>
                    <p>Nosotros</p>
                    <p>Términos y condiciones</p>
                    <p>Aviso de privacidad</p>
                </div>
                <div id='footerIconsWrapper'>
                    <div>
                        <FaInstagram style={{ width: '43px', height: '43px', color: '#3a466d' }} />
                        <FiTwitter style={{ width: '43px', height: '43px', color: '#3a466d' }} />
                        <FiFacebook style={{ width: '43px', height: '43px', color: '#3a466d' }} />
                    </div>
                    <p>Tu app de dieta</p>
                </div>
            </Text>
            <License>© 2021 Daietto Derechos Reservados.</License>
        </Container>
    );
}

export default Footer;

const Container = styled.div`
    width: 100%;
    height: 343px;
    margin-top: 360px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    p {
        font-weight: normal;
        font-size: 27px;
        line-height: 54px;
        text-align: left;
        color: #3a466d;
    }
`;

const Text = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: flex-start;

    #footerLogo {
        display: flex;
        align-items: center;

        div {
            width: 91.32px;
            height: 85.73px;

            img {
            }
        }
        p {
            font-weight: bold;
            font-size: 61px;
            text-align: left;
            color: #23233c;
            margin-left: 25px;
        }
    }

    #footerList1 {
        p:nth-of-type(1) {
            font-weight: bold;
            font-size: 34px;
            line-height: 48px;
            text-align: left;
            color: #6cc57c;
        }
    }

    #footerIconsWrapper {
        div {
            display: flex;
            justify-content: space-between;
        }
        p {
            font-weight: bold;
            font-size: 32px;
            line-height: 33px;
            text-align: left;
            color: #23233c;
            margin-top: 75px;
        }
    }
`;

const License = styled.div`
    font-weight: normal;
    font-size: 30px;
    line-height: 60px;
    text-align: left;
    color: #3a466d;
`;
