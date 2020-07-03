import ApolloClient from "apollo-boost";
import { InMemoryCache } from "apollo-cache-inmemory";
import { PokemonTypesMutations } from "./mutations/pokemonTypes";
import { FavoritePokemonsMutations } from "./mutations/favoritePokemons";

const cache = new InMemoryCache();

const client = new ApolloClient({
  uri: "https://graphql-pokemon.now.sh/",
  cache,
  resolvers: {
    Mutation: {
      ...PokemonTypesMutations,
      ...FavoritePokemonsMutations,
    },
  },
});

const initialState = {
  favoritePokemons: [],
  pokemonTypes: {
    __typename: "pokemonsType",
    id: 99,
    current: {
      __typename: "pokemonsType",
      id: 0,
      name: "",
      color: "#fff",
    },
    list: [
      {
        __typename: "pokemonsType",
        id: 1,
        name: "Grass",
        color: "#49D0B1",
      },
      {
        __typename: "pokemonsType",
        id: 2,
        name: "Bug",
        color: "#3de651",
      },
      {
        __typename: "pokemonsType",
        id: 3,
        name: "Water",
        color: "#58A9F4",
      },
      {
        __typename: "pokemonsType",
        id: 4,
        name: "Electric",
        color: "#FFCE4C",
      },
      {
        __typename: "pokemonsType",
        id: 5,
        name: "Fighting",
        color: "#FF4747",
      },
      {
        __typename: "pokemonsType",
        id: 6,
        name: "Ice",
        color: "#57ebf4",
      },
      {
        __typename: "pokemonsType",
        id: 7,
        name: "Fairy",
        color: "#ff91cd",
      },
      {
        __typename: "pokemonsType",
        id: 8,
        name: "Fire",
        color: "#F7776A",
      },
      {
        __typename: "pokemonsType",
        id: 9,
        name: "Psychic",
        color: "#7E528C",
      },
      {
        __typename: "pokemonsType",
        id: 10,
        name: "Ground",
        color: "#B0736E",
      },
      {
        __typename: "pokemonsType",
        id: 11,
        name: "Flying",
        color: "#84d6ff",
      },
      {
        __typename: "pokemonsType",
        id: 12,
        name: "Rock",
        color: "#bdbdbd",
      },
      {
        __typename: "pokemonsType",
        id: 13,
        name: "Normal",
        color: "#ccc",
      },
      {
        __typename: "pokemonsType",
        id: 14,
        name: "Dragon",
        color: "#f7ac3c",
      },
      {
        __typename: "pokemonsType",
        id: 15,
        name: "Poison",
        color: "#BE7CF3",
      },
      {
        __typename: "pokemonsType",
        id: 16,
        name: "Steel",
        color: "#B2B4B5",
      },
    ],
  },
};

cache.writeData({ data: initialState });

export default client;
