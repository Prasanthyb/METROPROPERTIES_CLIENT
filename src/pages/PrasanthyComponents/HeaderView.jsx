
import React from 'react';
import './styleHeaderView.css';

const HeaderView = ({size,setShow}) => {
  return (
    <nav>
        <div className="nav_box">
            <span className="my_shop" onClick={()=>setShow(true)}>
                View Property
            </span>
            <div className="cart" onClick={()=>setShow(false)}>
                <span>
                    BOOKED VIEWS
                </span>
                <span>{size}</span>
            </div>
        </div>
    </nav>
  )
}

export default HeaderView