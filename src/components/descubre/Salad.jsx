import styled from 'styled-components';
// eslint-disable-next-line import/extensions
import { HiArrowRight } from 'react-icons/hi';

function Salad({ id, img, text, calories, grases }) {
    return (
        <Container id={id}>
            <img alt='salad' src={img} />
            <div className='saladInformationWrapper'>
                <p className='saladName'>{text}</p>
                <div>
                    <div className='saladCalories'>
                        <p className='caloriesAndGrasesNumber'>{calories}</p>
                        <p className='caloriesAndGrasesText'>calories</p>
                    </div>
                    <div className='saladGrases'>
                        <p className='caloriesAndGrasesNumber'>{grases}</p>
                        <p className='caloriesAndGrasesText'>grases</p>
                    </div>
                </div>
            </div>
            <div className='SaladArrowWrapper'>
                <HiArrowRight style={{ width: '27px', height: '27px', color: 'white' }} />
            </div>
        </Container>
    );
}

export default Salad;

const Container = styled.div`
    width: 306px;
    height: 440px;
    padding: 0 45px;
    border-radius: 153px 153px 50px 50px;
    background: linear-gradient(#f2f6ff 0%, #f2f6ff 64.59%, #fff 100%);
    box-shadow: 50px 50px 50px rgba(171, 182, 204, 0.2);
    position: relative;

    img {
        width: 383px;
        height: 383px;
        position: relative;
        bottom: 140px;
        left: -83.5px;
    }
    .saladInformationWrapper {
        position: relative;
        bottom: 150px;

        .saladName {
            font-family: 'Google Sans';
            font-weight: bold;
            font-size: 35px;
            line-height: 38px;
            text-align: left;
            color: #23233c;
            margin-bottom: 10px;
        }

        div {
            width: 143px;
            height: 50px;
            background: transparent;

            display: flex;

            .saladCalories {
                flex-direction: column;
                /* align-items: center; */

                .caloriesAndGrasesNumber {
                    color: #ee6a6e;
                }
            }
            .saladGrases {
                flex-direction: column;
                align-items: center;
            }

            .caloriesAndGrasesNumber {
                font-weight: bold;
                font-size: 26px;
                text-align: left;
                color: #23233c;
            }
            .caloriesAndGrasesText {
                font-weight: normal;
                font-size: 12px;
                text-align: left;
                color: #7f8da0;
            }
        }
    }
    .SaladArrowWrapper {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        background: #23233c;
        position: absolute;
        bottom: -16px;
        right: -24px;

        display: flex;
        align-items: center;
        justify-content: center;
    }
`;
