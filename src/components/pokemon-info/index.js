import React, { useState, useCallback } from "react";

import AttacksContent from "./attacks-content";
import DetailContent from "./detail-content";
import EvolutionsContent from "./evolutions-content";

import { Container, Tabs, Tab, TabContent, Content } from "./styles";

const PokemonInfo = ({ pokemon }) => {
  const [currentTab, setCurrentTab] = useState("details");

  const handleTabContent = useCallback(() => {
    switch (currentTab) {
      case "details":
        return <DetailContent />;
      case "evolutions":
        return <EvolutionsContent />;
      case "attacks":
        return <AttacksContent />;
      default:
        return <DetailContent />;
    }
  }, [currentTab]);

  return (
    <Container>
      <Content>
        <img src={pokemon.image} alt={pokemon.name} />
        <Tabs>
          <Tab
            isActivity={currentTab === "details"}
            onClick={() => setCurrentTab("details")}
          >
            Details
          </Tab>
          <Tab
            isActivity={currentTab === "evolutions"}
            onClick={() => setCurrentTab("evolutions")}
          >
            Evolutions
          </Tab>
          <Tab
            isActivity={currentTab === "attacks"}
            onClick={() => setCurrentTab("attacks")}
          >
            Attacks
          </Tab>
        </Tabs>
        <TabContent>{handleTabContent()}</TabContent>
      </Content>
    </Container>
  );
};

export default PokemonInfo;