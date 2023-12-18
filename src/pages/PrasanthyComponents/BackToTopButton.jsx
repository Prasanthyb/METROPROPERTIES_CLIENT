import React from "react";
import { NavLink } from "react-router-dom";

//----------------------- Define a reusable function to scroll to the top of the page------------------//

const scrollToTop = () => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
};

const BackToTopButton = () => {
  return (
    <div className="App">
      <div className="button-container" style={{ display: "flex" }}>

        {/*--------------------------Back to Top Button------------------------------------ */}

        <button
          style={{
            backgroundColor: "black",
            color: "#fff",
            border: "none",
            padding: "10px 10px",
            cursor: "pointer",
            height: "30px",
            width: "180px",
            borderRadius: "5px",
            fontSize: "14px",
            fontWeight: "bold",
            transition: "color 0.2s",
            marginLeft: "68rem",
          }}
          onClick={scrollToTop}>
          BACK TO TOP
        </button>

        
      </div>
    </div>
  );
};

export default BackToTopButton;
