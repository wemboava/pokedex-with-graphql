import React from "react";

import { Container, PokeLoader } from "./styles";

const Loader = () => (
  <Container>
    <PokeLoader>
      <div className="poke-button" />
    </PokeLoader>
  </Container>
);

export default Loader;
