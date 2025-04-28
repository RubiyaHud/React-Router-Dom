import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import logoImg from "../../assets/logo.png";
import Menu from "./Menu";

const Header = () => {
  return (
    <>
      <div className={"py-8"}>
        <Container>
          <Flex>
            <div> 
              <Image imgSrc={logoImg} imgAlt={logoImg}/>
            </div>
            <div>
              <Menu/>
            </div>
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default Header;
