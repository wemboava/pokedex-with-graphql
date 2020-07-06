import React from "react";
import { Link } from "react-router-dom";

import SearchBar from "../searchBar";

import { Container } from "./styles";

import notFoundPoke from "../../assets/images/not-found.gif";

const NotFound = ({ pokemon }) => (
  <Container>
    <h2>Ué, we did not find any pokemon with the name "{pokemon}" :')</h2>
    <h3>
      Try again or <Link to="/">go to home!</Link>
    </h3>
    <SearchBar />
    <div>
      <img src={notFoundPoke} alt="pikachu" />
    </div>
  </Container>
);

export default NotFound;
