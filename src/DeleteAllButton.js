import React from 'react';

const DeleteAllButton = ({ setMixedCharm }) => {
  return (
    <div className='btnContainer'>
      <button className='btnDelete change' onClick={() => setMixedCharm([])}>
        Delete All
      </button>
    </div>
  );
};

export default DeleteAllButton;