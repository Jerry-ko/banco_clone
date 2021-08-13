import styled from "styled-components";
import MainImg1 from "../assets/MainImg1.png";
import MainImg2 from "../assets/MainImg2.png";
import MainImg3 from "../assets/MainImg3.png";
import { Element } from "react-scroll";
import { Carousel } from "react-responsive-carousel";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Main.css";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 720px;
`;

const ImageBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 720px;
`;

const ImageA = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 720px;
`;

const ImageB = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 720px;
`;

const ImageC = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 720px;
`;

const TextBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Logo = styled.img`
  position: absolute;
  width: 250px;
  margin-bottom: 15px;
`;

const Text = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  width: 100%;
  height: 100%;
`;

const TitleKor = styled.div``;

const TitleEn = styled.div``;

function Main() {
  return (
    <Element name="Main">
      <Logo src="https://www.banco.id/res/img/logo_renew.png" alt="뱅코"></Logo>
      <Carousel showThumbs={false} infiniteLoop={true}>
        <ImageA src={MainImg1} alt="뱅코">
          <TextBox>
            <Text>
              <TitleKor>
                Creates Value through technology and convergence
              </TitleKor>
              <TitleEn>기술과 융합으로 새로운 가치를 창조하는 기업</TitleEn>
            </Text>
          </TextBox>
        </ImageA>
        <ImageB src={MainImg2} alt="뱅코"></ImageB>
        <ImageC src={MainImg3} alt="뱅코"></ImageC>
      </Carousel>
    </Element>
  );
}

export default Main;
