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
            <div id='circleImageWrapper'>
                <div>
                    <img alt='არაჟანი' src='images/conoce-circle-image1.png' />
                </div>
                <div>
                    <img alt='კივი' src='images/conoce-circle-image2.png' />
                </div>
                <div>
                    <img alt='მოცვი' src='images/conoce-circle-image3.png' />
                </div>
                <div>
                    <img alt='ბალი' src='images/conoce-circle-image4.png' />
                </div>
            </div>
        </Container>
    );
}

export default Conoceimages;

const Container = styled.div`
    width: 35.038vw;
    height: 33.259vw;
    background: transparent;
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;

    #ConoceMainImages {
        width: 14.332vw;
        height: 31.035vw;
        background: url(images/detalles.png) center center;
        background-size: 200%;
        filter: drop-shadow(0px 0.148vw 4.893vw rgba(42, 90, 123, 0.27));
        transform: translateX(2.224vw);
    }

    #nutritionalInformation2 {
        width: 26.884vw;
        height: 8.599vw;
        border-radius: 0.494vw;
        background: #fff;
        text-align: center;
        box-shadow: 0px 0.494vw 0.988vw rgba(25, 22, 109, 0.07);
        transform: translateY(-2.471vw);
        position: absolute;
        left: 0;

        .InformationTitle {
            font-weight: 500;
            font-size: 1.038vw;
            line-height: 1.927vw;
            color: #23233c;
            margin: 0.988vw auto 1.483vw;
        }
        .informations {
            width: 21.646vw;
            height: 2.817vw;
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
                    font-size: 1.532vw;
                    text-align: left;
                    color: #23233c;
                }
                .different {
                    color: #ee6a6e;
                }
                .text {
                    font-weight: normal;
                    font-size: 0.544vw;
                    text-align: left;
                    color: #9e9e9e;
                }
            }
        }
    }

    #circleImageWrapper {
        width: 100%;
        position: absolute;
        bottom: -1.483vw;

        display: flex;
        justify-content: space-around;

        div {
            width: 5.93vw;
            height: 5.93vw;
            filter: drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.04));

            img {
                width: 90%;
            }
        }
    }
`;
