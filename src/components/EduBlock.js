import styled from 'styled-components'
import EduBlockImg from '../assets/EduBlockImg.png';

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
    margin-top: -120px;
`;

const Titles = styled.div`
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

const EduBlockImage = styled.img`
    position: absolute;
    margin-top: -140px;
    margin-left: -150px;
`;

const TitleKor = styled.div`

`;

const TitleEn = styled.div`

`;


function EduBlock() {
    return(
        <Container>
            <TextBox>
                <Text>
                    <Logo src="https://www.banco.id/res/img/banco_logo.png" alt="뱅코"></Logo>
                    <Titles>
                        <TitleKor>에듀블록</TitleKor>
                        <TitleEn>EDU-BLOCK</TitleEn>
                    </Titles>
                    <Description>
                        {"뱅코체인을 기반으로한 자율 참여형 교육 플랫폼입니다."}<br/>
                        {"공교육 강화와 사교육비 절감에 효율적인 플랫폼입니다."}<br/>
                    </Description>
                </Text>
            </TextBox>
            <ImageBox>
                <EduBlockImage src = { EduBlockImg } alt="뱅코"></EduBlockImage>
            </ImageBox>

        </Container>
    )
}

export default EduBlock;