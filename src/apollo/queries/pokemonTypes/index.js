import gql from "graphql-tag";

export const GET_POKEMON_TYPES = gql`
  query GetPokemonsTypes {
    pokemonTypes @client {
      __typename
      id
      current {
        __typename
        id
        name
        color
      }
      list {
        __typename
        id
        name
        color
      }
    }
  }
`;
