import React, { useState, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { Container, InputWrapper } from "./styles";

import search from "../../assets/images/search.svg";

const Loader = () => {
  const history = useHistory();
  const [searchValue, setSearchValue] = useState("");

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      history.push(`/pokemon/${searchValue}`);
    },
    [searchValue, history]
  );
  return (
    <Container>
      <form onSubmit={handleSubmit} className="search">
        <InputWrapper>
          <input
            value={searchValue}
            onChange={(event) => setSearchValue(event.target.value)}
            placeholder="Search for pokémon names"
          />
          <button type="button" onClick={handleSubmit}>
            <img className="search-image" src={search} alt="search" />
          </button>
        </InputWrapper>
      </form>
    </Container>
  );
};

export default Loader;
