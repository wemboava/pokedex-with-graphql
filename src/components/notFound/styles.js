import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: 968px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    margin-bottom: 20px;
  }
  h3 {
    margin-bottom: 30px;
    a {
      color: #27bff9;
      text-decoration: underline;
    }
  }
  & > div {
    & > img {
      margin-top: 30px;
    }
  }
`;
