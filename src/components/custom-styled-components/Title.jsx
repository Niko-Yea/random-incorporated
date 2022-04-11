import styled from "styled-components";

export const Title = styled.h2`
  margin-top: ${(props) => props.mt || 0};
  margin-bottom: ${(props) => props.mb || 0};
  color: ${(props) =>
    props.theme.colors[props.textColor] || props.theme.colors.primaryTextColor};
  }

  text-align: ${(props) => props.align || "left"};
  font-family: ${(props) =>
    props.theme.fonts[props.font] || props.theme.fonts.primary};
  font-size: ${(props) => props.fs || "14px"};
  font-weight: ${(props) =>
    props.theme.fontWeight[props.weight] || props.theme.fontWeight.normal};
  font-style: ${(props) => props.fontStyle || "normal"};
  line-height: ${(props) => props.lh || 1.5};
  letter-spacing: ${(props) => props.ls};

  & > b{
    font-weight: ${(props) => props.theme.fontWeight.bold};
    font-family: ${(props) => props.theme.fonts.secondary};
    
  }
`;
