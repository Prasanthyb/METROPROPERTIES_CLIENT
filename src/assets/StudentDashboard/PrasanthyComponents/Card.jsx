import React from 'react';
import './styleCard.css';
import CardItem from './CardItem';


const Card = ({ item }) => (
  <div className='list-wrap'>
    {item.map((val) => (
      <CardItem key={val.id} val={val} />
    ))}
  </div>
);

export default Card;













