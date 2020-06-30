import styled from "styled-components";

import pokeball from "../../assets/images/pokeball-bg-white.png";

export const Container = styled.div`
  height: 100%;
  background: ${(props) => props.bgColor} url(${pokeball}) no-repeat;
  background-size: 300px;
  background-position: calc(100% + 150px) -110px;

  .back-button {
    background-color: transparent;
    color: #fff;
    border: none;
    font-size: 1.1em;
    display: flex;
    align-items: center;
    font-weight: 600;
    & svg {
      margin-right: 10px;
    }
  }
`;
