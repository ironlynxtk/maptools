import React from 'react';
import './App.scss';
import Map from './components/map/Map';
import ImportFile from './components/importFile/ImportFile';
import Zones from './components/zones/Zones';

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="columns">
        <div className="column">
          <Map></Map>
        </div>
        <div className="column">
          <ImportFile></ImportFile>
          <Zones></Zones>
        </div>
      </div>
    </div>
  );
};

export default App;
