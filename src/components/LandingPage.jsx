import React from 'react';
import { Button, Typography, Box } from '@mui/material';

const LandingPage = ({ onLandingPageDone }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        flexDirection: 'column',
        backgroundColor: '#FFFFF',
        textAlign: 'center',
      }}
    >
      <Typography variant="h3" gutterBottom>
        Welcome to QuickList
      </Typography>
      <Typography variant="h5" paragraph>
        Manage your tasks efficiently with QuickList. Start adding tasks and organize your life.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        size="large"
        onClick={onLandingPageDone} // Ensure this triggers the state update
      >
        Get Started
      </Button>
    </Box>
  );
};

export default LandingPage;
