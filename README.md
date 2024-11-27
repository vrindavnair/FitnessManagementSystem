# FitnessManagementSystem

This project designed as a Role Based Access Control model. This project has two modules
Client Module
Admin/Coach Module

---

## Table of Contents

1. [Introduction](#introduction)
2. [Features](#features)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Technologies Used](#technologies-used)
6. [Folder Structure](#folder-structure)
7. [Contributing](#contributing)
8. [License](#license)
9. [Contact](#contact)

---

## Introduction

Provide a brief overview of the project:

> Fitness Manager is a role-based application designed for gyms or fitness centers.
>  It allows admins, coaches, and clients to manage classes, track progress, and communicate effectively.
> Curd operations are provided in Client and Admin/Coach.
> Client login redirect to Client DashBoard.
> Admin login redirect to Admin DashBoard.
> Coach login redirect to Coach DashBoard.

---

## Features

List the key features of your project:
- Role-based access for Admin, Coach, and Client.
- Personal dashboard for each user type.
- Login/logout with secure authentication.
- Manage schedules, enrollments, and progress tracking.

---

## Installation

Explain how to set up the project locally.

### Prerequisites
- [Node.js](https://nodejs.org/) (v14+)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Steps

1. Clone the repository:
   ```bash
  https://github.com/vrindavnair/FitnessManagementSystem.git
   cd FitnessManageMentSystem

   cd FitnessBackend
   npm install
   cd  FitnessFrontend
   npm install
   

PORT=5000
Mongo_URL="mongodb://localhost:27017/FitnessManageMentSystem"
JWT_SECRET='your-very-secure-secret'

## Backend Start
cd Fitnessbackend
node server

## Frontend Start
cd FitnessFrontend
npm run dev

## For Admins
Log in to the admin dashboard to manage users and classes.
## For Coaches
Log in to see assigned classes and member progress.
## For Clients
Log in to enroll in classes and view fitness progress.

## Technologies Used
Frontend: React.js, Tailwind CSS
Backend: Node.js, Express.js
Database: MongoDB 
Authentication: JWT
