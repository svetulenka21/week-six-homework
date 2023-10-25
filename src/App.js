import './App.css';
import { data } from './data';
import { dataTwo } from './dataTwo';
import { useState } from 'react';

function App() {
  const [mixedCharm, setMixedCharm] = useState(data);
  const [newItem, setNewItem] = useState(0);
  const {idTwo, descriptionTwo, priceTwo, imageTwo} = dataTwo[newItem];

  const removeItem = (id) => {
    let newMixedCharm = mixedCharm.filter((charm) => charm.id !== id);
    setMixedCharm(newMixedCharm);
  }

  const previousClick = () => {
    setNewItem((bead => {
      bead --;
      if(bead < 0) {
        return dataTwo.length - 1;
      }
      return bead;
    }))
  }

  const nextClick = () => {
    setNewItem((bead => {
      bead ++;
      if(bead > dataTwo.length -1) {
        bead = 0;
      }
      return bead;
    }))
  }

  return (
    <div>
      <div className='titleContainer'>
      <h1><span>{mixedCharm.length}</span> Random Mixed Charm</h1>
      </div>
      <div className='mainContainer'>
        {mixedCharm.map((item, index) => {
        const {id, description, price, image} = item;
        return(
          <div className='container' key={index}>
            <div>
              <h2><span>{id}</span> - {description}</h2>
            </div>
            <div>
              <img src={image} alt="Beads" width="350px" />
            </div>
            <div>
              <h3>From <font color='rgb(107, 237, 74)'><i><bold>{price}</bold></i></font></h3>
            </div>
            <div>
              <button className='change btnRemove' onClick={() => removeItem(id)}>Remove</button>
            </div>
          </div>
        )
      })}
      </div>
      <div className='btnContainer'>
        <button className='btnDelete change' onClick={() => setMixedCharm([])}>Delete All</button>
      </div>
      <div className='titleContainer'>
        <h2>New Product. {newItem.length} Luminous Charm</h2>
      </div>
      <div className='secondMainContainer'>
      <div>
        <h2><span>{idTwo}</span> - {descriptionTwo}</h2>
      </div>
      <div>
        <img src={imageTwo} alt="Beads" width='400px' />
      </div>
      <div>
      <h3>From <font color='rgb(107, 237, 74)'><i><bold>{priceTwo}</bold></i></font></h3>
      </div>
      <div>
        <button className='btnCarousel' onClick={previousClick}>Previous</button>
        <button className='btnCarousel' onClick={nextClick}>Next</button>
      </div>
      <div>
        <p><font size='1'>Photos was taken from: https://clouddiy.shop</font></p>
      </div>
      </div>
    </div>
  );
}

export default App;
