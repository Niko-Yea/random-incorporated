import { Button } from "./custom-styled-components/Button";

import { Container } from "./custom-styled-components/Container";
import { Paragraph } from "./custom-styled-components/Paragraph";
import { Section } from "./custom-styled-components/Section";
import { Title } from "./custom-styled-components/Title";

export const SalonPromotionSection = () => {
  return (
    <Section bg="secondaryBgColor">
      <Container pt="69px" pb="84px">
        <Title
          align="center"
          textColor="primaryTextColor"
          font="secondary"
          fs="36px"
          weight="bold"
          lh="1.13"
          ls="-0.72px"
        >
          Skorzystaj z oferty
        </Title>
        <Paragraph
          mt="11px"
          mb="59px"
          align="center"
          textColor="fourthTextColor"
          font="primary"
          fs="24px"
          weight="light"
          lh="1.5"
          ls="-0.48px"
        >
          Odwiedź nasz salon i sprawdź, co zyskujesz
        </Paragraph>
        <Button bg="#FFFFFF" tc="#191919" fs="12px">
          ZNAJDŹ SALON
        </Button>
      </Container>
    </Section>
  );
};
