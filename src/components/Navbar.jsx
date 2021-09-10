import styled from 'styled-components';

const Navbar = () => (
    <Container>
        <div id='logo'>
            <img alt='logo' src='images/ProjectLogo.svg' />
            <p>Daietto</p>
        </div>

        <div id='menu'>
            <p>Nosotros</p>
            <p>Menu</p>
            <p>Contacto</p>
        </div>

        <div id='autorisation'>
            <p>Login</p>
            <p>Register</p>
        </div>
    </Container>
);

export default Navbar;

const Container = styled.div`
    width: 100%;
    height: 3.34vw;
    background: transparent;
    margin: 2.966vw 0 8.156vw;

    display: flex;
    justify-content: space-between;
    align-items: center;

    #logo {
        display: flex;
        align-items: center;
        cursor: pointer;

        img {
            width: 3.452vw;
            height: 3.241vw;
        }
        p {
            font-weight: bold;
            font-size: 2.323vw;
            color: #23233c;
            margin-left: 1.087vw;
        }
    }

    #menu {
        display: flex;
        align-items: center;

        p {
            font-weight: 500;
            font-size: 1.236vw;
            color: #7f8da0;
            cursor: pointer;

            &:not(:last-child) {
                margin-right: 3.213vw;
            }
        }
    }

    #autorisation {
        display: flex;
        align-items: center;

        p {
            font-weight: bold;
            font-size: 1.236vw;
            color: #23233c;
            cursor: pointer;

            &:last-child {
                color: #6bc37c;
            }

            &:not(:last-child) {
                margin-right: 2.472vw;
            }
        }
    }
`;
