import React from "react";
import { ToggleButtonGroup, styled } from "@mui/material";
import MuiToggleButton from "@mui/material/ToggleButton";

//--------------Define a functional component called ButtonToggle----------------

const ButtonToggle = ({ options, value, selectToggle }) => {

  //------------------- Define a styled component for MuiToggleButton--------------

  const ToggleButton = styled(MuiToggleButton)({
    "&.Mui-selected, &.Mui-selected:hover": {
      color: "white",
      backgroundColor: "blue",
    },
    "&:hover:not(.Mui-selected)": {
      backgroundColor: "lightblue",
      color: "white",
    },
    color: "black",
    backgroundColor: "#D0D0D0",
  });

  return (

    //-------------- Create a ToggleButtonGroup component---------------------

    <ToggleButtonGroup
      color="secondary"
      size="small"
      value={value}
      exclusive
      onChange={selectToggle}>
      
      {/*-----------. Map through the options and create ToggleButton components------------- */}

      {options.map(({ label, id, value }) => (
        <ToggleButton
          size="small"
          key={id}
          value={value}
          style={{
            border: "2px solid  #808080",
            fontWeight: 800,
            width: "117px",
            height: "25px",
            fontSize: "13px",
            borderRadius: "1px",
          }}>
          {label}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
};

//----------------Export the ButtonToggle component as the default export-------------------

export default ButtonToggle;
