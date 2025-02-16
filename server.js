import express from "express";
import dotenv from "dotenv";
import MongoConnect from "./services/database.js";
import ApiError from "./services/ApiError.js";
import userRoutes from "./routes/user.routes.js";
import taskRoutes from "./routes/tasks.routes.js";
import sgMail from "@sendgrid/mail";
import { v2 as cloudinary } from "cloudinary";
import http from "http";
import { initServer } from "./services/socket.js";
import swaggerUi from "swagger-ui-express";
import { specs } from "./swaggerUI/swaggerConfig.js";
import "./services/failedImage.js";

const app = express();
const server = http.createServer(app);

initServer(server);

dotenv.config({
	path: "./.env",
});

cloudinary.config({
	cloud_name: `${process.env.CLOUDINARY_CLOUD_NAME}`,
	api_key: `${process.env.CLOUDINARY_API_KEY}`,
	api_secret: `${process.env.CLOUDINARY_SECRET}`,
});

sgMail.setApiKey(`${process.env.SENDGRID_API}`);

import "./services/reminderEmail.js";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("./public"));

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/tasks", taskRoutes);

//express error handling middleware.
app.use((err, req, res, next) => {
	let statusCode = err.statusCode || 500;
	let message = err.message || "internal server error";
	throw new ApiError(statusCode, message, [], err.stack);
});

await MongoConnect();

server.listen(3000, () => {
	console.log("server is listening on port 3000");
});
