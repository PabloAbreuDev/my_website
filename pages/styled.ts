import styled from "styled-components";
import breakpoints from "../config/breakpoints";

type TypeNavbar = {
  active: boolean;
};

export const HomeStyled = styled.div<TypeNavbar>`
  overflow-x: hidden;
  .content {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    width: 70vw;
    padding: 70px 0;
    @media screen and (${breakpoints.device.lg}) {
      width: 80vw;
    }
  }
  .title-area {
    padding: 0 0 50px 0;
    .title {
      font-size: 2.2rem;
      color: ${(props) => props.theme.lightColor};
    }
  }
  header {
    .navbar {
      display: flex;
      position: absolute;
      justify-content: center;
      align-items: center;
      padding: 2px 0;
      width: 100%;
      background-color: ${(props) => props.theme.header};
      color: ${(props) => props.theme.textColor};

      .brand-title {
        font-size: 1.5rem;
        margin: 0.5rem;
        font-weight: bold;
        color: ${(props) => props.theme.lightColor};
        display: none;
        opacity: 0;
      }

      .toggle-button {
        position: absolute;
        top: 0.75rem;
        right: 1rem;
        display: none;
        flex-direction: column;
        justify-content: space-between;
        width: 30px;
        height: 21px;

        .bar {
          height: 3px;
          width: 100%;
          background-color: white;
          border-radius: 10px;
        }

        &:hover {
          cursor: pointer;
        }
      }

      .navbar-links {
        height: 100%;
        ul {
          display: flex;
          margin: 0;
          padding: 0;
          li {
            list-style: none;
            a {
              display: block;
              text-decoration: none;
              color: white;
              font-weight: bold;
              padding: 1rem;
              &:hover {
                color: ${(props) => props.theme.primaryColor};
              }
            }
          }
        }
      }

      @media screen and (${breakpoints.device.sm}) {
        flex-direction: column;
        align-items: center;

        .brand-title {
          font-size: 1.8rem;
          margin: 0.5rem;
          font-weight: bold;
          display: flex;
          color: ${(props) => props.theme.lightColor};
        }

        .toggle-button {
          display: flex;
        }

        .navbar-links {
          display: ${(props) => (props.active ? "flex" : "none")};
          width: 100%;

          ul {
            width: 100%;
            flex-direction: column;
            li {
              text-align: center;
              a {
                padding: 0.5rem 1rem;
              }
            }
          }
        }
      }
    }
  }
  .home {
    background-color: ${(props) => props.theme.background};
    .presentation {
      flex: 2;
      h1 {
        font-size: 2.4em;
        font-family: "Montserrat";
        color: #fff;
        line-height: 40px;
        span {
          color: ${(props) => props.theme.lightColor};
          font-weight: bold;
        }
      }
      div {
        margin: 35px 0 45px 0;
        p {
          color: ${(props) => props.theme.textColor};
          margin-top: 10px;
          line-height: 25px;
          width: 80%;
          opacity: 53%;
        }
      }

      button {
        padding: 20px 40px;
        background-color: ${(props) => props.theme.primaryColor};
        color: ${(props) => props.theme.textColor};
        font-weight: bold;
        font-family: "Montserrat";
        font-size: 0.9em;
        outline: none;
        border: none;
        cursor: pointer;
      }
    }

    .animation {
      flex: 1;
    }

    @media screen and (${breakpoints.device.ipad}) {
      display: flex;
      align-items: column;
      text-align: center;
      margin-top: 30px;
      .presentation {
        div {
          p {
            width: 100%;
          }
        }
      }

      .animation {
        display: none;
      }
    }
  }

  .habilidades {
    background-color: ${(props) => props.theme.background};

    .content {
      display: flex;
      align-items: flex-start;
      flex-direction: column;

      .cards {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
      }
    }
    @media screen and (${breakpoints.device.ipad}) {
      .content {
        align-items: center;
        .cards {
          justify-content: center;
        }
      }
    }
  }

  .experiencias {
    background-color: ${(props) => props.theme.background};
    .content {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      .experiences {
        display: flex;
        flex-direction: column;
        gap: 70px;
      }
    }

    @media screen and (${breakpoints.device.ipad}) {
      .content {
        align-items: center;
      }
    }
  }
`;
