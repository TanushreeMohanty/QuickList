import React from 'react';
import { Box, Button, TextField, FormControl, InputLabel, Select, MenuItem, TextareaAutosize } from '@mui/material';

const TaskForm = ({ taskData, setTaskData, onSubmit, isEdit }) => {
  const handleChange = (e) => {
    setTaskData({ ...taskData, [e.target.name]: e.target.value });
  };

  return (
    <Box>
      <TextField
        label="Task Title"
        name="title"
        fullWidth
        variant="outlined"
        value={taskData.title}
        onChange={handleChange}
      />
      <TextareaAutosize
        name="description"
        minRows={3}
        placeholder="Task Description"
        value={taskData.description}
        onChange={handleChange}
        style={{ width: '100%', marginTop: '1rem', padding: '8px' }}
      />
      <FormControl fullWidth sx={{ mt: 2 }}>
        <InputLabel>Priority</InputLabel>
        <Select name="priority" value={taskData.priority} onChange={handleChange}>
          <MenuItem value="low">Low</MenuItem>
          <MenuItem value="medium">Medium</MenuItem>
          <MenuItem value="high">High</MenuItem>
        </Select>
      </FormControl>
      <Button variant="contained" fullWidth sx={{ mt: 2 }} onClick={onSubmit}>
        {isEdit ? 'Save Changes' : 'Add Task'}
      </Button>
    </Box>
  );
};

export default TaskForm;
