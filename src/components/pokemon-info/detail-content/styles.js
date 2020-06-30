import styled from "styled-components";

export const Container = styled.div`
  padding: 20px 0;
  ul {
    padding: 5px 0 8px 0;
    border-bottom: 0.3px solid rgba(177, 177, 177, 0.27);
    li {
      margin-bottom: 12px;
      color: #bbb;
      font-weight: 600;
      span {
        width: 30%;
        display: inline-block;
        & + span {
          width: 70%;
          color: #555;
          font-weight: 400;
        }
      }
    }
  }
  .info {
    margin-top: 17px;
    h4 {
      margin-bottom: 8px;
    }
  }
`;

export const Types = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export const TypeName = styled.li`
  background-color: ${(props) => props.bgColor};
  color: #fff !important;
  border-radius: 20px;
  padding: 3px 7px;
  font-size: 0.7em;
  margin-right: 10px;
`;
