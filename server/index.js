import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import './dbconnection.js';

const myserver = new express();
myserver.use(express.json());
myserver.use(cors());

const PORT = 5000;
myserver.listen(PORT, () => console.log(`Server running...`));



