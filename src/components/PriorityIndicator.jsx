import React from 'react';
import { Box } from '@mui/material';

const PriorityIndicator = ({ priority }) => {
  const getColor = () => {
    switch (priority) {
      case 'high': return 'red';
      case 'medium': return 'orange';
      default: return 'green';
    }
  };

  return (
    <Box
      sx={{
        ml: 2,
        width: 10,
        height: 10,
        borderRadius: '50%',
        backgroundColor: getColor(),
      }}
    />
  );
};

export default PriorityIndicator;
