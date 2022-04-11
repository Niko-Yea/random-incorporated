import styled from "styled-components";

import { Container } from "./custom-styled-components/Container";

import bg from "../img/home-page/header.jpg";
import logo from "../img/home-page/logo.png";

const Wrapper = styled.header`
  background: linear-gradient(
      to bottom,
      rgba(41, 41, 41, 0),
      rgba(41, 41, 41, 0.76)
    ),
    url(${(props) => props.img}) no-repeat 50% bottom;
  background-size: cover;
`;

const Link = styled.a``;

const Logo = styled.img``;

const Title = styled.h1`
  margin-top: ${(props) => props.mt};
  color: ${(props) => props.theme.colors.primaryTextColor};

  font-family: ${(props) => props.theme.fonts.secondary};
  font-size: ${(props) => props.fs};
  font-weight: ${(props) => props.theme.fontWeight.light};
  line-height: 1.33;
  letter-spacing: -0.96px;

  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25), -1px -1px 0 #000, 0 -1px 0 #000,
    1px -1px 0 #000, 1px 0 0 #000, 1px 1px 0 #000, 0 1px 0 #000, -1px 1px 0 #000,
    -1px 0 0 #000;

  & > span {
    font-weight: ${(props) => props.theme.fontWeight.bold};
  }
`;

export const Header = () => {
  return (
    <Wrapper img={bg}>
      <Container pt="50px" pb="104px">
        <Link href="/">
          <Logo src={logo} alt={"logo"} />
        </Link>

        <Title fs="48px" mt="189px">
          Lorem ipsum <br />
          <span>dolor set ignify</span>
        </Title>
      </Container>
    </Wrapper>
  );
};
