import styled from 'styled-components'
import PurplePaymentImg from '../assets/PurplePaymentImg.png';
import PurpleCardImg2 from '../assets/PurpleCardImg2.png';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 800px;
    line-height: 1.2;
`;

const TextBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 800px;
`;

const ImageBox =  styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 800px;
`;

const Titles = styled.div`
    font-size: 46px;
    font-weight: bold;
    line-height: 1.3;
    word-break: keep-all;


`;

const Description = styled.div`
    background: #f5f5f5;
    border-radius: 10px;
    padding: 20px;
    margin-top: 30px;
    overflow: hidden;
`;

const Text = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;   
    padding-top: 80px
`;

const PurplePaymentImage1 = styled.img`
    position: absolute;
    margin-top: -240px;
    margin-left: -140px;
`;

const PurplePaymentImage2 = styled.img`
    position: absolute;
    margin-top: 180px;
    margin-left: -160px;
`;

const TitleKor = styled.div`

`;

const TitleEn = styled.div`

`;

const Detail = styled.div`
    font-size: 13px;
    margin-bottom: 12px;
    font-weight: 600;
    color: #aaa;
`;

const Information = styled.div`
`;

const InfoName = styled.div`
    font-size: 20px;
    font-weight: bold;
    line-height: 1.1;
    float: left;
`;

const InfoTimeName = styled.div`
    font-size: 17px;
    text-align: right;
`;

const InfoTime = styled.div`
    font-size: 28px;
    font-weight: bold;
    line-height: 1.14;
    letter-spacing: -0.025em;
    text-align: right;
`;

function PurplePayment() {
    return(
        <Container>
            <TextBox>
                <Text>
                    <Titles>
                        <TitleKor>퍼플 페이먼트</TitleKor>
                        <TitleEn>Purple Payment</TitleEn>
                    </Titles>
                    <Description>
                        <Detail>
                        {"코인 간 특성, 트랜젝션 타임과 관계없이 즉시 체결가능합니다."}<br/>
                        {"고객사의 요청에 맞게 카드 제작,"}<br/>
                        {"도입 즉시 가맹점 코인으로 결제가 가능합니다."}
                        </Detail>
                        <Information>
                            <InfoName>
                                {"크립토"}<br/>
                                {"결제 시스템"}
                            </InfoName>
                            <InfoTimeName>체결시간</InfoTimeName>
                            <InfoTime> 약 0.1초</InfoTime>
                        </Information>
                     </Description>
                </Text>
            </TextBox>
            <ImageBox>
                <PurplePaymentImage1 src = { PurplePaymentImg } alt="뱅코"></PurplePaymentImage1>
                <PurplePaymentImage2 src = { PurpleCardImg2 } alt="뱅코"></PurplePaymentImage2>
            </ImageBox>
        </Container>
    )
}

export default PurplePayment;