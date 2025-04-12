import React, { useState, useEffect } from 'react';
import { Container, TextField, Button, Checkbox, List, ListItem, ListItemText, IconButton, Box, Typography, Snackbar } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const App = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [notification, setNotification] = useState('');

  useEffect(() => {
    // Load tasks from localStorage
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(savedTasks);
  }, []);

  useEffect(() => {
    // Save tasks to localStorage
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (task.trim()) {
      const newTask = { id: Date.now(), text: task, completed: false };
      setTasks([...tasks, newTask]);
      setTask('');
      setNotification('Task Added!');
    }
  };

  const toggleTaskCompletion = (id) => {
    const updatedTasks = tasks.map((t) => 
      t.id === id ? { ...t, completed: !t.completed } : t
    );
    setTasks(updatedTasks);
    setNotification('Task Updated!');
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
    setNotification('Task Deleted!');
  };

  return (
    <Container maxWidth="sm" sx={{ padding: 2 }}>
      <Typography variant="h4" align="center" gutterBottom>
        QuickList
      </Typography>

      <Box mb={2}>
        <TextField
          label="Enter a task"
          variant="outlined"
          fullWidth
          value={task}
          onChange={(e) => setTask(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && addTask()}
        />
      </Box>

      <Button variant="contained" onClick={addTask} sx={{ mb: 2 }} fullWidth>
        Add Task
      </Button>

      <List>
        {tasks.map((task) => (
          <ListItem key={task.id} sx={{ display: 'flex', alignItems: 'center' }}>
            <Checkbox
              checked={task.completed}
              onChange={() => toggleTaskCompletion(task.id)}
              icon={<CheckCircleIcon />}
              checkedIcon={<CheckCircleIcon sx={{ color: 'green' }} />}
            />
            <ListItemText
              primary={task.text}
              sx={{ textDecoration: task.completed ? 'line-through' : 'none' }}
            />
            <IconButton edge="end" onClick={() => deleteTask(task.id)}>
              <DeleteIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>

      <Snackbar
        open={notification.length > 0}
        autoHideDuration={3000}
        onClose={() => setNotification('')}
        message={notification}
      />
    </Container>
  );
};

export default App;
