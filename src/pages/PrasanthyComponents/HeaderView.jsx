
import React from 'react';
import './cssFiles/styleHeaderView.css';

const HeaderView = ({size,setShow}) => {
  return (
    <nav>
        <div className="nav_box">
            <span className="my_shop" onClick={()=>setShow(true)}>
                View Property
            </span>
            <div className="cart" onClick={()=>setShow(false)}>
                <span>
                    BOOK A VIEW
                </span>
                <span>{size}</span>
            </div>
        </div>
    </nav>
  )
}

export default HeaderView