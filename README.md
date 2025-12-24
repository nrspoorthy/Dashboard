## User Management Dashboard Project Overview

The **User Management Dashboard** is a frontend web application built using **React**, **Vite**, **React Router DOM**, and **Tailwind CSS**.
It allows users to view, search, add, and manage user profiles through a clean and fully responsive interface.

This project demonstrates real-world frontend development practices, including component-based architecture, client-side routing, state management using hooks, and responsive UI design.

---

## Features

* Display users in a responsive dashboard
* Search users by name
* Add a new user with form validation
* View individual user details
* Success animation after adding a user
* Fully responsive UI for mobile, tablet, and desktop

---

## Tech Stack

### Frontend

* React (Functional Components & Hooks)
* Vite
* React Router DOM
* Tailwind CSS
* Fetch API
* AOS (Animate On Scroll)

---

## Project Structure

```
user-management-dashboard/
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── UserCard.jsx
│   │   ├── UserForm.jsx
│   │   ├── Success.jsx
│   │
│   ├── pages/
│   │   ├── Dashboard.jsx
│   │   ├── UserDetails.jsx
│   │
│   ├── context/
│   │   └── UserContext.jsx
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── public/
├── screenshots/
└── README.md
```

---

## API Usage

This project uses a **mock REST API** to fetch user data:

| Method | Endpoint                                                                                 | Description     |
| ------ | ---------------------------------------------------------------------------------------- | --------------- |
| GET    | [https://jsonplaceholder.typicode.com/users](https://jsonplaceholder.typicode.com/users) | Fetch all users |

> Newly added users are managed on the client side for demonstration purposes.

---

## Validation

* Form validation is implemented on the frontend
* All fields are required
* Email format is validated
* Phone number length is validated
* Error messages are shown for invalid inputs

This ensures better user experience and prevents invalid data submission.

---

## State Management

* `useState` is used to manage form data and UI state
* `useEffect` is used to fetch user data
* Context API is used to share user data across components

---

## UI & Styling

* Tailwind CSS is used for styling
* Mobile-first responsive design
* Clean and minimal UI
* Smooth animations using AOS

---

## How to Run the Project

### Frontend

```bash
npm install
npm run dev
```

Open in browser:

```
http://localhost:5173
```

---

## Key Learnings

* Building reusable components in React
* Managing application state using hooks and Context API
* Implementing client-side routing
* Handling form validation in React
* Creating responsive layouts using Tailwind CSS
* Improving user experience with animations

---

## Conclusion

This project showcases a complete **frontend user management application** with clean architecture and best practices.
It is suitable for academic submissions, frontend interviews, and portfolio projects.

---

