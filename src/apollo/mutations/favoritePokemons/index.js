import gql from "graphql-tag";
import { GET_FAVORITE_POKEMONS } from "../../queries/favoritePokemons";

export const UPDATE_FAVORITE_POKEMONS = gql`
  mutation updateFavoritePokemons($pokemon: Object!) {
    updateFavoritePokemons(pokemon: $pokemon) @client
  }
`;

export const FavoritePokemonsMutations = {
  updateFavoritePokemons: (_, variables, { cache }) => {
    const data = cache.readQuery({ query: GET_FAVORITE_POKEMONS });

    const alreadyExists = data.favoritePokemons.find(
      (poke) => poke.number === variables.pokemon.number
    );

    let newFavoritePokemons = [];

    if (alreadyExists) {
      newFavoritePokemons = data.favoritePokemons.filter(
        (poke) => poke.number !== alreadyExists.number
      );
    } else {
      newFavoritePokemons = [
        ...data.favoritePokemons,
        { ...variables.pokemon, __typename: "favoritePokemons" },
      ];
    }

    localStorage.setItem(
      "@pokedex/favorite-pokemons",
      JSON.stringify(newFavoritePokemons)
    );

    cache.writeData({
      data: { favoritePokemons: newFavoritePokemons },
    });

    return null;
  },
};
