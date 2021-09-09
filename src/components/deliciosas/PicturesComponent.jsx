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
        transform: translateY(-4.942vw);
        position: relative;

        #loginScreen {
            width: 14.236vw;
            height: 30.845vw;
            border-radius: 30px;
            background: url(images/loginScreen.png) no-repeat center;
            background-size: 200%;
            box-shadow: 0px 0px 4.894vw rgba(42, 90, 123, 0.23);
            position: relative;
            z-index: 5;
        }

        &::after {
            content: '';
            width: 20.213vw;
            height: 20.213vw;
            border-radius: 50%;
            background: #d0f0d6;
            position: absolute;
            top: 5.436vw;
            left: -2.965vw;
            z-index: 1;
        }
    }

    #information {
        width: 15.913vw;
        height: 5.09vw;
        text-align: center;
        border-radius: 10px;
        background: #fff;
        box-shadow: 0px 0.494vw 0.988vw rgba(25, 22, 109, 0.07);
        position: absolute;
        top: -3.212vw;
        left: 12.355vw;
        z-index: 10;

        #nutritionalTitle {
            font-weight: 500;
            font-size: 0.642vw;
            line-height: 1.186vw;
            color: #23233c;
            margin: 0.741vw 0;
        }
        #details {
            margin: 0.988vw 1.483vw 0;
            display: flex;
            justify-content: space-around;

            div {
                .detailNumber {
                    font-weight: bold;
                    font-size: 0.939vw;
                    color: #23233c;
                }
                .detailText {
                    font-weight: normal;
                    font-size: 0.346vw;
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
        margin-left: 3.954vw;
        transform: translateY(2.471vw);
        position: relative;

        #homeScreen {
            width: 14.233vw;
            height: 30.838vw;
            border-radius: 30px;
            background: url(images/homeScreen.png) no-repeat center;
            background-size: 200%;
            box-shadow: 0px 0.148vw 3.954vw rgba(42, 90, 123, 0.23);
        }
    }

    #weekResult {
        width: 19.471vw;
        height: 9.489vw;
        border-radius: 10px;
        background: #fff;
        box-shadow: 0px 0.494vw 0.988vw rgba(25, 22, 109, 0.07);
        position: absolute;
        bottom: 9.884vw;
        right: -4.942vw;

        display: flex;

        #resultTextWrapper {
            text-align: center;
            margin: 0 0.741vw 0 1.977vw;

            #resultsTitle {
                font-weight: bold;
                font-size: 0.988vw;
                line-height: 1.285vw;
                color: #23233c;
                margin: 1.977vw 0 0.593vw;
            }

            #informationWrapper {
                display: flex;
                justify-content: space-around;

                .resultText {
                    font-weight: normal;
                    font-size: 0.494vw;
                    line-height: 0.741vw;
                    color: #23233c;
                }
                .resultNumber {
                    font-weight: bold;
                    font-size: 0.939vw;
                    line-height: 1.68vw;
                    color: #6cc57c;
                }
            }
        }

        #resultGraphWrapper {
            width: 38.5%;

            #dots {
                margin: 0.988vw 1.73vw 0 0;

                display: flex;
                gap: 0.247vw;
                justify-content: flex-end;

                .dot {
                    width: 0.247vw;
                    height: 0.247vw;
                    background: #7f8da0;
                    border-radius: 50%;
                }
            }

            #picturesComponentGraph {
                width: 4.051vw;
                height: 4.051vw;
                border-radius: 50%;
                margin: 1.137vw 1.483vw 1.483vw;
                background-image: linear-gradient(225deg, #6cc57c 14%, #dcebf5 90%);
                position: relative;

                display: flex;
                justify-content: center;
                align-items: center;

                #graphText {
                    font-weight: bold;
                    font-size: 0.741vw;
                    text-align: center;
                    line-height: 0.791vw;
                    color: #23233c;
                    z-index: 10;
                }

                &:after {
                    content: '';
                    width: 3.558vw;
                    height: 3.558vw;
                    border-radius: 50%;
                    background: #fff;
                    position: absolute;
                }
            }

            #bottomWorldsInPicturesComponent {
                font-weight: normal;
                font-size: 0.494vw;
                line-height: 0.939vw;

                span {
                    color: #6cc57c;
                }
            }
        }

        #resultArrow {
            width: 2.273vw;
            height: 2.273vw;
            background: #fff;
            filter: drop-shadow(0px 0.247vw 1.483vw rgba(8, 21, 81, 0.31));
            border-radius: 50%;
            position: absolute;
            bottom: -0.297vw;
            left: -0.297vw;

            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
`;
