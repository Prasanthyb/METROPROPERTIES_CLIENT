import React from "react";
import Checkbox from "@mui/material/Checkbox";
import { styled } from "@mui/material/styles";
import FormControlLabel from "@mui/material/FormControlLabel";

//------------------ Create a styled component using Material UI's styling API---------------------//

const useStyles = styled({
  root: {
    "&$checked": {
      color: "#000",
    },
  },
  checked: {},
  wrap: {
    width: "100%",
    display: "flex",
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: 0,
  },
});

//-------------------- Define the FilterCommon component-----------------------------------//

const FilterCommon = ({ project, changeChecked }) => {

//------------------ Apply the styles to this component------------------------------------//

  const classes = useStyles();
  const { checked, label, id } = project;

//------------------- Define the label's inline style---------------------------------------//

  const labelStyle = {
    color: "black",
    fontSize: "16px",
    fontWeight: "bold",
  };

  return (
    <div>

{/*------------- FormControlLabel wraps Checkbox and its label-------------------------------- */}

      <FormControlLabel
        control={

//----------------- Checkbox component with custom styling--------------------------------------//

          <Checkbox
            classes={{
              checked: classes.checked,
              root: classes.root,
            }}
            size="small"
            checked={checked}
            onChange={() => changeChecked(id)}
            inputProps={{ "aria-label": "checkbox with small size" }}
          />
        }
  //------------------------- Label with custom style----------------------------------------------//
  
        label={<span style={labelStyle}>{label}</span>}
      />
    </div>
  );
};

export default FilterCommon;
