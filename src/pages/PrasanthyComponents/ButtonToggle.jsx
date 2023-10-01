import React from 'react';
import { ToggleButtonGroup,  styled } from '@mui/material';
import MuiToggleButton from "@mui/material/ToggleButton";



const ButtonToggle = ({ options, value, selectToggle }) => {

  

  const ToggleButton = styled(MuiToggleButton)({
    "&.Mui-selected, &.Mui-selected:hover": {
      color: 'white',
      backgroundColor: 'blue'
    },
    '&:hover:not(.Mui-selected)': {
      backgroundColor: 'brown',
      color: 'white', 
    },
    color: 'black',            
    backgroundColor: 'white'

  });


  return (
    <ToggleButtonGroup   color="secondary"  size="small"
     value={value}
      exclusive
      onChange={selectToggle}  
         
    >
      {options.map(({ label, id, value }) => (
        <ToggleButton 
        
        
        size="small"   key={id} value={value}
        
        style={{
          
          border: '2px solid black', 
          fontWeight: 800,
          width: '115px', 
          height:'30px',            
          fontSize: '12px', 
          borderRadius: '15px',
          
          
         
          
          
          
  }}
        
        >


          {label}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
};

export default ButtonToggle;