# 🟣 Modern Tic Tac Toe – 5x5 Edition

A modern, stylish, and **fully responsive Tic Tac Toe game** built with **HTML, CSS, and Vanilla JavaScript**.
This upgraded version uses a **5×5 board** for a more challenging gameplay experience and introduces **combo-based scoring**, where every valid 3-in-a-row earns points. It combines fun gameplay with a visually appealing, modern UI suitable for both desktop and mobile devices.

---

## 🎮 Features

* ✔ **5×5 Grid** – Expands the traditional Tic Tac Toe for deeper strategy and more possible combos.
* ✔ **Automatic 3-in-a-row detection** – Checks rows, columns, and diagonals in real-time.
* ✔ **Combo scoring system** – Players earn points for each 3-in-a-row; multiple combos can be scored simultaneously.
* ✔ **Live score tracking** – Keeps an updated tally for both Player O and Player X.
* ✔ **Winning cell highlighting** – Visually shows which cells contributed to a winning pattern.
* ✔ **Result popup using SweetAlert2** – Displays winner, scores, or draw in a modern toast style.
* ✔ **Modern purple-themed UI** – Smooth colors, hover effects, and responsive layout.
* ✔ **Mobile and desktop friendly** – Grid scales dynamically based on screen size.
* ✔ **Restart button** – Instantly resets the board, scores, and counted patterns.
* ✔ **Smooth animations** – Hover effects, winning cell highlights, and transitions enhance the gameplay experience.

---

## 🧠 How It Works

1. Players alternate turns placing **O** or **X** on the 5×5 grid.
2. The game checks for all possible **3-cell winning patterns**.
3. Each time a player completes a 3-in-a-row, they earn a point, and the cells are highlighted.
4. Multiple patterns can be counted in a single move.
5. When all 25 cells are filled, a **SweetAlert2 popup** displays:

   * 🏆 The winner
   * 🟣 Score for Player O
   * 🔴 Score for Player X
6. Clicking **Restart Game** resets:

   * The game board
   * Both players’ scores
   * Stored winning patterns

---

## 📁 Project Structure

```
/tic-tac-toe-5x5
│── index.html     # Game layout and UI
│── style.css      # Styling, responsive grid, animations
│── script.js      # Game logic: turns, scoring, patterns, final result
```

---

## 🛠 Technologies Used

* **HTML5** – Structure of the game board and interface
* **CSS3** – Styling, animations, responsive design, hover effects
* **JavaScript (Vanilla)** – Game logic, scoring system, DOM manipulation
* **SweetAlert2** – Stylish result popups

---

## 🚀 How to Play

1. Open **index.html** in any modern browser.
2. Players alternate turns clicking an empty cell to place **O** or **X**.
3. Score points by forming 3-in-a-row horizontally, vertically, or diagonally.
4. The game automatically highlights winning cells.
5. When the board fills, a popup announces the final result.
6. Press **Restart Game** to play again.

---








