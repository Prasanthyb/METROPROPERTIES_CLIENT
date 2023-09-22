import React from 'react';
import './styleCard.css';
import CardItem from './CardItem';


const Card = ({ list}) => (
  <div className='list-wrap'>
    {list.map((val) => (
      <CardItem key={val.id} val={val} />
    ))}
  </div>
);

export default Card;













