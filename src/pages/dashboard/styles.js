import styled from "styled-components";

import pokeball from "../../assets/images/pokeball-bg.png";

export const Container = styled.div`
  padding: 40px 30px;
  max-width: 968px;
  margin: auto;
  h1 {
    margin-bottom: 20px;
    font-weight: bold;
  }

  h3 {
    margin: 30px 0 5px 0;
  }

  .header {
    display: flex;
    justify-content: space-between;
    &__back-button {
      background-color: transparent;
      color: #555;
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

  .search {
    margin: 30px 0 30px 0;
  }
`;

export const InputWrapper = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 30px;
  padding: 5px 10px 5px 0;
  box-shadow: 1px 1px 12px -2px #ddd;
  border: 1px solid rgba(221, 221, 221, 0.38);
  button {
    border: none;
    background-color: transparent;
    img {
      width: 25px;
    }
  }
  input {
    width: 100%;
    border: none;
    color: #555;
    background-color: transparent;
    padding: 0 15px;
  }
`;

export const FavoriteButton = styled.div`
  background: #3067ad url(${pokeball}) no-repeat;
  background-position: right;
  background-size: 75px;
  color: #f8c508;
  font-weight: bold;
  padding: 10px 15px;
  margin: 10px 0;
  border-radius: 12px;
  box-shadow: 0 2px 20px 0 #3067ad;
  display: flex;
  align-items: center;
  & svg {
    width: 25px;
    margin-left: 15px;
  }
`;
