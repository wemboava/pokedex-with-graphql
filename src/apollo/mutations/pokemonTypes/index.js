import gql from "graphql-tag";
import { GET_POKEMON_TYPES } from "../../queries/pokemonTypes";

export const UPDATE_CURRENT_POKEMON_TYPES = gql`
  mutation updateCurrentPokemonType($typeName: String!) {
    updateCurrentPokemonType(typeName: $typeName) @client
  }
`;

export const PokemonTypesMutations = {
  updateCurrentPokemonType: (_, variables, { cache }) => {
    const data = cache.readQuery({ query: GET_POKEMON_TYPES });

    const currentType = data.pokemonTypes.list.find(
      (type) => type.name === variables.typeName
    );

    cache.writeData({
      data: {
        ...data,
        pokemonTypes: {
          id: 99,
          __typename: "pokemonTypes",
          current: { ...currentType },
          list: [...data.pokemonTypes.list],
        },
      },
    });

    return null;
  },
};
