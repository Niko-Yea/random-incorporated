import styled from "styled-components";
import { Container } from "./custom-styled-components/Container";

import svgIcons from "../img/social/sprite.svg";
import { Paragraph } from "./custom-styled-components/Paragraph";
import { Section } from "./custom-styled-components/Section";

const Svg = styled.svg`
  width: ${(props) => props.w};
  height: ${(props) => props.h};
  fill: ${(props) => props.theme.colors[props.fill]};

  &:not(:last-child) {
    margin-right: 59px;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SocialLinksSection = () => {
  return (
    <Section bg="primaryBgColor">
      <Container pt="62px" pb="56px">
        <FlexContainer>
          <Paragraph
            textColor="fifthTextColor"
            font="secondary"
            fs="18px"
            weight="bold"
            lh="1.66"
            ls="-0.18px"
            fontStyle="italic"
          >
            Obserwuj nas i bądź na bieżąco ze wszystkimi ofertami.
          </Paragraph>
          <FlexContainer>
            <Svg fill="fifthTextColor" w="26px" h="26px">
              <use href={svgIcons + "#icon-facebook"} />
            </Svg>
            <Svg fill="fifthTextColor" w="26px" h="26px">
              <use href={svgIcons + "#icon-instagram"} />
            </Svg>
            <Svg fill="fifthTextColor" w="26px" h="26px">
              <use href={svgIcons + "#icon-linkedin"} />
            </Svg>
          </FlexContainer>
        </FlexContainer>
      </Container>
    </Section>
  );
};
