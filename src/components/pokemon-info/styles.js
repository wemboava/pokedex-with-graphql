import styled, { css } from "styled-components";

import bgImage from "../../assets/images/spash-bg.svg";

export const Container = styled.div`
  width: 100%;
  height: 50%;
  max-width: 968px;
  margin: auto;
  background-color: #fff;
  padding: 30px;
  position: absolute;
  bottom: 0;
  border-radius: 30px 30px 0 0;
  z-index: 3;
  @media (min-width: 968px) {
    height: auto;
    min-height: 500px;
    position: initial;
    border-radius: 30px;
    margin-top: 120px;
  }
  @media (min-height: 600px) {
    height: 55%;
  }
  @media (min-height: 650px) {
    height: 58%;
  }
  @media (min-height: 700px) {
    height: 60%;
  }
`;

export const Content = styled.div`
  position: relative;
  z-index: 5;
  & > img {
    width: 150px;
    position: absolute;
    right: calc(50% - 75px);
    top: -155px;
    z-index: 10;
    max-height: 140px;
    object-fit: contain;
  }
  &::before {
    content: "";
    background: url(${bgImage});
    width: 350px;
    height: 350px;
    position: absolute;
    right: calc(50% - 175px);
    top: -271px;
    z-index: 1;
    background-size: cover;
  }
`;

export const TabContent = styled.div``;

export const Tabs = styled.ul`
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: 5;
`;

export const Tab = styled.li`
  width: 33.33%;
  padding-bottom: 8px;
  border-bottom: 2px solid #eee;
  color: #d1d1d1;
  text-align: center;
  font-weight: 600;
  font-size: 1em;
  transition: 0.3s ease-in-out;
  cursor: pointer;
  ${(props) =>
    props.isActivity &&
    css`
      border-bottom: 2px solid #976ba7;
      color: #555;
    `}
`;
