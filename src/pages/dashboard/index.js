import React, { useState, useCallback } from "react";

import { useHistory } from "react-router-dom";

import TypesList from "../../components/typesList";

import { Container, InputWrapper, FavoriteButton } from "./styles";

import search from "../../assets/images/search.svg";

const Dashboard = () => {
  const history = useHistory();
  const [searchValue, setSearchValue] = useState("");

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      history.push(`pokemon/${searchValue}`);
    },
    [searchValue, history]
  );

  return (
    <Container>
      <h1>
        What pokemon
        <br /> are you looking for?
      </h1>
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
      <div>
        <a href="/">
          <FavoriteButton>
            Favorite Pokémons
            <svg
              width="40"
              height="37"
              viewBox="0 0 40 37"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M29 0C25.52 0 22.18 1.62 20 4.17C17.82 1.62 14.48 0 11 0C4.83 0 0 4.83 0 11C0 18.55 6.8 24.72 17.1 34.07L20 36.7L22.9 34.07C33.2 24.72 40 18.55 40 11C40 4.83 35.17 0 29 0ZM20.21 31.11L20 31.3L19.79 31.11C10.28 22.48 4 16.78 4 11C4 7.01 7.01 4 11 4C14.08 4 17.08 5.99 18.13 8.72H21.86C22.92 5.99 25.92 4 29 4C32.99 4 36 7.01 36 11C36 16.78 29.72 22.48 20.21 31.11Z"
                fill="#f8c508"
              />
            </svg>
          </FavoriteButton>
        </a>
      </div>
      <h3>Try by types</h3>
      <TypesList />
    </Container>
  );
};

export default Dashboard;
