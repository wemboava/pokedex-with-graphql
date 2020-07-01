import styled from "styled-components";

import pokeball from "../../assets/images/pokeball-bg.png";

export const Container = styled.div``;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  a {
    width: 47%;
  }
`;

export const Item = styled.li`
  width: 100%;
  background: ${(props) => props.bgColor} url(${pokeball}) no-repeat;
  background-position: right;
  background-size: 75px;
  color: #fff;
  font-weight: bold;
  padding: 15px;
  margin: 10px 0;
  border-radius: 12px;
  box-shadow: 0 2px 20px 0 ${(props) => props.bgColor};
`;
