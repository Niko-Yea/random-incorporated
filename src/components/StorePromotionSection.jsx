import styled from "styled-components";
import { Button } from "./custom-styled-components/Button";

import { Container } from "./custom-styled-components/Container";
import { Paragraph } from "./custom-styled-components/Paragraph";
import { Section } from "./custom-styled-components/Section";
import { Title } from "./custom-styled-components/Title";

const Describtion = styled(Paragraph)`
  & > span {
    display: inline-block;
  }

  & > span::after {
    content: "";
    display: block;
    width: 95%;
    height: 1px;
    background-color: #191919;
    margin-left: auto;
    margin-right: auto;
    margin-top: 7px;
  }
`;

export const StorePromotionSection = () => {
  return (
    <Section bg="thirdBgColor">
      <Container pt="128px" pb="90px">
        <Title
          align="center"
          textColor="secondaryTextColor"
          font="secondary"
          fs="14px"
          weight="bold"
          lh="2"
          ls="-0.28px"
        >
          Sprawdź najnowszą, sierpniową ofertę RANDOM.
        </Title>
        <Describtion
          mt="30px"
          mb="73px"
          align="center"
          textColor="secondaryTextColor"
          font="primary"
          fs="24px"
          weight="light"
          lh="1.58"
          ls="-0.48px"
        >
          Kup produkty zawierające dowolny system RGB lub CMYK <br />i zyskaj{" "}
          <span>dodatkowy rabat na zamówienie.</span>
        </Describtion>
        <Button tc="#ECECEC" fs="12px">
          IDŻ DO SKLEPU
        </Button>
      </Container>
    </Section>
  );
};
