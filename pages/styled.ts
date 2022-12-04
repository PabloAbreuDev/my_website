import styled from "styled-components";

type HomesStyledTypes = {
  navVisibile: boolean;
};

export const HomeStyled = styled.div<HomesStyledTypes>`
  width: 100%;
  header {
    background-color: ${(props) => props.theme.header};
    height: 50px;
    line-height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;

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
`;
