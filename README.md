🥘 FlavourSync Meal Planner

FlavourSync is a full-stack web application that helps users plan meals based on available ingredients and recipes. It's built with a Node.js backend and a modern JavaScript frontend (likely React), making it both powerful and easy to use.

📁 Project Structure

flavoursync/
│
├── client/                # Backend - Express Server
│   ├── models/            # MongoDB models (e.g., Recipe, Ingredient)
│   ├── server.js          # Main server entry point
│   ├── package.json       # Backend dependencies
│
├── frontend/              # Frontend - User Interface
│   ├── public/            # Static files
│   ├── src/               # React app source
│   │   ├── all_recipes.json
│   │   ├── ingredients.json
│   │   ├── gnnthingy.ipynb  # (Optional) ML/AI logic
│   ├── package.json       # Frontend dependencies
│
└── README.md              # Project documentation


Prerequisites

Node.js (v14+)

npm or yarn

Python (optional - for ML logic in gnnthingy.ipynb)

MongoDB (assumed for database)

Setup Instructions

Clone the repository

git clone https://github.com/your-username/flavoursync-meal-planner.git
cd flavoursync-meal-planner

Install Backend Dependencies

cd client
npm install

Install Frontend Dependencies

cd ../frontend
npm install

🧾 Running the Project

Start Backend

cd client
node server.js

Start Frontend

cd ../frontend
npm start

💡 Features

📋 Meal planning based on available ingredients

🥦 Smart ingredient & recipe data management

🧠 (Optional) ML-based recipe recommendations using GNN (from notebook)

🗅️ Full-stack architecture with Node.js backend and frontend framework (React assumed)

🔄 JSON-based recipe and ingredient data for easy updates

📚 Files Overview

all_recipes.json: A dataset of all available recipes

ingredients.json: A list of ingredients with metadata

gnnthingy.ipynb: Jupyter notebook containing possible AI/ML logic (e.g., graph-based meal suggestion engine)

🛠️ Tech Stack

Frontend: React (assumed), HTML/CSS/JS

Backend: Node.js, Express.js

Database: MongoDB (assumed)

AI/ML: Python, Jupyter Notebook (optional)

Package Managers: npm

👩‍💻 Authors

Sowmya Saluru
Zayaan Byramji
Lokesh Kumar K

📌 Future Enhancements

User authentication and meal preferences

Weekly meal calendar with printable export

Nutrition facts integration

Responsive design and mobile support

Integration with health/diet APIs

📄 License

This project is licensed under the MIT License.

🙌 Contributions

Pull requests and stars are always welcome! For major changes, please open an issue first to discuss what you’d like to change.

