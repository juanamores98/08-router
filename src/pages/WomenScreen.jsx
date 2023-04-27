import React from 'react';
import { Characters } from '../models/Characters';
import Card from '../components/Card';

const WomenScreen = () => {
  const womens = Characters.filter((character) => character.type == 'm');
  return (
    <div className='container mt-3'>
      <h1>Womens Screen</h1>
      <hr />
      <div className='row'>
        {womens.map((women) => {
          return <Card key={women.id} {...women} />;
        })}
      </div>
    </div>
  );
};

export default WomenScreen;
