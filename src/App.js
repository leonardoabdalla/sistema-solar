import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import Title from './components/Title';
import PlanetCard from './components/PlanetCard';
import Missions from './components/Missions';
import MissionCard from './components/MissionCard';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header> </Header>
        <SolarSystem> </SolarSystem>
        <Missions> </Missions>
        <Title> </Title>
        <PlanetCard> </PlanetCard>
        <MissionCard> </MissionCard>
      </div>);
  }
}

export default App;
