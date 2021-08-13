import styled from "styled-components";
import ActionImg1 from "../assets/ActionImg1.png";
import ActionImg2 from "../assets/ActionImg2.png";
import { Element } from "react-scroll";

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

const ImageBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 740px;
`;

const Logo = styled.img`
  position: absolute;
  width: 92px;
  margin-top: -190px;
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
  letter-spacing: -1px;
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ActionImage1 = styled.img`
  position: absolute;
  margin-top: 160px;
  margin-left: -250px;
`;

const ActionImage2 = styled.img`
  position: absolute;
  margin-top: 120px;
  margin-left: -50px;
`;

const TitleKor = styled.div``;

const TitleEn = styled.div``;

function ActionGolf() {
  return (
    <Element name="ActionGolf">
      <Container>
        <TextBox>
          <Text>
            <Logo
              src="https://www.banco.id/res/img/banco_logo.png"
              alt="뱅코"
            ></Logo>
            <Titles>
              <TitleKor>액션골프</TitleKor>
              <TitleEn>Action Golf</TitleEn>
            </Titles>
            <Description>
              {"3축 자이로 센서 부착으로 스윙속도 및"}
              <br />
              {"스윙궤적과 팔로우 각도, 골프스윙의 모션을"}
              <br />
              {"분석인지해 플레이하는 인터랙티브"}
              <br />
              {"골프게임입니다."}
              <br />
              <br />
              {"실내에서 즐기는 가벼운 운동과 자세교정 등의"}
              <br />
              {"효과가 탁월한 게임입니다."}
              <br />
            </Description>
          </Text>
        </TextBox>
        <ImageBox>
          <ActionImage1 src={ActionImg1} alt="뱅코"></ActionImage1>
          <ActionImage2 src={ActionImg2} alt="뱅코"></ActionImage2>
        </ImageBox>
      </Container>
    </Element>
  );
}

export default ActionGolf;
