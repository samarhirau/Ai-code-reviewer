import 'dotenv/config';

import express from 'express'
import path from 'path'
import { app } from './app.js'
import connectDB from './DB/DB.js'

// dotenv.config();


const Port = process.env.PORT || 5000
const __dirname = path.resolve();


if (process.env.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname, "../Frontend/dist")));

	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "../Frontend", "dist", "index.html"));
	});
}

connectDB()
    .then(() => {
        app.listen(Port, () => {
            console.log(`Server is running on port ${Port}`)
        })
    })
    .catch((error) => {
        console.log(`Database Connection Error: ${error.message}`)
        process.exit(1)
    })
