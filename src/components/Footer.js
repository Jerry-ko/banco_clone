import styled from 'styled-components'


const Container = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 255.59px;
    background-color: #0a2e67;
`;

const Logo = styled.img`
    width: 119px;
    height: 31.59px;
`;

const Message = styled.div`
    font-size: 14px;
    font-weight: 600;
    font-family: 'poppins';
    color: #fff;
    margin-top: 10px;
`;

const Company = styled.div`
    font-size: 14px;
    font-family: 'poppins';
    color: #fff;
    margin-top: 30px;
`;

const HQ = styled.div`
    font-size: 14px;
    font-family: 'poppins';
    color: #fff;
    margin-top: 7px;
`;

const Labor = styled.div`
    font-size: 14px;
    font-family: 'poppins';
    color: #fff;
    margin-top: 5px;
`;

const Copy = styled.div`
    font-size: 14px;
    color: #fff;    
    margin-top: 5px;
`;

function Footer() {
    return(
        <Container>
            <Logo src ="https://www.banco.id/res/img/fb_CI_W.png" alt="뱅코"></Logo>
            <Message>Welcome to BANCO</Message>
            <Company>(주)뱅코</Company>
            <HQ>본사: 전라북도 전주지 덕진구 만성북로 21-26, 4층 1호</HQ>
            <Labor>연구소: 서울특별시 강남구 도곡로 170 (대성빌딩) 4층</Labor>
            <Copy>Copyright ⓒ 2020 BANCO. Inc. All Rights Reserved.</Copy>
        </Container>
    )
}

export default Footer;