// App.js
import React, { useState } from 'react';
import { wishListDatadata } from './wishListData';
import Carousel from './Carousel';
import CharmList from './CharmList';
import DeleteAllButton from './DeleteAllButton';
import TitleContainer from './TitleContainer';

function App() {
  const [mixedCharm, setMixedCharm] = useState(wishListDatadata);

  const removeItem = (id) => {
    let newMixedCharm = mixedCharm.filter((charm) => charm.id !== id);
    setMixedCharm(newMixedCharm);
  };

  return (
    <div>
      <TitleContainer count={mixedCharm.length} title="Random Mixed Charm" />

      <CharmList mixedCharm={mixedCharm} removeItem={removeItem} />

      <DeleteAllButton setMixedCharm={setMixedCharm} />

      <TitleContainer count={mixedCharm.length} title="New Product. Luminous Charm" />

      <Carousel />
    </div>
  );
}

export default App;