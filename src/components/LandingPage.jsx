import React from 'react';
import { Button, Typography, Box, Grid, Container } from '@mui/material';
import {
    TaskAlt,
    Sort,
    Search,
    Delete,
    Edit,
    CheckCircle,
    Event,
    Save,
    DarkMode,
    LightMode,
    FilterList,
    Notifications,
    FormatListBulleted,
    AutoAwesome
  } from '@mui/icons-material';
const LandingPage = ({ onLandingPageDone }) => {

    const features = [
        { name: 'Add Task', icon: <TaskAlt /> },
        { name: 'Edit Task', icon: <Edit /> },
        { name: 'Delete Task', icon: <Delete /> },
        { name: 'Complete Task', icon: <CheckCircle /> },
        { name: 'Set Priority', icon: <Sort /> },
        { name: 'Due Date', icon: <Event /> },
        { name: 'Save to LocalStorage', icon: <Save /> },
        { name: 'Load from LocalStorage', icon: <FormatListBulleted /> },
        { name: 'Search Tasks', icon: <Search /> },
        { name: 'Filter Tasks', icon: <FilterList /> },
        { name: 'Sort Tasks', icon: <Sort /> },
        { name: 'Snackbar Alerts', icon: <Notifications /> },
        { name: 'Dark Mode', icon: <DarkMode /> },
        { name: 'Light Mode', icon: <LightMode /> },
        { name: 'Custom Theme', icon: <AutoAwesome /> }
      ];

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        flexDirection: 'column',
        backgroundColor: '#fffff',
        textAlign: 'center',
        padding: 2,
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
        sx={{ marginBottom: 3 }}
      >
        Get Started
      </Button>

      <Typography variant="h6" paragraph>
        Explore Features:
      </Typography>
      
      <Grid container spacing={2} justifyContent="center" alignItems="center" >
        {features.map((feature, index) => (
          <Grid item key={index}>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              startIcon={feature.icon}
              sx={{
                borderRadius: 5,
                padding: '10px 20px',
                '&:hover': {
                  backgroundColor: '#0056b3',
                  transform: 'scale(1.05)',
                },
                textTransform: 'capitalize',
              }}
            >
              {feature.name}
            </Button>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default LandingPage;
