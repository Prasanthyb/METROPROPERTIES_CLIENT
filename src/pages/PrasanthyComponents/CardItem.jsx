import React from 'react';
import './styleCardItem.css';

const CardItem = ({
  val: { img, title, level,type },
}) => (
  <div className='listItem-wrap'>
    <img src={img} alt='' />
    <header>
      <h4>{title}</h4>
      
    </header>
    <footer>
      <p>
        <h6>{level}|{type}</h6> 
      </p>
      
    </footer>
  </div>
);

export default CardItem;