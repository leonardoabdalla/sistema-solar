import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import Title from './components/Title';
import PlanetCard from './components/PlanetCard';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header> </Header>
        <SolarSystem> </SolarSystem>
        <Title> </Title>
        <PlanetCard> </PlanetCard>
      </div>);
  }
}

export default App;
