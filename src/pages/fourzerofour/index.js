import React from "react";
import { useHistory } from "react-router-dom";
import { Container, Message, Illustration, GoBackButton } from "./styles";

import pokeballColored from "../../assets/images/pokeball-colored.png";

const FourZeroFour = () => {
  const history = useHistory();
  function handleGoBack() {
    history.push("/");
  }
  return (
    <Container>
      <Illustration>
        4<img alt="0" src={pokeballColored} />4
      </Illustration>
      <Message>Uh... looks like you got lost on the way</Message>
      <GoBackButton onClick={handleGoBack}>Go to home</GoBackButton>
    </Container>
  );
};

export default FourZeroFour;
