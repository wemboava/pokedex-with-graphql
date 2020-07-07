import React from "react";

import { Container, Bar, TypeName } from "./styles";

const DamageBar = ({ title, rate, type, bgColor }) => {
  return (
    <Container>
      <div className="info">
        <span>{title}</span>
        <TypeName bgColor={bgColor}>{type}</TypeName>
      </div>
      <div className="rate">
        <span>{rate}</span> <Bar rate={(rate / 120) * 100} />
      </div>
    </Container>
  );
};

export default DamageBar;
