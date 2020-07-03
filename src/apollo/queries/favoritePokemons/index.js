import gql from "graphql-tag";

export const GET_FAVORITE_POKEMONS = gql`
  query GetFavoritePokemons {
    favoritePokemons @client {
      id
      number
      name
      image
      types
    }
  }
`;
