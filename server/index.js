import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import * as dotenv from 'dotenv'
dotenv.config()

import postRoutes from './routes/posts.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
app.use(cors());

// set routes
app.use('/posts', postRoutes);

// connect with MongoDB
console.log(process.env)
const CONNECTION_URL = process.env.CONNECTION_URL


mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server is running on ${PORT}`)))
    .catch( error => console.log(error));

