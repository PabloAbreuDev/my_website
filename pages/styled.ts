import styled from "styled-components";

type HomesStyledTypes = {
  navVisibile: boolean;
};

export const HomeStyled = styled.div<HomesStyledTypes>`
  section {
    padding: 50px 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .title {
    font-size: 2.2rem;
    color: ${(props) => props.theme.lightColor};
  }

  .content {
    width: 70vw;
  }

  header {
    background-color: ${(props) => props.theme.header};
    height: 50px;
    line-height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    width: 100%;
    z-index: 999;

    .menu-icon {
      color: white;
      cursor: pointer;
      display: none;
    }
    nav {
      ul {
        display: flex;
        gap: 30px;
        transition: ease 0.1s all;
        li {
          color: ${(props) => props.theme.textColor};
          font-weight: bold;
          cursor: pointer;
          &:hover {
            color: ${(props) => props.theme.primaryColor};
          }
        }
      }
    }

    @media screen and (max-width: 850px) {
      justify-content: flex-end;

      .menu-icon {
        display: block;
        margin-right: 20px;
      }

      nav {
        position: absolute;
        display: ${(props) => (props.navVisibile ? "flex" : "none")};
        align-items: center;
        top: 50px;
        left: 0;
        width: 100%;
        background-color: ${(props) => props.theme.header};
        text-align: center;
        justify-content: center;

        ul {
          flex-direction: column;
          gap: 0;
        }
      }
    }
  }

  .home {
    background-color: ${(props) => props.theme.background};
    display: flex;

    .content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .presentation {
        width: 40%;
        h1 {
          font-size: 2.2rem;
          color: ${(props) => props.theme.textColor};
          line-height: 40px;

          #myName {
            font-weight: 600;
            color: ${(props) => props.theme.lightColor};
          }
        }

        p {
          line-height: 30px;
          margin-top: 25px;
          color: #d9d9d9;
          margin-bottom: 50px;
        }

        .btn-download {
          padding: 20px 45px;
          background-color: ${(props) => props.theme.primaryColor};
          color: ${(props) => props.theme.textColor};
          font-weight: bold;
          cursor: pointer;
          transition: all ease 0.2s;

          &:hover {
            background-color: #3d5676;
          }
        }
        @media screen and (max-width: 850px) {
          width: 100%;
        }
      }
    }
    @media screen and (max-width: 850px) {
      .presentation {
        width: 100%;
      }
      .photo {
        display: none;
      }
    }
  }

  .habilidades {
    background-color: ${(props) => props.theme.background};

    .card-area {
      margin-top: 50px;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
    }
  }
`;
