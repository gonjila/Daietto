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
                        <FaInstagram style={{ width: '2.125vw', height: '2.125vw', color: '#3a466d' }} />
                        <FiTwitter style={{ width: '2.125vw', height: '2.125vw', color: '#3a466d' }} />
                        <FiFacebook style={{ width: '2.125vw', height: '2.125vw', color: '#3a466d' }} />
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
    height: 16.951vw;
    margin-top: 17.791vw;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    p {
        font-weight: normal;
        font-size: 1.334vw;
        line-height: 2.669vw;
        text-align: left;
        color: #3a466d;
    }
`;

const Text = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    #footerLogo {
        display: flex;
        align-items: center;

        div {
            width: 4.513vw;
            height: 4.237vw;

            img {
                width: 100%;
            }
        }
        p {
            font-weight: bold;
            font-size: 3.015vw;
            text-align: left;
            color: #23233c;
            margin-left: 1.235vw;
        }
    }

    #footerList1 {
        p:nth-of-type(1) {
            font-weight: bold;
            font-size: 1.68vw;
            line-height: 2.372vw;
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
            font-size: 1.581vw;
            line-height: 1.631vw;
            text-align: left;
            color: #23233c;
            margin-top: 3.706vw;
        }
    }
`;

const License = styled.div`
    font-weight: normal;
    font-size: 1.483vw;
    line-height: 2.965vw;
    text-align: left;
    color: #3a466d;
`;
