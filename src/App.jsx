import React, { useState, useEffect } from 'react';
import { Container, Typography, Snackbar, Modal, Box } from '@mui/material';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { loadTasks, saveTasks } from './utils/localStorageUtils';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [taskData, setTaskData] = useState({ title: '', description: '', priority: 'low' });
  const [editMode, setEditMode] = useState(false);
  const [editId, setEditId] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [notification, setNotification] = useState('');

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

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        QuickList
      </Typography>

      <TaskForm
        taskData={taskData}
        setTaskData={setTaskData}
        onSubmit={handleAddOrEdit}
        isEdit={false}
      />

      <TaskList
        tasks={tasks}
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
  maxWidth: 500,
  transform: 'translate(-50%, -50%)',
  backgroundColor: 'white',
  padding: 20,
  borderRadius: 4,
};

export default App;
