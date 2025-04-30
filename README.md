# Task Manager Web Application

A simple Task Manager web application where users can **create**, **view**, **update**, and **delete** tasks.  
Each task has the following attributes:
- **Title**
- **Description**
- **Status** (e.g., "pending", "in progress", "completed")
- **Due Date**

## Features
- Create tasks with title, description, status, and due date
- View all tasks in a list
- Edit and update tasks
- Delete tasks
- Update task status (e.g., "pending", "in progress", "completed")
  
## Tech Stack
- **Frontend:** React.js, Axios (for API calls)
- **Backend:** Node.js, Express.js, MongoDB, Mongoose

## Getting Started

### Frontend
1. Clone the repository:
    ```bash
    git clone https://github.com/Vasantha135/task-manager-frontend.git
    ```
2. Navigate to the frontend folder and install dependencies:
    ```bash
    cd task-manager-frontend
    npm install
    ```
3. Start the development server:
    ```bash
    npm start
    ```

### Backend
1. Clone the repository:
    ```bash
    git clone https://github.com/Vasantha135/task-manager-backend.git
    ```
2. Navigate to the backend folder and install dependencies:
    ```bash
    cd task-manager-backend
    npm install
    ```
3. Set up MongoDB (add connection details in `.env` file):
    ```env
    MONGODB_URI=your_mongodb_connection_string
    PORT=5000
    ```
4. Start the backend server:
    ```bash
    npm start
    ```

## API Endpoints (for backend)
- `GET /tasks` – Retrieve all tasks
- `GET /tasks/:id` – Retrieve a single task by ID
- `POST /tasks` – Create a new task
- `PUT /tasks/:id` – Update a task
- `DELETE /tasks/:id` – Delete a task

---

## Contributing

Feel free to fork the repository, create branches, and submit pull requests. For bugs or feature requests, please open an issue.

## License

This project is open-source and available under the [MIT License](LICENSE).
