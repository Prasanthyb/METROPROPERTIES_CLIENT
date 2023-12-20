import React, { useState } from 'react';
import Navbar from './Navbar';
import HeaderView from './HeaderView';
import Props from './Props';
import Searchbar from './Searchbar';
import Cart from './Cart';
import "./cssFiles/styleView.css";

const View = () => {
  // State for toggling between Props and Cart views
  const [show, setShow] = useState(true);
  // State for managing the items in the cart
  const [cart, setCart] = useState([]);
  // State for displaying a warning message when an item is already in the cart
  const [warning, setWarning] = useState(false);

  // Handler for adding items to the cart
  const handleClick = (item) => {
    // Check if the item is already in the cart
    let isPresent = false;
    cart.forEach((product) => {
      if (item._id === product._id) isPresent = true;
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

  // Handler for changing the quantity of items in the cart
  const handleChange = (item, d) => {
    let ind = -1;
    // Find the index of the item in the cart
    cart.forEach((data, index) => {
      if (data._id === item._id) ind = index;
    });

    const tempArr = cart;
    // Update the quantity of the item in the cart
    tempArr[ind].amount += d;

    if (tempArr[ind].amount === 0) tempArr[ind].amount = 1;

    // Update the cart with the modified item
    setCart([...tempArr]);
  };

  return (
    <React.Fragment>
      <Navbar />
      <HeaderView size={cart.length} setShow={setShow} />

      {/* Conditional rendering based on the 'show' state */}
      {show ? (
        <Props className="props" handleClick={handleClick} />
      ) : (
        <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
      )}

      {/* Display a warning message if an item is already in the cart */}
      {warning && (
        <div className='warning'>
          Already Added
        </div>
      )}

      {/* Footer image */}
      <div className="footerimage">
        <img src="/footer.png" alt="" />
      </div>
    </React.Fragment>
  );
};

export default View;
