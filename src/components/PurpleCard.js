import styled from 'styled-components'
import PurpleCardImg1 from '../assets/PurpleCardImg1.png';
import PurpleCardImg2 from '../assets/PurpleCardImg2.png';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 740px;
`;

const TextBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 740px; 
`;

const ImageBox =  styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 740px;
`;

const Logo = styled.img`
    position: absolute;
    width: 92px;
    margin-top:-190px;
`;

const Titles = styled.div`
    font-size: 46px;
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 900;
    line-height: 1.3;
    word-break: keep-all;
`;

const Description = styled.div`
    font-size: 20px;
    line-height: 1.5;
    margin-top: 12px;
    word-break: keep-all;
    letter-spacing: -1px;
`;

const Text = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;   
`;

const PurpleCardImage1 = styled.img`
    position: absolute;
    margin-top: 180px;
    margin-left: -290px;
`;

const PurpleCardImage2 = styled.img`
    position: absolute;
    margin-top: 150px;
    margin-left: -50px;
`;

const TitleKor = styled.div`

`;

const TitleEn = styled.div`

`;


function  PurpleCard() {
    return(
        <Container>
            <TextBox>
                <Text>
                    <Logo src="https://www.banco.id/res/img/banco_logo.png" alt="뱅코"></Logo>
                    <Titles>
                        <TitleKor>보라빛 퍼플카드</TitleKor>
                        <TitleEn>Purple Card</TitleEn>
                    </Titles>
                    <Description>
                        {"NFC를 지원하며 IC칩을 내장한"}<br/>
                        {"카드형 하드웨어 콜드월렛입니다."}<br/>
                        {"콜드월렛과 캐쉬풀 두가지 방식으로"}<br/>
                        {"보존하며 편리한 결제가 가능합니다."}<br/><br/>
                        {"실내에서 즐기는 가벼운 운동과 자세교정 등의"}<br/>
                        {"온라인 쇼핑몰 및 오프라인 결제연동됩니다."}<br/>
                    </Description>
                </Text>
            </TextBox>
            <ImageBox>
                <PurpleCardImage1 src = { PurpleCardImg1 } alt="뱅코"></PurpleCardImage1>
                <PurpleCardImage2 src = { PurpleCardImg2 } alt="뱅코"></PurpleCardImage2>
            </ImageBox>

        </Container>
    )
}

export default PurpleCard;