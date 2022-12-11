import styled from "styled-components";

export const HabilityCardStyle = styled.div`
  background-color: ${(props) => props.theme.secondaryColor};
  width: 250px;
  height: 200px;
  border-radius: 25px;
  margin-top: 50px;
  padding: 30px;
  position: relative;

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

  .decoration {
    position: absolute;
    right: 0;
    bottom: 0;
    background-color: ${(props) => props.theme.primaryColor};
    padding: 38px 0 0 38px;
    border-radius: 30px 0 30px 0;
  }
`;
