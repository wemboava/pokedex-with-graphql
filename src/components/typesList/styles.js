import styled from "styled-components";

import pokeball from "../../assets/images/pokeball-bg.png";

export const Container = styled.div`
  padding: 30px;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Item = styled.li`
  width: 47%;
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
