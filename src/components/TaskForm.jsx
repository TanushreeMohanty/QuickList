import React from 'react';
import {
  TextField,
  Button,
  MenuItem,
  Stack
} from '@mui/material';

const TaskForm = ({ taskData, setTaskData, onSubmit, isEdit }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <Stack spacing={2} mb={3}>
      <TextField
        label="Title"
        name="title"
        value={taskData.title}
        onChange={handleChange}
        fullWidth
      />
      <TextField
        label="Description"
        name="description"
        value={taskData.description}
        onChange={handleChange}
        fullWidth
      />
      <TextField
        select
        label="Priority"
        name="priority"
        value={taskData.priority}
        onChange={handleChange}
        fullWidth
      >
        <MenuItem value="low">Low</MenuItem>
        <MenuItem value="medium">Medium</MenuItem>
        <MenuItem value="high">High</MenuItem>
      </TextField>
      <TextField
        type="date"
        label="Due Date"
        name="dueDate"
        value={taskData.dueDate || ''}
        onChange={handleChange}
        InputLabelProps={{ shrink: true }}
        fullWidth
      />
      <Button variant="contained" onClick={onSubmit}>
        {isEdit ? 'Update Task' : 'Add Task'}
      </Button>
    </Stack>
  );
};

export default TaskForm;
