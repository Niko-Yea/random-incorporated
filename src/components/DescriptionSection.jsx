import styled from "styled-components";

import { Container } from "./custom-styled-components/Container";

import descImg from "../img/home-page/desc-img.png";
import { Paragraph } from "./custom-styled-components/Paragraph";
import { Section } from "./custom-styled-components/Section";

const Image = styled.img`
  margin-left: auto;
  margin-right: auto;
`;

export const DescribtionSection = () => {
  return (
    <Section bg="primaryBgColor">
      <Container pt="95px">
        <Paragraph
          mb="100px"
          align="center"
          textColor="secondaryTextColor"
          font="primary"
          fs="26px"
          weight="light"
          lh="1.53"
          ls="-0.52px"
        >
          Ładny tekst opisujący proudkty firmy <b>RANDOM</b>
        </Paragraph>
        <Image src={descImg} alt="section image" />
      </Container>
    </Section>
  );
};
