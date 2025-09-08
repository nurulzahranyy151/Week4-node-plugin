# Week4-node-plugin
# Tugas Week 4 Pemrograman Lanjut Web 2025 

## Nurul Qalbi Zahrani - F1D022150

This project is a Node.js script that displays student information, motivational quotes, ASCII art, and a fun squirrel (`cowsay`) output.  
It also accepts input arguments from the terminal to greet a user dynamically.

---

## 📦 Dependencies

This project uses the following Node.js packages:

- [chalk](https://www.npmjs.com/package/chalk) — for colored text in the terminal
- [cowsay](https://www.npmjs.com/package/cowsay) — for ASCII cow or squirrel speech bubbles
- [figlet](https://www.npmjs.com/package/figlet) — for ASCII banners
- [gradient-string](https://www.npmjs.com/package/gradient-string) — for colorful gradient text
- [boxen](https://www.npmjs.com/package/boxen) — for boxed text
- [dayjs](https://www.npmjs.com/package/dayjs) — for date and time formatting

---

## 🛠️ Installation Steps

1. Clone the repository or download the project files.
2. Open a terminal in the project folder.
3. Make sure [Node.js](https://nodejs.org/) is installed (version 18+ recommended).
4. Install dependencies:

```bash
npm install chalk cowsay figlet gradient-string boxen dayjs

Add "type": "module" to package.json to enable ES Module syntax:

{
  "type": "module"
}

▶️ How to Run the Project

Open terminal in the project folder.

Run the project:

node index.js

To pass your name and NIM as input arguments:

node index.js "YourName - YourNIM"

example Output:
![Project Output](output/image.png)
![Project Output 2](output/image-1.png)
![Project Output 3](output/image-2.png)
