import './App.css';
import React, { useState } from 'react';
import { charmListData } from './charmListData';
import Carousel from './Carousel';
import CharmList from './CharmList';

function App() {
  const [mixedCharm, setMixedCharm] = useState(charmListData);

  const removeItem = (id) => {
    let newMixedCharm = mixedCharm.filter((charm) => charm.id !== id);
    setMixedCharm(newMixedCharm);
  };

  return (
    <div>
      <div className='titleContainer'>
        <h1>
          <span>{mixedCharm.length}</span> Random Mixed Charm
        </h1>
      </div>

      <CharmList mixedCharm={mixedCharm} removeItem={removeItem} />

      <div className='btnContainer'>
        <button className='btnDelete change' onClick={() => setMixedCharm([])}>
          Delete All
        </button>
      </div>

      <div className='titleContainer'>
        <h2>New Product. Luminous Charm</h2>
      </div>

      <Carousel />
    </div>
  );
}

export default App;