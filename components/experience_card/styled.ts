import styled from "styled-components";
import breakpoints from "../../config/breakpoints";

export const ExperienceCardStyled = styled.div`
  display: flex;
  width: 80%;
  .logo-area {
    width: 100px;
    height: 100px;
    padding: 40px;
    border-radius: 100%;
    background-color: ${(props) => props.theme.secondaryColor};
  }

  .content-area {
    padding: 30px;
    h2 {
      color: #fff;
      margin-bottom: 10px;
      font-weight: bold;
      font-size: 1.4em;
    }
    .periodo {
      color: #fff;
      margin-bottom: 20px;
      font-weight: bold;
    }

    .description {
      color: ${(props) => props.theme.textColor};
      opacity: 53%;
    }
  }
  @media screen and (${breakpoints.device.lg}) {
    width: 100%;
    flex-direction: column;
    .logo-area {
      margin: 0 auto;
    }
  }
`;
