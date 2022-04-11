import styled from "styled-components";

const List = styled.ul`
  display: flex;
  max-width: 1366px;
  overflow: hidden;
  margin-left: auto;
  margin-right: auto;
`;

export const ImagesList = ({ children }) => {
  return <List>{children}</List>;
};
