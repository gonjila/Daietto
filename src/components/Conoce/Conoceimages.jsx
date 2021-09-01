import styled from 'styled-components';

function Conoceimages() {
    return (
        <Container>
            <div id='ConoceMainImages' />
            <div id='nutritionalInformation2'>
                <p className='InformationTitle'>Nutritional information</p>
                <div className='informations'>
                    <div className='textWrapper'>
                        <p className='number different'>243</p>
                        <p className='text'>calorias</p>
                    </div>
                    <div className='textWrapper'>
                        <p className='number'>2,8g</p>
                        <p className='text'>grases</p>
                    </div>
                    <div className='textWrapper'>
                        <p className='number'>45,7g</p>
                        <p className='text'>carbohid</p>
                    </div>
                    <div className='textWrapper'>
                        <p className='number'>9,8g</p>
                        <p className='text'>proteinas</p>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default Conoceimages;

const Container = styled.div`
    width: 44.3125rem;
    height: 42.0625rem;
    background: transparent;
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;

    #ConoceMainImages {
        width: 290px;
        height: 628px;
        background: url(images/detalles.png) center center;
        filter: drop-shadow(0px 3px 99px rgba(42, 90, 123, 0.27));
    }

    #nutritionalInformation2 {
        width: 544px;
        height: 174px;
        border-radius: 10px;
        background: #fff;
        text-align: center;
        box-shadow: 0px 10px 20px rgba(25, 22, 109, 0.07);
        position: absolute;
        left: 0;

        .InformationTitle {
            font-weight: 500;
            font-size: 21px;
            line-height: 39px;
            color: #23233c;
            margin: 20px auto 30px;
        }
        .informations {
            width: 438px;
            height: 57px;
            background: transparent;
            margin: auto;

            display: flex;
            justify-content: space-between;

            .textWrapper {
                display: flex;
                flex-direction: column;
                align-items: center;

                .number {
                    font-weight: bold;
                    font-size: 31px;
                    text-align: left;
                    color: #23233c;
                }
                .different {
                    color: #ee6a6e;
                }
                .text {
                    font-weight: normal;
                    font-size: 11px;
                    text-align: left;
                    color: #9e9e9e;
                }
            }
        }
    }
`;
