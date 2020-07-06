import React, { useRef } from "react";
import { Link } from "react-router-dom";
import ReactSiema from "sns-react-siema";

import { Container, SlideContent } from "./styles";

const Slide = ({ pokemon, bgColor }) => {
  return (
    <SlideContent themeColor={bgColor}>
      <div>
        <h4>{pokemon.name}</h4>
        <ul>
          <li>
            <span>Species</span>
            <span>{pokemon.classification}</span>
          </li>
          <li>
            <span>Height</span>
            <span>
              {pokemon.height.minimum} - {pokemon.height.maximum}
            </span>
          </li>
          <li>
            <span>Weight</span>
            <span>
              {pokemon.weight.minimum} - {pokemon.weight.maximum}
            </span>
          </li>
          <li>
            <Link to={`/pokemon/${pokemon.name}`}>View more</Link>
          </li>
        </ul>
      </div>
      <img src={pokemon.image} alt="slide" />
    </SlideContent>
  );
};

const EvolutionsContent = ({ evolutions, bgColor }) => {
  const siemaRef = useRef(null);
  const options = {
    resizeDebounce: 250,
    duration: 200,
    easing: "ease-out",
    perPage: 1,
    startIndex: 0,
    draggable: true,
    threshold: 20,
    loop: true,
  };

  return (
    <Container themeColor={bgColor}>
      <div>
        {!evolutions && (
          <h3>This pokemon is already in the last evolution! =D</h3>
        )}
        <ReactSiema ref={siemaRef} {...options}>
          {evolutions?.map((pokemon) => (
            <div key={pokemon.id}>
              <Slide pokemon={pokemon} bgColor={bgColor} />
            </div>
          ))}
        </ReactSiema>
        {evolutions?.length > 1 && (
          <div className="actions">
            <button type="button" onClick={() => siemaRef.current.prev()}>
              Previous
            </button>

            <button type="button" onClick={() => siemaRef.current.next()}>
              Next
            </button>
          </div>
        )}
      </div>
    </Container>
  );
};

export default EvolutionsContent;
