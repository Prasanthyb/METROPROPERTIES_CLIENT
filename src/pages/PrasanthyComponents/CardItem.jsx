import React from 'react';
import './styleCardItem.css';

const CardItem = ({
  val: { img, title, level,type },
}) => (
  <div className='listItem-wrap'>
   <figure>
    <img src={img} alt='' />
    </figure>
    <div className="card-data">


    <header>
      <h4>{title}</h4>
      
    </header>
   
     
    <h6 className="space">{level} | {type}</h6>
      
      
    
    </div>
  </div>
);

export default CardItem;