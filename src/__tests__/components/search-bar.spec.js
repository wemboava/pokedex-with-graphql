import React from "react";
import { render, fireEvent } from "@testing-library/react";
import SearchBar from "../../components/searchBar";

const mockedHistoryPush = jest.fn();

jest.mock("react-router-dom", () => {
  return {
    useHistory: () => ({
      push: mockedHistoryPush,
    }),
  };
});

jest.mock("@apollo/react-hooks", () => {
  return {
    useQuery: () => {
      return {
        loading: false,
        error: false,
        data: {
          pokemonTypes: {
            list: [],
          },
        },
      };
    },
  };
});

describe("Search Page", () => {
  it("should be possible to do a search by name", () => {
    const { getByPlaceholderText } = render(<SearchBar />);

    const searchField = getByPlaceholderText("Search for pokémon names");

    fireEvent.change(searchField, { target: { value: "pikachu" } });

    fireEvent.submit(searchField);

    expect(mockedHistoryPush).toHaveBeenCalledWith("/pokemon/pikachu");
    // debug();
  });
});
