import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1180px;
  margin: 0px auto;
  padding: 0px 93px;
  padding-top: ${(props) => props.pt || 0};
  padding-bottom: ${(props) => props.pb || 0};
`;
