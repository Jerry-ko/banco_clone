import styled from 'styled-components'
import ArImg1 from '../assets/ArImg1.png';
import ArImg2 from '../assets/ArImg2.png';

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
    margin-top:-160px;
`;

const Titles = styled.div`
    display: flex;
    font-size: 46px;
    font-weight: bold;
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

const ArImage1 = styled.img`
    position: absolute;
    margin-left: 160px;
`;

const ArImage2 = styled.img`
    position: absolute;
    margin-top: 80px;
    margin-left: 200px;
`;

const TitleKor = styled.div`
    margin-right: 20px;
`;

const TitleEn = styled.div`

`;


function Ar() {
    return(
        <Container>
            <ImageBox>
                <ArImage1 src = { ArImg1 } alt="뱅코"></ArImage1>
                <ArImage2 src = { ArImg2 } alt="뱅코"></ArImage2>
            </ImageBox>

            <TextBox>
                <Text>
                    <Logo src="https://www.banco.id/res/img/banco_logo.png" alt="뱅코"></Logo>
                    <Titles>
                        <TitleKor>승람도</TitleKor>
                        <TitleEn>AR</TitleEn>
                    </Titles>
                    <Description>
                        {"AR기술을 보드게임에 접목하여"}<br/>
                        {"조선시대 선조들이 실제 즐겼던 승람도를 재현한 게임"}<br/>
                        {"조선시대 ‘승경도’라는 게임의 기반에 전국을 유람하며"}<br/>
                        {"풍류를 즐기는 요소를 가미하여 탄생한 게임이 ‘승람도’입니다."}<br/><br/>
                        {"이러한 우리 선조들이 즐겼던 보드게임을"}<br/>
                        {"현대 기술인 AR기술을 도입해 즐길 수 있도록 제작 되었습니다."}<br/>
                    </Description>
                </Text>
            </TextBox>
        </Container>
    )
}

export default Ar;