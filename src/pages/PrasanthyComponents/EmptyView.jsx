import React from "react";

const EmptyView = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100%",
      
    }}>
    <img
      style={{
        maxWidth: "500px",
        width: "100%",
      }}
      src="images/projects/empty.gif"
      alt=""
    />
  </div>
);

export default EmptyView;
