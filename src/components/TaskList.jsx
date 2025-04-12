import React from 'react';
import { List, ListItem, Typography, Box, LinearProgress } from '@mui/material';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onToggle, onEdit, onDelete }) => {
  // Calculate the completion percentage of tasks
  const completedTasks = tasks.filter(task => task.completed).length;
  const totalTasks = tasks.length;
  const completionPercentage = totalTasks === 0 ? 0 : Math.round((completedTasks / totalTasks) * 100);

  return (
    <>
      {/* Progress section with label and bar */}
      <Box sx={{ mb: 2 }}>
        <Typography variant="subtitle1" color="textSecondary" sx={{ mb: 0.5 }}>
          Progress: {completionPercentage}%
        </Typography>
        <LinearProgress
          variant="determinate"
          value={completionPercentage}
          sx={{
            height: 10,
            borderRadius: 5,
            backgroundColor: theme => theme.palette.grey[300],
            '& .MuiLinearProgress-bar': {
              backgroundColor: theme => theme.palette.primary.main,
            },
          }}
        />
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
