import React from 'react';

const CharmList = ({ mixedCharm, removeItem }) => {
  return (
    <div className='mainContainer'>
      {mixedCharm.map((item, index) => {
        const { id, description, price, image } = item;
        return (
          <div className='container' key={index}>
            <div>
              <h2>
                <span>{id}</span> - {description}
              </h2>
            </div>
            <div>
              <img src={image} alt='Beads' width='350px' />
            </div>
            <div>
              <h3>
                From <font color='rgb(107, 237, 74)'><i><bold>{price}</bold></i></font>
              </h3>
            </div>
            <div>
              <button className='change btnRemove' onClick={() => removeItem(id)}>
                Remove
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CharmList;
