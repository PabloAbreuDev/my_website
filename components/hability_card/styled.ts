import styled from "styled-components";

export const HabilityCardStyle = styled.div`
  background-color: ${(props) => props.theme.secondaryColor};
  width: 280px;
  height: 280px;
  border-radius: 25px;
  padding: 30px;
  margin-bottom: 30px;
  transition: ease all 0.2s;

  &:hover {
  }
`;
