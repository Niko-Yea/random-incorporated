import styled from "styled-components";

export const Section = styled.section`
  background: ${(props) => props.theme.colors[props.bg] || "primaryBgColor"}; ;
`;
