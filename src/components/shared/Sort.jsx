import React from 'react';
import Grid from '@mui/system/Unstable_Grid';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

const Sort = ({ options, value, onChange }) => {
  return (
    <Grid
      container
      alignItems="center"
      justifyContent="space-between"
      width="100%"
    >
      <span>Sort by</span>
      <FormControl
        sx={{ m: 1, minWidth: 120 }}
        size="small"
        style={{ margin: 0 }}
      >
        <Select value={value} onChange={(e) => onChange(e.target.value)}>
          {options.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Grid>
  );
};

export default React.memo(Sort);
