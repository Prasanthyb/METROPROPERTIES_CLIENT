import React, { useState } from 'react';
import Navbar from './Navbar';
import HeaderView from './HeaderView';
import Searchbar from './Searchbar';
import Cart from './Cart';
import "./cssFiles/styleView.css";

const View = () => {
  // State variables
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false);

  // Handle click event for adding items to the cart
  const handleClick = (item) => {
    let isPresent = false;

    // Check if the item is already present in the cart
    cart.forEach((product) => {
      if (item._id === product._id) {
        isPresent = true;
      }
    });

    if (isPresent) {
      // Display a warning if the item is already in the cart
      setWarning(true);
      setTimeout(() => {
        setWarning(false);
      }, 2000);
      return;
    }

    // Add the item to the cart
    setCart([...cart, item]);
  };

  // Handle change in item quantity in the cart
  const handleChange = (item, change) => {
    let ind = -1;

    // Find the index of the item in the cart
    cart.forEach((data, index) => {
      if (data._id === item._id) {
        ind = index;
      }
    });

    // Create a temporary array to modify the item's quantity
    const tempArr = cart;
    tempArr[ind].amount += change;

    // Ensure that the quantity is at least 1
    if (tempArr[ind].amount === 0) {
      tempArr[ind].amount = 1;
    }

    // Update the cart with the modified item
    setCart([...tempArr]);
  };

  return (
    <React.Fragment>
      <Navbar />
      <HeaderView size={cart.length} setShow={setShow} />

      {/* Render either Searchbar or Cart based on 'show' state */}
      {show ? (
        <Searchbar className="props" handleClick={handleClick} />
      ) : (
        <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
      )}

      {/* Display a warning if the item is already in the cart */}
      {warning && <div className='warning'>Property is already added to your Booked View</div>}
    </React.Fragment>
  );
};

export default View;
