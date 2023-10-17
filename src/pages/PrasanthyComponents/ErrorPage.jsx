import React from "react";
import { NavLink } from "react-router-dom";

const buttonStyle = {
  backgroundColor: "blue",
  color: "white",
  padding: "20px 30px",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  marginLeft: "980px",
};
const imgStyle = {
  display: "block",
  margin: "0 auto",
};

const ErrorPage = () => {
  return (
    <div>
      <img style={imgStyle} src="/images/students/error.svg" />
      <div>
        <NavLink to="/">
          <button style={buttonStyle}>GO BACK</button>
        </NavLink>
      </div>
    </div>
  );
};

export default ErrorPage;
