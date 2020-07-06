import styled from "styled-components";
import { lighten, darken } from "polished";

import bgImage from "../../assets/images/splash-teste.svg";

export const Container = styled.div`
  padding: 10px 0 20px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .no-favorite {
    width: 100%;
    padding: 30px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    & > h2 {
      text-align: center;
      margin-bottom: 30px;
    }
    & > div {
      width: 100%;
      & > img {
        max-width: 100%;
      }
    }
  }
`;

export const List = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  & a {
    width: 47%;
    @media (min-width: 968px) {
      width: 31%;
    }
  }
`;

export const Types = styled.ul`
  display: flex;
  margin-top: 10px;
  justify-content: space-between;
  overflow-x: auto;
  z-index: 4;
`;

export const TypeName = styled.li`
  background-color: ${(props) => lighten(0.1, props.bgColor)};
  color: #fff;
  border-radius: 20px;
  padding: 3px 7px;
  font-size: 0.7em;
  & + li {
    margin-left: 10px;
  }
`;

export const Item = styled.li`
  background: #fff;
  font-weight: bold;
  padding: 15px 10px;
  margin: 20px 0;
  border-radius: 12px;
  box-shadow: 0 2px 20px 0 ${(props) => props.bgColor};

  background: ${(props) => props.bgColor} url(${bgImage});
  background-repeat: no-repeat;
  background-position: calc(25%) -10px;
  background-size: 250px;

  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  position: relative;
  transition: all 0.3s;
  @media (min-width: 500px) {
    background-position: calc(45%) -21px;
    background-size: 265px;
  }
  @media (min-width: 768px) {
    background-position: calc(90%) -18px;
  }
  &:hover {
    background: ${(props) => darken(0.1, props.bgColor)} url(${bgImage})
      no-repeat;
    background-repeat: no-repeat;
    background-position: calc(34%) -12px;
    background-size: 235px;
    @media (min-width: 500px) {
      background-position: calc(65%) -25px;
      background-size: 285px;
    }
    @media (min-width: 768px) {
      background-position: calc(100% + 10px) -25px;
    }
  }
  strong {
    z-index: 4;
    font-size: 1.3em;
  }
  & div {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 15px;
  }

  & img {
    width: 100px;
    height: 100px;
    object-fit: contain;
    z-index: 4;
  }
`;
