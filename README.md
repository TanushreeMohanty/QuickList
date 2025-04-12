# QuickList
This is a Todo App created using React.js

## Features added till now
2. **Task Operations:**
   - **Add Task**: A form with a title and description field, with an "Add Task" button.
   - **Edit Task**: Option to edit task title/description inline or through a modal.
   - **Delete Task**: Option to delete a task with confirmation.
   - **Mark Task as Completed**: A checkbox to mark a task as completed and visually differentiate it (strikethrough or color change).
   - **Task Priority**: Ability to set priority (low, medium, high) using a dropdown or color-coded indicators.
   
3. **LocalStorage as Database:**
   - **Save Tasks**: Tasks will be stored in `localStorage` to persist between page refreshes.
   - **Load Tasks**: On app initialization, tasks should load from `localStorage` if available.
   - **Update Tasks**: Modify task details and update in `localStorage`.
   - **Delete from LocalStorage**: When tasks are deleted, remove them from `localStorage`.

4. **Task Filtering and Sorting:**
   - **Filter Tasks**: Filter tasks by "All", "Active", "Completed", or "Priority".
   - **Sort Tasks**: Sort tasks by title or priority.
   - **Search Bar**: A search input field to filter tasks by their titles.

6. **Task Management Features:**
   - **Completion Percentage**: Display a progress bar or percentage showing how many tasks are completed versus total tasks.
   - **Due Date**: Option to set a due date for tasks (Optional). Use a date picker or input field.

7. **User Experience (UX):**
   - **Confirmation Dialogs**: Display a confirmation dialog before deleting a task.
   - **Snackbar Notifications**: Show snackbar notifications for task actions (e.g., task added, task deleted).

8. **Customizable Themes:**
   - **Dark/Light Mode**: Implement light and dark modes using MUI's `ThemeProvider` and a toggle button.
   - **Custom Theme**: Customize primary, secondary, and background colors using MUI's theme customization.