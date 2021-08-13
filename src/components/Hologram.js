import styled from 'styled-components'
import HologramImg from '../assets/HologramImg.png';

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
    letter-spacing: -1px;
    
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
    margin-top:-110px;
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
`;

const Text = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;   
`;

const HologramImage = styled.img`
    position: absolute;
    margin-top: -40px;
    margin-left: -100px;
`;

const TitleKor = styled.div`
    margin-right: 20px;
`;

const TitleEn = styled.div`

`;


function Ar() {
    return(
        <Container>
            <TextBox>
                <Text>
                    <Logo src="https://www.banco.id/res/img/banco_logo.png" alt="뱅코"></Logo>
                    <Titles>
                        <TitleKor>홀로그램,</TitleKor>
                        <TitleEn>VR, AR</TitleEn>
                    </Titles>
                    <Description>
                        {"빛의 간접성을 이용해 입체정보를 기록하고,"}<br/>
                        {"복원을 통해 실제 사물과 동일한 3차원 입체효과를"}<br/>
                        {"제공하는 기술로 미래산업 전반에 이용이 가능한"}<br/>
                        {"핵심기술로 부상하고 있습니다."}
                    </Description>
                </Text>
            </TextBox>

            <ImageBox>
                <HologramImage src = { HologramImg } alt="뱅코"></HologramImage>
            </ImageBox>
        </Container>
    )
}

export default Ar;