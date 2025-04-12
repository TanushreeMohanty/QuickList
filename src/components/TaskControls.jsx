import React from 'react';
import { Box, TextField, ToggleButtonGroup, ToggleButton, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const TaskControls = ({ filter, setFilter, sortBy, setSortBy, searchQuery, setSearchQuery }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        gap: 2,
        alignItems: 'center',
        justifyContent: 'space-between',
        mb: 3,
        mt: 2,
      }}
    >
      {/* 🔍 Search */}
      <TextField
        label="Search Task"
        variant="outlined"
        size="small"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      {/* 🔘 Filter */}
      <ToggleButtonGroup
        value={filter}
        exclusive
        onChange={(e, newFilter) => {
          if (newFilter !== null) setFilter(newFilter);
        }}
        size="small"
        color="primary"
      >
        <ToggleButton value="all">All</ToggleButton>
        <ToggleButton value="active">Active</ToggleButton>
        <ToggleButton value="completed">Completed</ToggleButton>
      </ToggleButtonGroup>

      {/* ↕️ Sort */}
      <FormControl size="small" sx={{ minWidth: 120 }}>
        <InputLabel>Sort By</InputLabel>
        <Select
          value={sortBy}
          label="Sort By"
          onChange={(e) => setSortBy(e.target.value)}
        >
          <MenuItem value="title">Title</MenuItem>
          <MenuItem value="priority">Priority</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default TaskControls;
