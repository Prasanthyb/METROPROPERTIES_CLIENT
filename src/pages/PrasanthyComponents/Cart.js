import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import './cssFiles/styleCart.css'; 

const Cart = ({ cart, setCart, handleChange }) => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const navigate = useNavigate();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      user_name: form.current.user_name.value,
      user_email: form.current.user_email.value,
      message: form.current.message.value,
      date: date,
      time: time,
    };

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          navigate('/thank', {
            state: {
              id: result.text,
              user_name: form.current.user_name.value,
            },
          });
          console.log(result.text);
          console.log('message sent');
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
  };

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
              <button
                className="removebutton"
                onClick={() => handleRemove(item.id)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </article>

      <div className="details-heading">
        <p>Your Details</p>
      </div>

      <StyledContactForm className="contact-form">
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />

          <label>Date</label>
          <input
            type="date"
            name="user_date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <label>Time</label>
          <input
            type="time"
            name="user_time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />

          <input type="submit" value="Send" />
        </form>
      </StyledContactForm>
    </div>
  );
};

export default Cart;

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
      font-weight: 20px;
    }

    input[type='submit'] {
      margin-top: 2rem;
      margin-bottom: 2rem;
      cursor: pointer;
      background: rgb(249, 105, 14);
      color: white;
      border: none;
    }
  }
`;
