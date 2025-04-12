import React from 'react';
import { List, ListItem, Typography, Box, Checkbox, IconButton } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onToggle, onEdit, onDelete }) => {
  // Calculate the completion percentage of tasks
  const completedTasks = tasks.filter(task => task.completed).length;
  const totalTasks = tasks.length;
  const completionPercentage = totalTasks === 0 ? 0 : Math.round((completedTasks / totalTasks) * 100);

  return (
    <>
      {/* Display progress bar or percentage */}
      <Box sx={{ mb: 2 }}>
        <Typography variant="subtitle1" color="textSecondary">
          Progress: {completionPercentage}%
        </Typography>
      </Box>
      
      <List>
        {tasks.map(task => (
          <TaskItem
            key={task.id}
            task={task}
            onToggle={onToggle}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
      </List>
    </>
  );
};

export default TaskList;
