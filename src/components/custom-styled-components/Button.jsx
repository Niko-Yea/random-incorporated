import styled from "styled-components";

export const Button = styled.button`
  display: block;
  padding: 23px 75px;
  background-color: ${(props) =>
    props.bg || props.theme.colors.secondaryBgColor};
  color: ${(props) => props.tc || props.theme.colors.primaryTextColor};
  cursor: pointer;
  border: none;

  font-family: ${(props) => props.theme.fonts.secondary};
  font-size: ${(props) => props.fs};
  font-weight: ${(props) => props.theme.fontWeight.bold};
  line-height: 1.16;
  letter-spacing: -0.24px;
  margin: 0 auto;
`;
