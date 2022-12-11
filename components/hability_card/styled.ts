import styled from "styled-components";

export const HabilityCardStyle = styled.div`
  background-color: ${(props) => props.theme.secondaryColor};
  width: 250px;
  height: 200px;
  border-radius: 25px;
  margin-top: 50px;
  padding: 30px;

  .header {
    display: flex;
    align-items: center;
    gap: 20px;
    color: #fff;
    font-size: 1.3em;
  }

  .text {
    margin-top: 20px;
    color: #fff;
  }
`;
