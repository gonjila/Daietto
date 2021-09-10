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
    width: 15.122vw;
    height: 21.745vw;
    padding: 0 2.224vw;
    border-radius: 7.561vw 7.561vw 2.471vw 2.471vw;
    background: linear-gradient(#f2f6ff 0%, #f2f6ff 64.59%, #fff 100%);
    box-shadow: 2.471vw 2.471vw 2.471vw rgba(171, 182, 204, 0.2);
    position: relative;

    img {
        width: 18.928vw;
        height: 18.928vw;
        position: relative;
        bottom: 6.919vw;
        left: -4.127vw;
    }
    .saladInformationWrapper {
        position: relative;
        bottom: 7.413vw;

        .saladName {
            font-family: 'Google Sans';
            font-weight: bold;
            font-size: 1.73vw;
            line-height: 1.878vw;
            text-align: left;
            color: #23233c;
            margin-bottom: 0.494vw;
        }

        div {
            width: 7.067vw;
            height: 2.471vw;
            background: transparent;

            display: flex;

            .saladCalories {
                flex-direction: column;

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
                font-size: 1.285vw;
                text-align: left;
                color: #23233c;
            }
            .caloriesAndGrasesText {
                font-weight: normal;
                font-size: 0.593vw;
                text-align: left;
                color: #7f8da0;
            }
        }
    }
    .SaladArrowWrapper {
        width: 3.954vw;
        height: 3.954vw;
        border-radius: 50%;
        background: #23233c;
        position: absolute;
        bottom: -0.791vw;
        right: -1.186vw;

        display: flex;
        align-items: center;
        justify-content: center;
    }
`;
