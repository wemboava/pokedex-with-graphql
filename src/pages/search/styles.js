import styled from "styled-components";

export const Container = styled.div`
  padding: 30px;
  h1 {
    margin: 20px 0;
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
