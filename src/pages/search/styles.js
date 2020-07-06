import styled from "styled-components";

export const Container = styled.div`
  padding: 30px;
  max-width: 968px;
  margin: auto;
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
