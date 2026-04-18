# Simple ToDo Website

A basic frontend-only ToDo list application built with HTML, CSS, and JavaScript.

## Features

- Add new tasks
- Mark tasks as completed
- Delete tasks
- No data persistence (tasks are lost on page refresh)

## Usage

1. Open `index.html` in a web browser, or run a local server:
   ```
   python3 -m http.server 8000
   ```
   Then visit `http://localhost:8000`

2. Enter a task in the input field and click "Add Task" or press Enter.

3. Click "Complete" to mark a task as done (strikethrough).

4. Click "Delete" to remove a task.

## Files

- `index.html`: The main HTML structure
- `styles.css`: CSS styling
- `script.js`: JavaScript functionality

## Troubleshooting

- Ensure all files are in the same directory.
- If using a local server, make sure the port is not in use.
- For older browsers, some features may not work (uses modern JavaScript).