import React from 'react';
import {
  TextField,
  Button,
  MenuItem,
  Stack,
  useTheme,
  Paper,
} from '@mui/material';

const TaskForm = ({ taskData, setTaskData, onSubmit, isEdit }) => {
  const theme = useTheme();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <Paper
      elevation={3}
      sx={{
        p: 3,
        backgroundColor: theme.palette.mode === 'dark' ? '#1e1e1e' : '#fff',
        color: theme.palette.text.primary,
      }}
    >
      <Stack spacing={3}>
        <TextField
          label="Title"
          name="title"
          value={taskData.title}
          onChange={handleChange}
          fullWidth
          InputLabelProps={{ style: { color: theme.palette.text.secondary } }}
        />
        <TextField
          label="Description"
          name="description"
          value={taskData.description}
          onChange={handleChange}
          fullWidth
          InputLabelProps={{ style: { color: theme.palette.text.secondary } }}
        />
        <TextField
          select
          label="Priority"
          name="priority"
          value={taskData.priority}
          onChange={handleChange}
          fullWidth
          InputLabelProps={{ style: { color: theme.palette.text.secondary } }}
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
          InputLabelProps={{ shrink: true, style: { color: theme.palette.text.secondary } }}
          fullWidth
        />
        <Button variant="contained" onClick={onSubmit}>
          {isEdit ? 'Update Task' : 'Add Task'}
        </Button>
      </Stack>
    </Paper>
  );
};

export default TaskForm;
