import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import { styled } from '@mui/material/styles';
import FormControlLabel from '@mui/material/FormControlLabel';



const useStyles = styled({
    root: {
      '&$checked': {
        color: '#000',
      },
    },
  checked: {},
  wrap: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft:0,
  },
  label: {
    fontSize: '0.8rem',
    fontFamily: `'Raleway', sans-serif`,
  },
});

const FilterCommon = ({ project,changeChecked}) => {
  const classes = useStyles();
  const { checked, label, id } = project;
  return (
    <div >
      <FormControlLabel
        classes={{
          label: classes.label,
          root: classes.wrap,
        }}
        control={
          <Checkbox
            classes={{
              checked: classes.checked,
              root: classes.root,
            }}
            size='small'
            checked={checked}
            onChange={() => changeChecked(id)}
            inputProps={{ 'aria-label': 'checkbox with small size' }}
          />
        }
        
        label={label}
      
      />
    </div>
  );
};

export default FilterCommon;
