import gql from "graphql-tag";

export const GET_ALL_POKEMONS = gql`
  {
    pokemons(first: 151) {
      id
      number
      name
      image
      weaknesses
      types
      attacks {
        special {
          name
          type
          damage
        }
      }
      evolutions {
        id
        number
        name
        weight {
          minimum
          maximum
        }
        attacks {
          fast {
            name
            type
            damage
          }
        }
      }
    }
  }
`;

export const GET_POKEMON = gql`
  query GetPokemon($name: String) {
    pokemon(name: $name) {
      id
      number
      name
      image
      classification
      height {
        minimum
        maximum
      }
      weight {
        minimum
        maximum
      }
      resistant
      weaknesses
      types
      attacks {
        fast {
          name
          type
          damage
        }
        special {
          name
          type
          damage
        }
      }
      evolutions {
        id
        number
        name
        image
        classification
        height {
          minimum
          maximum
        }
        weight {
          minimum
          maximum
        }
      }
    }
  }
`;
