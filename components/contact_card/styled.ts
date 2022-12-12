import styled from "styled-components";

export const ContactCardStyled = styled.div`
  padding: 20px;
  width: 210px;
  background-color: ${(props) => props.theme.secondaryColor};
  text-align: center;
  color: ${(props) => props.theme.textColor};
  border-radius: 25px;
  transition: ease 0.1s;

  h3 {
    margin: 15px 0 10px 0;
    font-weight: bold;
  }
  p {
    opacity: 53%;
  }

  &:hover {
    background-color: rebeccapurple;
  }
`;
