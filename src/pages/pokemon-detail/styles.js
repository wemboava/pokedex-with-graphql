import styled from "styled-components";

import pokeball from "../../assets/images/pokeball-bg-white.png";

export const HeartButton = styled.div`
  position: relative;

  .heart {
    position: absolute;
    background: url("https://abs.twimg.com/a/1454637594/img/t1/web_heart_animation.png");
    background-position: 0px;
    background-repeat: no-repeat;
    height: 100px;
    width: 100px;
    top: -40px;
    left: -65px;
    pointer-events: none;
  }

  .toggle {
    opacity: 0;
    transform: scale(3);
    position: absolute;
    &:checked + .heart {
      animation: heartAnimate 0.8s steps(28) forwards;
    }
  }

  @keyframes heartAnimate {
    100% {
      background-position: -2800px;
    }
  }
`;

export const Container = styled.div`
  height: 100%;
  background: ${(props) => props.bgColor} url(${pokeball}) no-repeat;
  background-size: 300px;
  background-position: calc(100% + 105px) -112px;

  .header {
    display: flex;
    justify-content: space-between;
    padding: 30px;
    &__back-button {
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
  }
`;
