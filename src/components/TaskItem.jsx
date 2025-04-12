import React from 'react';
import { ListItem, ListItemText, Checkbox, IconButton, Stack, Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PriorityIndicator from './PriorityIndicator';

const TaskItem = ({ task, onToggle, onEdit, onDelete }) => {
  return (
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
          color: task.completed ? 'gray' : 'black',
        }}
      />
      <Stack direction="row" spacing={1}>
        <IconButton color="primary" onClick={() => onEdit(task)}>
          <EditIcon />
        </IconButton>
        <IconButton color="error" onClick={() => onDelete(task.id)}>
          <DeleteIcon />
        </IconButton>
      </Stack>
      <PriorityIndicator priority={task.priority} />
    </ListItem>
  );
};

export default TaskItem;
