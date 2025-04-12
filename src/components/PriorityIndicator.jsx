import React from 'react';
import { Box, Tooltip } from '@mui/material';

const PriorityIndicator = ({ priority }) => {
  const getColor = () => {
    switch (priority) {
      case 'high':
        return '#e53935'; // Red
      case 'medium':
        return '#fb8c00'; // Orange
      default:
        return '#43a047'; // Green
    }
  };

  const getLabel = () => {
    switch (priority) {
      case 'high':
        return 'High Priority';
      case 'medium':
        return 'Medium Priority';
      default:
        return 'Low Priority';
    }
  };

  return (
    <Tooltip title={getLabel()} arrow>
      <Box
        role="presentation"
        aria-label={getLabel()}
        sx={{
          ml: 2,
          width: 12,
          height: 12,
          borderRadius: '50%',
          backgroundColor: getColor(),
          boxShadow: '0 0 2px rgba(0,0,0,0.3)',
        }}
      />
    </Tooltip>
  );
};

export default PriorityIndicator;
