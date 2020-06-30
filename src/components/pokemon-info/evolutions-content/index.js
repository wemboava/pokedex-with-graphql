import React, { useRef } from "react";
import ReactSiema from "sns-react-siema";

import { Container, SlideContent } from "./styles";

const Slide = ({ pokemon }) => {
  return (
    <SlideContent>
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
        <ReactSiema ref={siemaRef} {...options}>
          {evolutions.map((pokemon) => (
            <div>
              <Slide pokemon={pokemon} />
            </div>
          ))}
        </ReactSiema>
        {evolutions.length > 1 && (
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
