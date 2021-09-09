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
    width: 1584px;
    height: 67.5696px;
    background: transparent;
    margin: 60px 0 165px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    #logo {
        display: flex;
        align-items: center;
        cursor: pointer;

        img {
            width: 69.84px;
            height: 65.57px;
        }
        p {
            font-weight: bold;
            font-size: 47px;
            color: #23233c;
            margin-left: 22px;
        }
    }

    #menu {
        display: flex;
        align-items: center;

        p {
            font-weight: 500;
            font-size: 1.5625rem;
            color: #7f8da0;
            cursor: pointer;

            &:not(:last-child) {
                margin-right: 65px;
            }
        }
    }

    #autorisation {
        display: flex;
        align-items: center;

        p {
            font-weight: bold;
            font-size: 25px;
            color: #23233c;
            cursor: pointer;

            &:last-child {
                color: #6bc37c;
            }

            &:not(:last-child) {
                margin-right: 50px;
            }
        }
    }
`;
