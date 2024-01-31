import React from 'react';

const TitleContainer = ({ count, title }) => {
  return (
    <div className='titleContainer'>
      <h1>
        <span>{count}</span> {title}
      </h1>
    </div>
  );
};

export default TitleContainer;