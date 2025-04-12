import React, { useState, useEffect } from 'react';
import {
  Typography,
  Modal,
  Box,
  IconButton,
  useTheme,
  Paper
} from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';

import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import TaskControls from './components/TaskControls';
import { loadTasks, saveTasks } from './utils/localStorageUtils';
import LandingPage from './components/LandingPage';

const App = ({ mode, setMode }) => {
  const theme = useTheme();

  const [tasks, setTasks] = useState([]);
  const [taskData, setTaskData] = useState({ title: '', description: '', priority: 'low' });
  const [editMode, setEditMode] = useState(false);
  const [editId, setEditId] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [notification, setNotification] = useState('');
  const [showLandingPage, setShowLandingPage] = useState(true);

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

  const getFilteredTasks = () => {
    let filtered = [...tasks];

    if (filter === 'active') filtered = filtered.filter(task => !task.completed);
    else if (filter === 'completed') filtered = filtered.filter(task => task.completed);
    else if (filter === 'priority') filtered = filtered.filter(task => task.priority === 'high');

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

  const handleLandingPageDone = () => setShowLandingPage(false);

  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '100vh',
        backgroundColor: theme.palette.background.default,
        padding: { xs: 2, md: 4 },
        position: 'relative',
      }}
    >
      {/* Floating Theme Toggle */}
      <IconButton
        sx={{
          position: 'fixed',
          top: 20,
          right: 20,
          zIndex: 10,
          backgroundColor: theme.palette.background.paper,
          border: `1px solid ${theme.palette.divider}`,
          '&:hover': {
            backgroundColor: theme.palette.action.hover,
          },
        }}
        onClick={toggleTheme}
      >
        {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
      </IconButton>

      {showLandingPage ? (
        <LandingPage onLandingPageDone={handleLandingPageDone} />
      ) : (
        <Paper
          elevation={3}
          sx={{
            maxWidth: 800,
            mx: 'auto',
            padding: { xs: 3, md: 5 },
            borderRadius: 4,
            mt: 6,
            backgroundColor: theme.palette.background.paper,
          }}
        >
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

          {/* Edit Modal */}
          <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
            <Box sx={modalStyle(theme)}>
              <Typography variant="h6" mb={2}>Edit Task</Typography>
              <TaskForm
                taskData={taskData}
                setTaskData={setTaskData}
                onSubmit={handleAddOrEdit}
                isEdit={true}
              />
            </Box>
          </Modal>
        </Paper>
      )}
    </Box>
  );
};

// 🧩 Modal Styling Function
const modalStyle = (theme) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  width: '90%',
  maxWidth: 600,
  transform: 'translate(-50%, -50%)',
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary,
  padding: 4,
  borderRadius: 4,
  boxShadow: 24,
});

export default App;
