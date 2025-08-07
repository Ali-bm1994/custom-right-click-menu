# 🖱️ Custom Context Menu with Submenu

A responsive and elegant custom right-click (context) menu built using HTML, CSS, and vanilla JavaScript. This project includes a submenu with dynamic positioning to avoid viewport overflow.

## 🔍 Preview

![context menu screenshot](preview.png) <!-- Optional: Add your own image preview here -->

## 🚀 Features

- Custom context menu on right-click
- Built with pure HTML, CSS, and JavaScript (no libraries/frameworks)
- Smooth submenu with icons (using Font Awesome)
- Smart positioning of the submenu (left/right based on screen space)
- Fully responsive layout

## 📁 File Structure
📦 project-folder/
├── index.html # Main HTML structure
├── style.css # All styles
├── app.js # Core JavaScript logic
├── README.md # Project documentation

## 🛠️ How It Works

- When the user right-clicks, the default context menu is disabled.
- A custom menu appears at the click position (`.container`).
- If there is not enough space on the right side of the screen, the submenu (`.Share-menu`) opens to the left.
- The menu disappears when the user clicks anywhere else.

## 📦 Technologies Used

- HTML5
- CSS3 (Flexbox, Gradients)
- JavaScript (Vanilla)
- Font Awesome (for icons)

## 🧠 Learning Points

- How to override browser context menus
- Handling mouse coordinates and window dimensions
- Dynamic submenu placement based on screen boundaries
- Menu visibility toggling
🙌 Author
Ali BM
Front-end enthusiast & JavaScript learner
