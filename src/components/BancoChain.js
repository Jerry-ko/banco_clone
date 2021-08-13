import styled from 'styled-components'
import BancoChainImg from '../assets/BancoChainImg.png';

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
    margin-top:-180px;
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

const BancoChainImage = styled.img`
    position: absolute;
    margin-top: 120px;
`;

const TitleKor = styled.div`

`;

const TitleEn = styled.div`

`;


function BancoChain() {
    return(
        <Container>
            <ImageBox>
                <BancoChainImage src = { BancoChainImg } alt="뱅코"></BancoChainImage>
            </ImageBox>
            <TextBox>
                <Text>
                    <Logo src="https://www.banco.id/res/img/banco_logo.png" alt="뱅코"></Logo>
                    <Titles>
                        <TitleKor>뱅코체인</TitleKor>
                        <TitleEn>BANCO CHAIN</TitleEn>
                    </Titles>
                    <Description>
                        {"비트코인의 블록체인을 기반으로 제작된"}<br/>
                        {"뱅코체인입니다. 원천기술 보유로 인한"}<br/>
                        {"다양한 플랫폼에 최적화가 가능합니다."}<br/>
                        {"* 뱅코체인을 이용한 개발도상국"}<br/>
                        {"\u00A0\u00A0공공업무를 위한 블록체인"}<br/>
                        {"* 인공지능을 이용한 암호화폐 분석 및 지표수립"}<br/>
                    </Description>
                </Text>
            </TextBox>
         

        </Container>
    )
}

export default BancoChain;