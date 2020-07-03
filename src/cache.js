import { InMemoryCache } from "@apollo/client";

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        todos: {
          text: "",
          completed: "",
          id: "",
        },
      },
    },
  },
});

const todosInitialValue = [
  {
    id: 0,
    completed: false,
    text: "Use Apollo Client 3",
  },
];

export const todosVar = cache.makeVar(todosInitialValue);
