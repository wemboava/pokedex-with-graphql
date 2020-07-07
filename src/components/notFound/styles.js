import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 20px;
  margin: auto;
  max-width: 968px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    margin-bottom: 20px;
    text-align: center;
  }
  h3 {
    margin-bottom: 30px;
    text-align: center;
    a {
      color: #27bff9;
      text-decoration: underline;
    }
  }
  & > div {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    & > img {
      max-width: 100%;
      margin: 30px auto;
    }
  }
`;
