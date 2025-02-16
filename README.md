# Task Manager REST API 🚀

Welcome to the Task Manager REST API repository! This project was developed during my internship and is a backend REST API built using **Node.js**, **Express**, and **MongoDB**. It includes several modern features such as JWT authentication, request validation, rate limiting, real-time notifications via Socket.IO, email notifications using SendGrid, background job scheduling, file uploads using Cloudinary, and interactive API documentation via Swagger UI.

## Overview

The Task Manager REST API allows you to manage tasks with various levels of access control:

**User Role**: Standard tasks operations.

**Manager/Admin Role**: Access to additional administration endpoints.

## Features

- **JWT Token Based Authentication 🔐**
  Secure authentication using JSON Web Tokens.

- **Request Validation With Joi**
  Ensures robust request data validation.

- **Express-Rate Limit ⚡**
  Protects against brute force attacks by limiting repeated requests.

- **Role-Based Authorization**
  Differentiates access between admin/manager and user.

- **Real-Time Notifications**
  Implemented with Socket.IO.

- **Email Notifications 📧**
  Integrated with SendGrid for sending email alerts.

- **Background Job Scheduling**
  Handles scheduled tasks such as the deletion of failed images.

- **Swagger UI Documentation 📄**
  Interactive API documentation for easy testing and integration.

- **File Uploading**
  Utilizes Cloudinary for seamless file uploads.

## Tech Stack

**Server:** Node, Express, MongoDB, Mongoose, JWT, Joi, Express-Rate-Limit, Socket.IO, SendGrid, Cloudinary, Swagger UI

[ **Note:** While the focus is on backend development, if you expand the project with a client-side application, you might consider tools like React, Redux, and TailwindCSS. ]

## Installation

Follow these steps to run the project on your local machine:

- Clone the repository:

```bash
git clone https://github.com/Harshal1000/task-manager-api.git
```

- Change the directory:

```bash
cd task-manager-restapi
```

- Install dependencies:

```bash
npm install
```

Create and update your .env file with the configuration (see the Environment Configuration section below).

- **Start the application:**

```bash
npm start
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

### MongoDB connection url and the actual cluster name

`CONNECTION_URL`

`appName`

### JWT SECRET

`JWT_SECRET`

### Sendgrid Api Key

`SENDGRID_API`

### Cloudinary configuration

`CLOUDINARY_CLOUD_NAME`

`CLOUDINARY_API_KEY`

`CLOUDINARY_SECRET`

## Happy coding! May your code be bug-free and your coffee strong! 😊
