import styled, { keyframes } from "styled-components";

const blink = keyframes`
  from {
    background: #eee;
  }
  to {
    background: #e74c3c;
  }
`;

const shake = keyframes`
  0 {
    transform: translate(0, 0) rotate(0);
  }
  20% {
    transform: translate(-2.5px, 0) rotate(-20deg);
  }
  30% {
    transform: translate(2.5px, 0) rotate(20deg);
  }
  50% {
    transform: translate(-2.5px, 0) rotate(-10deg);
  }
  60% {
    transform: translate(2.5px, 0) rotate(10deg);
  }
  100% {
    transform: translate(0, 0) rotate(0);
  }
`;

const fall = keyframes`
  0% {
    top: -200px;
  }
  60% {
    top: 0;
  }
  80% {
    top: -5px;
  }
  100% {
    top: 0;
  }
`;

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(1, 1, 1, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PokeLoader = styled.div`
  position: relative;
  width: 50px;
  height: 50px;
  background: #fff;
  border: 2.5px solid #000;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: inset -2.5px 2.5px 0 2.5px #ccc;
  animation: ${fall} 0.25s ease-in-out,
    ${shake} 1.25s cubic-bezier(0.36, 0.07, 0.19, 0.97) infinite;
  &::before,
  &::after {
    content: "";
    position: absolute;
  }
  &::before {
    background: red;
    width: 100%;
    height: 50%;
  }
  &::after {
    top: calc(50% - 2.5px);
    width: 100%;
    height: 5px;
    background: #000;
  }
  .poke-button {
    position: absolute;
    top: calc(50% - 7.5px);
    left: calc(50% - 7.5px);
    width: 15px;
    height: 15px;
    background: #7f8c8d;
    border: 2.5px solid #fff;
    border-radius: 50%;
    z-index: 10;
    box-shadow: 0 0 0 2.5px black;
    animation: ${blink} 0.5s alternate infinite;
  }
`;
