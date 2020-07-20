import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: #b9b9b9;
  font-weight: 600;
`;

export const Illustration = styled.div`
  user-select: none;
  font-size: 80px;
  display: flex;
  pointer-events: none;
  align-items: center;

  img {
    width: 68px;
    margin: 16px;
    opacity: 0.9;
    @media (min-width: 330px) {
      width: 108px;
      margin: 16px;
    }
    @media (min-width: 430px) {
      width: 136px;
      margin: 17px;
    }
    @media (min-width: 600px) {
      width: 170px;
      margin: 24px;
    }
    // Animates the pokeball, keeping it rotating infinitely
    // animation: rotatePokeball 6s 0.2s linear infinite;

    @keyframes rotatePokeball {
      to {
        transform: rotate(360deg);
      }
    }
  }

  @media (min-width: 330px) {
    font-size: 130px;
  }
  @media (min-width: 430px) {
    font-size: 160px;
  }
  @media (min-width: 600px) {
    font-size: 210px;
  }
`;

export const Message = styled.p`
  text-align: center;
  font-size: 14px;
  margin-top: 8px;
  @media (min-width: 330px) {
    font-size: 16px;
    margin-top: 8px;
  }
  @media (min-width: 430px) {
    font-size: 18px;
    margin-top: 7px;
  }
  @media (min-width: 600px) {
    font-size: 22px;
    margin-top: 3px;
  }
`;

export const GoBackButton = styled.button`
  border-radius: 7px;
  border: 0;
  color: #ffffff;
  background-color: #ec1a23;
  font-size: 14px;
  margin-top: 25px;
  width: 103px;
  height: 38px;
  font-family: Roboto;
  box-shadow: 2px 2px 3px 0px #cc9f9f;
  :active {
    background-color: #323232;
  }

  @media (min-width: 330px) {
    width: 122px;
    height: 47px;
    font-size: 16px;
    margin-top: 28px;
  }
  @media (min-width: 430px) {
    width: 130px;
    height: 45px;
    font-size: 16px;
    margin-top: 28px;
  }
  @media (min-width: 600px) {
    width: 146px;
    height: 52px;
    font-size: 18px;
    margin-top: 33px;
  }
`;
