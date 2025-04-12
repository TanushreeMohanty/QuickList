import React, { useState } from 'react';
import {
  ListItem,
  ListItemText,
  Checkbox,
  IconButton,
  Stack,
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button
} from '@mui/material';

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PriorityIndicator from './PriorityIndicator';

const TaskItem = ({ task, onToggle, onEdit, onDelete }) => {
  const [confirmOpen, setConfirmOpen] = useState(false);

  const handleDelete = () => {
    onDelete(task.id);
    setConfirmOpen(false);
  };

  return (
    <>
      <ListItem sx={{ display: 'flex', alignItems: 'center' }}>
        <Checkbox
          checked={task.completed}
          onChange={() => onToggle(task.id)}
          icon={<CheckCircleIcon />}
          checkedIcon={<CheckCircleIcon sx={{ color: 'green' }} />}
        />
        <ListItemText
          primary={task.title}
          secondary={task.description}
          sx={{
            textDecoration: task.completed ? 'line-through' : 'none',
            color: task.completed ? 'text.secondary' : 'text.primary',}}
        />
        <Stack direction="row" spacing={1}>
          <IconButton color="primary" onClick={() => onEdit(task)}>
            <EditIcon />
          </IconButton>
          <IconButton color="error" onClick={() => setConfirmOpen(true)}>
            <DeleteIcon />
          </IconButton>
        </Stack>
        <PriorityIndicator priority={task.priority} />
      </ListItem>

      {/* Confirmation Dialog */}
      <Dialog open={confirmOpen} onClose={() => setConfirmOpen(false)}>
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete the task "<strong>{task.title}</strong>"?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setConfirmOpen(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={handleDelete} color="error">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default TaskItem;
