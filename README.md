# Tactic Board ⚽

A highly customizable digital strategy board for visualizing football tactics, creating formations, and exporting strategies as images.

🚀 **Live Demo:** [View App Here](https://tactic-board-three.vercel.app/)

**🛠 Tech Stack**

* **Core:** TypeScript, Next.js, React
* **Styling:** Tailwind CSS
* **Testing:** Vitest
* **Utilities:** html-to-image

**✨ Features**

* Switch between dynamic formations (e.g., 4-4-2, 4-3-3).
* Customize pitch colors and visual themes.
* Personalize player names and jersey numbers.
* Export the strategy board as a downloadable image.

**🧪 Key Test Scenarios**

* **Formation Logic:** Validates that selecting different tactical formations (e.g., 4-4-2, 4-3-3) correctly recalculates coordinates for all 11 players.
* **Data Structure:** Ensures that generated player objects strictly follow the required TypeScript interfaces (id, number, name, position).
* **Edge Cases:** Verifies system stability by testing default fallbacks for missing formation parameters.

###⚙️ How to Run Locally

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/JakubMotyl/tactic-board.git
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd tactic-board
    ```

3.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

4.  **Run the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    ```
