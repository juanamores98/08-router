import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ name, description, type, id }) => {
  const path = `../assets/${type}-${id}.png`;
  return (
    <div className='card m-3 col-12 col-md-4' style={{ width: 200 }}>
      <img className='card-img-top' src={path} alt={id} height='350' />
      <div className='card-body'>
        <h3 className='card-title'>{name}</h3>
        <p className='card-text'>{description}</p>
        <Link className='btn btn-primary' to={`/character/${id}`}>
          Ver más
        </Link>
      </div>
    </div>
  );
};

export default Card;
