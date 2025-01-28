# Event Planning Dashboard

## Project Overview
This is a simple **Event Planning Dashboard** that allows users to add tasks to a to-do list. The project demonstrates basic HTML structure, CSS for styling, and JavaScript for dynamic functionality.

---

## Live Demo
[Click here to view the live page](https://journal-of-a-coder.github.io/Day-1-Java-Script-DOM-manipulation/)

---

## HTML Structure
The HTML file provides the structure of the dashboard. Below are key elements:

- **Header**:
  ```html
  <header>
      <h1>Event Planning Dash Board</h1>
  </header>
  ```
  This defines the title of the dashboard.

- **Task Input Section**:
  ```html
  <section>
      <h2>Enter your Task</h2>
      <input type="text" id="newTask">
      <button type="button" id="addTaskBtn">Add Task</button>
  </section>
  ```
  Users can enter new tasks using the input field and add them by clicking the "Add Task" button.

- **Task List Section**:
  ```html
  <div id="taskList">
      <h3>To Do List</h3>
  </div>
  ```
  This is where tasks dynamically appear after being added.

---

## JavaScript Functionality
The **JavaScript** code manages the dynamic behavior of the to-do list, specifically adding tasks to the dashboard. Below is the script explanation.

### Full JavaScript Code
```javascript
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', () => {
    const newTask = document.getElementById('newTask').value;
    if (newTask) {
        const taskDiv = document.createElement('div');
        taskDiv.className = 'taskDiv';
        taskDiv.innerHTML = `
        <li>${newTask}</li>
        `;
        taskList.appendChild(taskDiv);
        document.getElementById('newTask').value = '';
    }
});
```

### Explanation of the Code

1. **Getting DOM Elements**:
   ```javascript
   const addTaskBtn = document.getElementById('addTaskBtn');
   const taskList = document.getElementById('taskList');
   ```
   These lines get the button (`Add Task`) and the container where tasks will be added (`taskList`).

2. **Event Listener**:
   ```javascript
   addTaskBtn.addEventListener('click', () => {
   ```
   - Adds a click event listener to the button.
   - The arrow function executes every time the button is clicked.

3. **Fetching Input Value**:
   ```javascript
   const newTask = document.getElementById('newTask').value;
   ```
   - Retrieves the text entered in the input field (`newTask`).
   - Ensures the task is stored temporarily in the `newTask` variable.

4. **Checking for Non-Empty Input**:
   ```javascript
   if (newTask) {
   ```
   - Prevents the addition of empty tasks.
   - Only proceeds if `newTask` has a value.

5. **Creating a New Task Element**:
   ```javascript
   const taskDiv = document.createElement('div');
   taskDiv.className = 'taskDiv';
   ```
   - Creates a new `<div>` element to represent a task.
   - Adds a class name (`taskDiv`) for future styling or reference.

6. **Adding the Task to the DOM**:
   ```javascript
   taskDiv.innerHTML = `
   <li>${newTask}</li>
   `;
   taskList.appendChild(taskDiv);
   ```
   - Uses `innerHTML` to add the task as a list item inside the `taskDiv`.
   - Appends the `taskDiv` to the `taskList` section.

7. **Clearing the Input Field**:
   ```javascript
   document.getElementById('newTask').value = '';
   ```
   - Resets the input field so users can type a new task without manually clearing it.

---

## Why These JavaScript Techniques Were Used

- **`document.getElementById`**:
  - Used to access elements directly by their `id`. This is simple and efficient for small projects.

- **Event Listeners**:
  - `addEventListener` allows the application to react to user interaction (e.g., button clicks).

- **DOM Manipulation**:
  - Methods like `createElement`, `innerHTML`, and `appendChild` dynamically create and add new tasks to the webpage.

- **Conditional Statements**:
  - Ensures only non-empty tasks are added, avoiding unnecessary elements in the task list.

---

## Future Enhancements
1. Add a **delete button** to remove tasks from the list.
2. Allow tasks to be marked as **completed**.
3. Save tasks to **local storage** so they persist across sessions.
4. Improve the UI with CSS for better user experience.

---

## How to Run This Project
1. Copy the code into two files:
   - `index.html`
   - `script.js`
2. Open the `index.html` file in any modern web browser.
3. Enter a task in the input field and click "Add Task" to see it appear in the to-do list.

---

Enjoy managing your tasks effortlessly! 😊

