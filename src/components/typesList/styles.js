import styled from "styled-components";
import { darken } from "polished";

import pokeball from "../../assets/images/pokeball-bg.png";

export const Container = styled.div``;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  a {
    width: 47%;
    @media (min-width: 968px) {
      width: 31%;
    }
  }
`;

export const Item = styled.li`
  width: 100%;
  background: ${(props) =>
    props.withBgImage
      ? `${props.bgColor} url(${pokeball}) no-repeat`
      : props.bgColor};
  background-position: right;
  background-size: ${(props) => (props.withBgImage ? "75px" : "100%")};
  color: #fff;
  font-weight: bold;
  padding: 15px;
  margin: 10px 0;
  border-radius: 12px;
  box-shadow: 0 2px 20px 0 ${(props) => props.bgColor};
  transition: all 0.3s;
  &:hover {
    background: ${(props) =>
      props.withBgImage
        ? `${darken(0.1, props.bgColor)} url(${pokeball}) no-repeat`
        : props.bgColor};
    background-position: right;
    background-size: ${(props) => (props.withBgImage ? "75px" : "100%")};
  }
`;
