import React from 'react';
import Grid from '@mui/system/Unstable_Grid';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

const Direction = ({ value, onChange }) => {
  return (
    <Grid
      container
      alignItems="center"
      justifyContent="space-between"
      width="100%"
    >
      <span>Direction</span>
      <ToggleButtonGroup
        color="primary"
        value={value}
        exclusive
        onChange={(e) => onChange(e.target.value)}
        aria-label="Platform"
        size="medium"
      >
        <ToggleButton value="asc">ASC</ToggleButton>
        <ToggleButton value="desc">DESC</ToggleButton>
      </ToggleButtonGroup>
    </Grid>
  );
};

export default React.memo(Direction);
