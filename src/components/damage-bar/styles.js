import styled, { css } from "styled-components";

export const Container = styled.div`
  /* margin: 20px 0; */
  & + div {
    margin-top: 20px;
  }
  .info {
    display: flex;
    justify-content: space-between;
    span {
      font-weight: 100;
      font-size: 0.9em;
      margin-bottom: 3px;
      display: block;
      color: #6d6966;
    }
  }
  .rate {
    display: flex;
    align-items: center;
    & > span {
      width: 35px;
    }
  }
`;

export const Bar = styled.div`
  height: 10px;
  width: 100%;
  background-color: #eee;
  border-radius: 15px;
  /* margin-bottom: 5px; */
  position: relative;
  @keyframes load {
    from {
      width: 0%;
    }
  }

  &::before {
    content: "";
    ${(props) =>
      props.rate > 50
        ? css`
            background: radial-gradient(
              81.64% 175.97% at 0% 0%,
              #64b283 0%,
              #68e098 100%
            );
          `
        : css`
            background: radial-gradient(
              81.64% 175.97% at 0% 0%,
              #c98283 0%,
              #f99193 100%
            );
          `}
    display: inline-block;
    padding: 5px 0;
    border-radius: inherit;
    position: absolute;
    top: 0;
    left: 0;
    animation: load 2s 0s;
  }

  &::before {
    width: ${(props) => props.rate}%;
  }
`;

export const TypeName = styled.div`
  background-color: ${(props) => props.bgColor};
  color: #fff;
  border-radius: 20px;
  padding: 3px 7px;
  font-size: 0.7em;
  margin-bottom: 3px;
  & + div {
    margin-top: 10px;
  }
`;
