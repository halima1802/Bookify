# Bookify

**Bookify** is a feature-rich booking and scheduling system built on the robust **MERN stack**. It provides a seamless user experience through **Context API** for global state management, **JWT authentication** for secure login/signup, **custom React hooks** for reusable logic, and a **dynamic calendar component** for intuitive date and reservation management.

This project is designed to make reservation handling smooth, secure, and efficient, whether for personal projects, small businesses, or enterprise use cases.

---

## Features

* 🔐 **Secure Authentication** – JWT-based login and signup system.
* 🗓️ **Dynamic Calendar** – Interactive React calendar for booking and viewing reservations.
* ⚛️ **Context API Integration** – Simplified and centralized state management across components.
* 🪝 **Custom Hooks** – Encapsulated reusable logic for cleaner and maintainable code.
* ⚡ **MERN Stack** – Robust full-stack architecture with MongoDB, Express.js, React, and Node.js.

---

## Installation and Local Setup

### Clone the repository

```bash
git clone https://github.com/Halima1872/ReservationApp.git
```

---

### Server Setup

1. Navigate to the server folder:

   ```bash
   cd Server
   ```
2. Install dependencies:

   ```bash
   npm install
   ```
3. Create a `.env` file in the root of the Server folder and add the following:

   ```env
   MONGO="YOUR_MONGO_URI_HERE"
   JWT_SECRET="YOUR_JWT_SECRET_HERE"
   ```

   * Create a [MongoDB](https://www.mongodb.com/) account, set up a cluster, and generate a MongoDB URI.
   * Add your own JWT secret key for authentication.
4. Start the server:

   ```bash
   nodemon server.js
   # or
   node server.js
   ```

---

### Client Setup

1. Navigate to the client folder:

   ```bash
   cd Client
   ```
2. Install dependencies:

   ```bash
   npm install
   ```
3. Start the React client:

   ```bash
   npm run dev
   ```

---

## How to Run the Application

1. Start the **server**.
2. Start the **client** in your browser.
3. Create an account or log in with existing credentials.
4. Use the **calendar component** to book reservations.
5. View, manage, and interact with reservations seamlessly.

---

## Tech Stack

* **Frontend:** React, Context API, Custom Hooks, React Calendar
* **Backend:** Node.js, Express.js
* **Database:** MongoDB
* **Authentication:** JWT

