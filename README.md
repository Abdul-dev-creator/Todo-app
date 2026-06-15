# Modern Todo App

A clean, responsive, and functional Todo application built with Vanilla JavaScript, HTML, and CSS.

## Features

- **Add Tasks:** Quickly add new tasks using the "Add Task" button or by pressing the **Enter** key.
- **Mark as Complete:** Toggle the completion status of a task by clicking on its text. Completed tasks are visually represented with a strikethrough and reduced opacity.
- **Delete Tasks:** Remove tasks from your list with a dedicated "Delete" button for each item.
- **Modern UI:** Features a sleek, responsive design with smooth transitions, gradients, and interactive elements.
- **Input Validation:** Prevents adding empty tasks with a simple alert.

## Technologies Used

- **HTML5:** Semantic structure.
- **CSS3:** Custom styling with Flexbox, gradients, and hover effects.
- **JavaScript (ES6+):** Dynamic DOM manipulation and event handling.

## How to Use

1.  Open `todo.html` in any modern web browser.
2.  Type a task into the input field.
3.  Press **Enter** or click **Add Task**.
4.  Click on a task's text to mark it as done.
5.  Click the **Delete** button to remove a task forever.

## Project Structure

- `todo.html`: The main structure of the application.
- `todo.css`: All styling and visual effects.
- `todo.js`: The application logic and interactivity.

## Technical Implementation (TDD)

### Architecture
The application follows a simple **Vanilla JavaScript** architecture focused on direct DOM manipulation.

### Core Logic
- **State Management:** The "state" of the application is maintained directly within the DOM. Each task is an `<li>` element.
- **Task Creation:** 
    - Triggered by a click event on `addBtn` or a `keydown` event (Enter key) on `taskInput`.
    - Dynamically creates `li`, `span`, and `button` elements.
- **Interactivity:**
    - **Completion Toggle:** Each `span` has a click listener that toggles the `.completed` CSS class.
    - **Task Deletion:** Each delete button has an event listener that calls the `.remove()` method on its parent `li`.
- **Keyboard Support:** A listener on the input field maps the "Enter" key to the add button's functionality.

### Styling Strategy
- **Flexbox:** Used for layout and alignment.
- **Transitions:** Applied to `transform` and `box-shadow` for smooth interaction feedback.
- Visual Cues: `cursor: pointer` on interactive elements and distinct color palettes (Indigo for actions, Red for deletions).

## 🚀 Roadmap

Planned features for future releases:
- [ ] **Local Storage:** Keep tasks saved even after the browser is closed.
- [ ] **Dark Mode:** A toggle for light/dark themes.
- [ ] **Priority Levels:** Mark tasks as Low, Medium, or High priority.
- [ ] **Categories:** Group tasks into "Work," "Personal," or "Study."
- [ ] **Drag & Drop:** Reorder tasks easily.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!
1. Fork the project.
2. Create your feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

## 📜 License

Distributed under the MIT License. See `LICENSE` for more information.

## 📬 Contact

Project Link: [https://github.com/yourusername/modern-todo-app](https://github.com/yourusername/modern-todo-app)


