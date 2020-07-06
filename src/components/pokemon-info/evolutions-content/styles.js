import styled from "styled-components";

export const Container = styled.div`
  padding: 30px 0;
  .actions {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 20px 0;
    @media (min-width: 968px) {
      width: 500px;
      margin: 20px auto;
    }
    button {
      background-color: ${(props) => props.themeColor};
      border: none;
      padding: 10px;
      color: #fff;
      font-weight: 600;
      border-radius: 30px;
      width: 125px;
      box-shadow: -1px 8px 20px -6px ${(props) => props.themeColor};
    }
  }
`;

export const SlideContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (min-width: 968px) {
    width: 500px;
    margin: auto;
  }
  & > img {
    height: 170px;
    margin-left: 15px;
    @media (min-width: 968px) {
      height: 250px;
    }
  }
  & h4 {
    font-size: 1.2em;
    margin-bottom: 10px;
  }
  ul {
    padding: 5px 0 8px 0;
    border-bottom: 0.3px solid rgba(177, 177, 177, 0.27);
    li {
      margin-bottom: 10px;
      color: #bbb;
      font-weight: 600;
      display: flex;
      flex-direction: column;
      & > a {
        color: ${(props) => props.themeColor};
      }
      span {
        display: inline-block;
        & + span {
          color: #555;
          font-weight: 400;
        }
      }
    }
  }
`;
