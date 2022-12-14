import styled from "styled-components";

export const ProjectCardStyled = styled.div`
  background-color: ${(props) => props.theme.secondaryColor};
  width: 250px;
  height: 200px;
  border-radius: 25px;
  padding: 30px;
  color: ${(props) => props.theme.textColor};
  .header {
    display: flex;
    align-items: center;
    gap: 20px;
    line-height: 22px;
    font-weight: 600;
    img {
      background-color: rebeccapurple;
      padding: 10px;
      border-radius: 100%;
    }
  }

  .project-content {
    margin-top: 20px;
    line-height: 18px;
  }
`;
