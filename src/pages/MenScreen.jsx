import React from 'react';
import { Characters } from '../models/Characters';
import Card from '../components/Card';

const MenScreen = () => {
  const mens = Characters.filter((character) => character.type == 'h');
  return (
    <div className='container mt-3'>
      <h1>Men Screen</h1>
      <hr />
      <div className='row'>
        {mens.map((men) => {
          return <Card key={men.id} {...men} />;
        })}
      </div>
    </div>
  );
};

export default MenScreen;
