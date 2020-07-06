import styled from "styled-components";

export const Container = styled.div``;

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
