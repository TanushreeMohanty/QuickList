// utils/notifications.js

export const requestNotificationPermission = () => {
    if ('Notification' in window) {
      Notification.requestPermission().then(permission => {
        console.log(`Notification permission: ${permission}`);
      });
    }
  };
  
  export const showReminderNotification = (task) => {
    if ('Notification' in window && Notification.permission === 'granted') {
      const notification = new Notification(`Reminder: ${task.title}`, {
        body: `Due on: ${task.dueDate}`,
        icon: '/reminder-icon.png', // Optional
      });
  
      notification.onclick = () => {
        window.focus();
      };
    }
  };
  