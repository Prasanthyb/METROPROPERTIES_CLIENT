import React, { useState } from 'react';
import { useEffect, useRef } from 'react';
import "./styleCart.css";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Cart = ({ cart, setCart, handleChange }) => {
  const navigate = useNavigate();
  const form = useRef();

  console.log("Service ID:", process.env.REACT_APP_EMAILJS_SERVICE_ID);
console.log("Template ID:", process.env.REACT_APP_EMAILJS_TEMPLATE_ID);
console.log("User ID:", process.env.REACT_APP_EMAILJS_USER_ID);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      form.current,
      process.env.REACT_APP_EMAILJS_USER_ID
    )


      .then((result) => {
        navigate('/thank', { state: 
          { id: result.text, user_name: form.current.user_name.value } });
        console.log(result.text);
        console.log("message sent")
      }, (error) => {
        console.log(error.text);
      });
  };
 
  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
  }

  return (
    <div>
      <article>
        {cart?.map((item) => (
          <div className="cart_box" key={item.id}>
            <div className="cart_img">
              <img src={item.property_pic} alt={item.name} />
              <p>{item.name}</p>
              <span>{item.level}</span>
            </div>

            <div>
              <span>{item.price}</span>
              <button className="removebutton" onClick={() => handleRemove(item.id)}>Remove</button>
            </div>
          </div>
        ))}
      </article>


      
      

      

      <StyledContactForm style={{ marginLeft: "30rem",fontWeight: "bold" }}>
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
        
      </StyledContactForm>
    </div>
  )
}

export default Cart;

// Styles
const StyledContactForm = styled.div`
  width: 400px;

  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;

    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    label {
      margin-top: 1rem;
    }

    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: rgb(249, 105, 14);
      color: white;
      border: none;
    }
  }
`;