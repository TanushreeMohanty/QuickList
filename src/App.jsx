import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Snackbar,
  Modal,
  Box,
  IconButton,
  useTheme
} from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';

import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import TaskControls from './components/TaskControls';
import { loadTasks, saveTasks } from './utils/localStorageUtils';

const App = ({ mode, setMode }) => {
  const theme = useTheme();

  const [tasks, setTasks] = useState([]);
  const [taskData, setTaskData] = useState({ title: '', description: '', priority: 'low' });
  const [editMode, setEditMode] = useState(false);
  const [editId, setEditId] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [notification, setNotification] = useState('');

  // Filter, Sort, Search
  const [filter, setFilter] = useState('all');
  const [sortBy, setSortBy] = useState('title');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    setTasks(loadTasks());
  }, []);

  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  const handleAddOrEdit = () => {
    if (!taskData.title || !taskData.description) return;

    if (editMode) {
      const updated = tasks.map(t => t.id === editId ? { ...t, ...taskData } : t);
      setTasks(updated);
      setNotification('Task Edited!');
    } else {
      const newTask = { id: Date.now(), ...taskData, completed: false };
      setTasks([...tasks, newTask]);
      setNotification('Task Added!');
    }

    setTaskData({ title: '', description: '', priority: 'low' });
    setEditMode(false);
    setEditId(null);
    setModalOpen(false);
  };

  const handleEdit = (task) => {
    setTaskData(task);
    setEditMode(true);
    setEditId(task.id);
    setModalOpen(true);
  };

  const handleToggleComplete = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const handleDelete = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
    setNotification('Task Deleted!');
  };

  // Filtering, Sorting, Searching logic
  const getFilteredTasks = () => {
    let filtered = [...tasks];

    if (filter === 'active') {
      filtered = filtered.filter(task => !task.completed);
    } else if (filter === 'completed') {
      filtered = filtered.filter(task => task.completed);
    } else if (filter === 'priority') {
      filtered = filtered.filter(task => task.priority === 'high');
    }

    if (searchQuery.trim()) {
      filtered = filtered.filter(task =>
        task.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (sortBy === 'title') {
      filtered.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortBy === 'priority') {
      const order = { high: 0, medium: 1, low: 2 };
      filtered.sort((a, b) => order[a.priority] - order[b.priority]);
    }

    return filtered;
  };

  const toggleTheme = () => {
    setMode(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4, mb: 4 }}>
      {/* Theme Toggle Button */}
      <IconButton
        sx={{ position: 'absolute', top: 16, right: 16 }}
        onClick={toggleTheme}
        color="inherit"
      >
        {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
      </IconButton>

      <Typography variant="h4" align="center" gutterBottom>
        QuickList
      </Typography>

      <TaskControls
        filter={filter}
        setFilter={setFilter}
        sortBy={sortBy}
        setSortBy={setSortBy}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      <TaskForm
        taskData={taskData}
        setTaskData={setTaskData}
        onSubmit={handleAddOrEdit}
        isEdit={false}
      />

      <TaskList
        tasks={getFilteredTasks()}
        onToggle={handleToggleComplete}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      <Snackbar
        open={!!notification}
        autoHideDuration={3000}
        onClose={() => setNotification('')}
        message={notification}
      />

      <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
        <Box sx={modalStyle}>
          <Typography variant="h6" mb={2}>Edit Task</Typography>
          <TaskForm
            taskData={taskData}
            setTaskData={setTaskData}
            onSubmit={handleAddOrEdit}
            isEdit={true}
          />
        </Box>
      </Modal>
    </Container>
  );
};

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  width: '90%',
  maxWidth: 800,
  transform: 'translate(-50%, -50%)',
  backgroundColor: 'white',
  color: 'black',
  padding: 5,
  borderRadius: 4,
};

export default App;
