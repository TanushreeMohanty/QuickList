import React from 'react';
import { List } from '@mui/material';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onToggle, onEdit, onDelete }) => {
  return (
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
  );
};

export default TaskList;
