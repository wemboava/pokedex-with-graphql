import React from "react";

import DamageBar from "../../damage-bar";
import { Container } from "./styles";

const AttacksContent = ({ attacks, bgColor }) => {
  return (
    <Container>
      <h4>Fast</h4>
      {attacks.fast.map((attack) => (
        <DamageBar
          title={attack.name}
          rate={attack.damage}
          type={attack.type}
          bgColor={bgColor}
        />
      ))}

      <h4>Special</h4>
      {attacks.special.map((attack) => (
        <DamageBar
          title={attack.name}
          rate={attack.damage}
          type={attack.type}
          bgColor={bgColor}
        />
      ))}
    </Container>
  );
};

export default AttacksContent;
