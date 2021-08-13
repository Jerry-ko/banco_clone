import styled from "styled-components";
import BannerImg from "../assets/BannerImg.png";
import { Element } from "react-scroll";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 461.2px;
`;

const BannerImage = styled.img`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 461.2px;
`;

const CompanyLogo = styled.img`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 110px;
  height: 37px;
  margin-top: -100px;
`;

const Text = styled.div`
  position: absolute;
  font-size: 42px;
  font-weight: 500;
  text-align: center;
  font-family: "poppins";
  line-height: 1.5;
  letter-spacing: -0.01em;
  color: #fff;
`;

const SingleLogo = styled.img`
  position: absolute;
  display: flex;
  justify-content: center;
  margin-top: 150px;
  width: 85px;
  height: 40px;
`;

function Banner() {
  return (
    <Element name="Banner">
      <Container>
        <BannerImage src={BannerImg} alt="뱅코"></BannerImage>
        <CompanyLogo
          src="https://www.banco.id/res/img/banco_logo_white.png"
          alt="뱅코"
        ></CompanyLogo>
        <Text>
          {"게임, 결제, 엔터테인먼트. 교육, 블록체인 등"}
          <br />
          {"IT 기반의 다양한 사업분야에 진출, 성장해 나가고 있는 기업입니다."}
          <br />
        </Text>
        <SingleLogo
          src="https://www.banco.id/res/img/logo_banco-white.png"
          alt="뱅코"
        ></SingleLogo>
      </Container>
    </Element>
  );
}

export default Banner;
