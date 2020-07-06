import React from "react";

import SearchBar from "../searchBar";

import { Container } from "./styles";

import notFoundPoke from "../../assets/images/not-found.gif";

const NotFound = ({ pokemon }) => (
  <Container>
    <h2>Uai, we did not find any pokemon with the name "{pokemon}" :')</h2>
    <h3>
      Try again or <a href="/">go to home!</a>
    </h3>
    <SearchBar />
    <div>
      <img src={notFoundPoke} alt="pikachu" />
    </div>
  </Container>
);

export default NotFound;
