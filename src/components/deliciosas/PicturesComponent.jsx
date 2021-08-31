import styled from 'styled-components';
// eslint-disable-next-line import/extensions
import { HiArrowRight } from 'react-icons/hi';

const PicturesComponent = () => (
    <Pictures>
        <div id='loginScreenWrapper'>
            <div id='loginScreen' />
        </div>

        <div id='information'>
            <div id='nutritionalTitle'>Nutritional information</div>
            <div id='details'>
                <div id='calorias'>
                    <div className='detailNumber'>243</div>
                    <div className='detailText'>calorias</div>
                </div>
                <div id='grasesWrapper'>
                    <div className='detailNumber'>2.8g</div>
                    <div className='detailText'>grases</div>
                </div>
                <div id='carbohid'>
                    <div className='detailNumber'>45.7g</div>
                    <div className='detailText'>carbohid</div>
                </div>
                <div id='proteinas'>
                    <div className='detailNumber'>9.8g</div>
                    <div className='detailText'>proteinas</div>
                </div>
            </div>
        </div>

        <div id='homeScreenWrapper'>
            <div id='homeScreen' />
        </div>

        <div id='weekResult'>
            <div id='resultTextWrapper'>
                <div id='resultsTitle'>Results of the week</div>

                <div id='informationWrapper'>
                    <div>
                        <div className='resultText'>you have lost</div>
                        <div className='resultNumber'>-4kg</div>
                    </div>
                    <div>
                        <div className='resultText'>you level up</div>
                        <div className='resultNumber'>Level 8</div>
                    </div>
                </div>
            </div>

            <div id='resultGraphWrapper'>
                <div id='dots'>
                    <div className='dot' />
                    <div className='dot' />
                </div>
                <div id='picturesComponentGraph'>
                    <div id='graphText'>
                        520 <br /> Kcal
                    </div>
                </div>
                <div id='bottomWorldsInPicturesComponent'>
                    Never give up, <span>know more</span>
                </div>
            </div>

            <div id='resultArrow'>
                <HiArrowRight />
            </div>
        </div>
    </Pictures>
);

export default PicturesComponent;

const Pictures = styled.div`
    width: 50%;
    display: flex;
    justify-content: flex-start;
    position: relative;

    #loginScreenWrapper {
        transform: translateY(-100px);
        position: relative;

        #loginScreen {
            width: 288px;
            height: 624px;
            border-radius: 30px;
            background: url(images/loginScreen.png) no-repeat center center;
            box-shadow: 0px 0px 99px rgba(42, 90, 123, 0.23);
            position: relative;
            /* top: 0px;
            left: 0px; */
            z-index: 5;
        }

        &::after {
            content: '';
            width: 25.5625rem;
            height: 25.5625rem;
            border-radius: 50%;
            background: #d0f0d6;
            position: absolute;
            top: 110px;
            left: -60px;
            z-index: 1;
        }
    }

    #information {
        width: 322px;
        height: 103px;
        text-align: center;
        border-radius: 10px;
        background: #fff;
        box-shadow: 0px 10px 20px rgba(25, 22, 109, 0.07);
        position: absolute;
        top: -65px;
        left: 250px;
        z-index: 10;

        #nutritionalTitle {
            font-weight: 500;
            font-size: 13px;
            line-height: 24px;
            color: #23233c;
            margin: 15px 0;
        }
        #details {
            margin: 20px 30px 0;
            display: flex;
            justify-content: space-around;

            div {
                .detailNumber {
                    font-weight: bold;
                    font-size: 19px;
                    color: #23233c;
                }
                .detailText {
                    font-weight: normal;
                    font-size: 7px;
                    color: #9e9e9e;
                }
            }

            #calorias {
                .detailNumber {
                    color: #ee6a6e;
                }
            }
        }
    }

    #homeScreenWrapper {
        margin-left: 80px;
        transform: translateY(50px);
        position: relative;

        #homeScreen {
            width: 288px;
            height: 624px;
            border-radius: 30px;
            background: url(images/homeScreen.png) no-repeat center center;
            box-shadow: 0px 3px 80px rgba(42, 90, 123, 0.23);
        }
    }

    #weekResult {
        width: 394px;
        height: 192px;
        border-radius: 10px;
        background: #fff;
        box-shadow: 0px 10px 20px rgba(25, 22, 109, 0.07);
        position: absolute;
        bottom: 200px;
        right: -100px;

        display: flex;

        #resultTextWrapper {
            text-align: center;
            margin: 0 15px 0 40px;

            #resultsTitle {
                font-weight: bold;
                font-size: 20px;
                line-height: 26px;
                color: #23233c;
                margin: 40px 0 12px;
            }

            #informationWrapper {
                display: flex;
                justify-content: space-around;

                .resultText {
                    font-weight: normal;
                    font-size: 10px;
                    line-height: 15px;
                    color: #23233c;
                }
                .resultNumber {
                    font-weight: bold;
                    font-size: 19px;
                    line-height: 34px;
                    color: #6cc57c;
                }
            }
        }

        #resultGraphWrapper {
            width: 38.5%;

            #dots {
                margin: 20px 35px 0 0;

                display: flex;
                gap: 5px;
                justify-content: flex-end;

                .dot {
                    width: 5px;
                    height: 5px;
                    background: #7f8da0;
                    border-radius: 50%;
                }
            }

            #picturesComponentGraph {
                width: 81.98px;
                height: 81.98px;
                border-radius: 50%;
                margin: 23px 30px 30px 30px;
                background-image: linear-gradient(225deg, #6cc57c 14%, #dcebf5 90%);
                position: relative;

                display: flex;
                justify-content: center;
                align-items: center;

                #graphText {
                    font-weight: bold;
                    font-size: 15px;
                    text-align: center;
                    line-height: 16px;
                    color: #23233c;
                    z-index: 10;
                }

                &:after {
                    content: '';
                    width: 72px;
                    height: 72px;
                    border-radius: 50%;
                    background: #fff;
                    position: absolute;
                }
            }

            #bottomWorldsInPicturesComponent {
                font-weight: normal;
                font-size: 10px;
                line-height: 19px;

                span {
                    color: #6cc57c;
                }
            }
        }

        #resultArrow {
            width: 46px;
            height: 46px;
            background: #fff;
            filter: drop-shadow(0px 5px 30px rgba(8, 21, 81, 0.31));
            border-radius: 50%;
            position: absolute;
            bottom: -6px;
            left: -6px;

            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
`;
