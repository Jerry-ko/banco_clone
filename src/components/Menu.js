import styled from "styled-components";
import { Link } from "react-scroll";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
`;

const TextBox = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
  background-color: #3b3b3b;
  z-index: 10;
`;

const MenuBar = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
`;

const Menu1 = styled.div`
  position: absolote;
  color: #fff;
  margin-right: 20px;
`;

const Menu2 = styled.img`
  width: 119px;
  height: 31.59px;
  margin-right: 20px;
`;

const Menu3 = styled.div`
  position: absolote;
  color: #fff;
`;

function Menu() {
  return (
    <Container>
      <TextBox>
        <MenuBar>
          <Link to="ActionGolf" smooth={true}>
            <Menu1>BUSINESS</Menu1>
          </Link>
          <Link to="Main" smooth={true}>
            <Menu2
              src="https://www.banco.id/res/img/fb_CI_W.png"
              alt="뱅코"
            ></Menu2>
          </Link>
          <Link to="Banner" smooth={true}>
            <Menu3>BANCO</Menu3>
          </Link>
        </MenuBar>
      </TextBox>
    </Container>
  );
}

export default Menu;
