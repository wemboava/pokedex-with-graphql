import styled from "styled-components";

export const Container = styled.div`
  padding: 30px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const List = styled.ul`
  width: 47%;
`;

export const Types = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-right: 10px;
`;

export const TypeName = styled.li`
  background-color: ${(props) => props.bgColor};
  color: #fff;
  border-radius: 20px;
  padding: 3px 7px;
  font-size: 0.7em;
  & + li {
    margin-top: 10px;
  }
`;

export const Item = styled.li`
  background: #fff;
  font-weight: bold;
  padding: 15px 10px;
  margin: 20px 0;
  border-radius: 12px;
  box-shadow: 0 2px 20px 0 ${(props) => props.bgColor};

  display: flex;
  flex-direction: column;
  align-items: center;

  & div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
  }

  & img {
    height: auto;
    width: 80px;
  }
`;
