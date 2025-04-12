import React from 'react';
import {
  Box,
  TextField,
  ToggleButtonGroup,
  ToggleButton,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Paper,
  InputAdornment,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import SortIcon from '@mui/icons-material/Sort';
import FilterAltIcon from '@mui/icons-material/FilterAlt';

const TaskControls = ({ filter, setFilter, sortBy, setSortBy, searchQuery, setSearchQuery }) => {
  return (
    <Paper
      elevation={3}
      sx={{
        p: 2,
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 2,
        borderRadius: 3,
        backgroundColor: 'background.paper',
        flexWrap: 'wrap',
        mb: 2,
      }}
    >
      {/* 🔍 Search */}
      <TextField
        label="Search Task"
        variant="outlined"
        size="small"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon color="action" />
            </InputAdornment>
          ),
        }}
        sx={{ flex: 1, minWidth: '200px' }}
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
        sx={{ flexShrink: 0 }}
      >
        <ToggleButton value="all">
          <FilterAltIcon fontSize="small" sx={{ mr: 1 }} />
          All
        </ToggleButton>
        <ToggleButton value="active">Active</ToggleButton>
        <ToggleButton value="completed">Completed</ToggleButton>
      </ToggleButtonGroup>

      {/* ↕️ Sort */}
      <FormControl size="small" sx={{ minWidth: 150, flexShrink: 0 }}>
        <InputLabel>Sort By</InputLabel>
        <Select
          value={sortBy}
          label="Sort By"
          onChange={(e) => setSortBy(e.target.value)}
          startAdornment={<SortIcon fontSize="small" sx={{ mr: 1 }} />}
        >
          <MenuItem value="title">Title</MenuItem>
          <MenuItem value="priority">Priority</MenuItem>
        </Select>
      </FormControl>
    </Paper>
  );
};

export default TaskControls;
