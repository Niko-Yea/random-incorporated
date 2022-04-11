import styled from "styled-components";

import { Container } from "./custom-styled-components/Container";
import { Paragraph } from "./custom-styled-components/Paragraph";

const Wrapper = styled.footer`
  background-color: ${(props) => props.theme.colors.fourthBgColor};
`;

export const Footer = () => {
  return (
    <Wrapper>
      <Container pt="39px" pb="40px">
        <Paragraph
          textColor="sixthTextColor"
          font="primary"
          fs="13px"
          weight="normal"
          lh="1.23"
          ls="-0.13px"
        >
          &copy;2021
        </Paragraph>
      </Container>
    </Wrapper>
  );
};
