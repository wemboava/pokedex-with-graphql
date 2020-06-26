import React from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";
const Courses = () => (
  <Query
    query={gql`
    {
      pokemon(name: "Pikachu") {
        id
        number
        name
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
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;
      return data.allCourses.map(({ id, title, author, description, topic, url }) => (
        <div key={id}>
          <p>{`${title} by ${author}`}</p>
        </div>
      ));
    }}
  </Query>
);
export default Courses;