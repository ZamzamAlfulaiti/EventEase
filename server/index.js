// server.js
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import multer from 'multer';
import path from 'path';
import './dbconnection.js';
import Events from './models/Events.js';

const myserver = new express();

// Middleware - ORDER MATTERS
myserver.use(cors());
myserver.use(express.json());
myserver.use(express.urlencoded({ extended: true })); // For form data
myserver.use('/uploads', express.static('uploads')); // Serve uploaded files

// Configure multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        const uniqueName = Date.now() + '-' + file.originalname;
        cb(null, uniqueName);
    }
});

const upload = multer({
    storage: storage,
    limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
    fileFilter: (req, file, cb) => {
        const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
        if (allowedTypes.includes(file.mimetype)) {
            cb(null, true);
        } else {
            cb(new Error('Only image files are allowed'));
        }
    }
});

const PORT = 5000;
// --- START SERVER ---
myserver.listen(PORT, () => {
    console.log(`Server running on port ${PORT}...`);
});

// Get all events
myserver.get('/showEvents', async (req, res) => {
    try {
        const eventsData = await Events.find();
        res.send(eventsData);
    } catch (err) {
        console.log(err);
        res.send({ message: 'Error fetching events'});
    }
});

// Create a new event (with file upload)
myserver.post("/createEvent", upload.single('photo'), async (req, res) => {
    try {
        // Build image URL - files are served from /uploads route
        const imageUrl = req.file ? `/uploads/${req.file.filename}` : null;
        
        const newEvent = new Events({
            organizerId: req.body.organizerId || null,
            title: req.body.title,
            description: req.body.description,
            category: req.body.category,
            date: req.body.date,
            startTime: req.body.startTime,
            endTime: req.body.endTime,
            location: req.body.location,
            maxParticipants: req.body.maxParticipants,
            visibility: req.body.visibility,
            imageUrl: imageUrl,
        });

        await newEvent.save();
        res.status(201).send({ message: "Event created successfully", event: newEvent });

    } catch (err) {
        console.log(err);
        res.status(400).send({ message: "Failed to create event", error: err.message });
    }
});

// Get an event by title
myserver.get('/getEvent/:title', async (req, res) => {
    try {
        const { title } = req.params;
        const event = await Events.findOne({ title });

        if (!event) return res.status(404).json({ message: 'Event not found' });

        res.status(200).send(event);
    } catch (err) {
        console.log(err);
        res.status(500).send({ message: 'Error fetching event', error: err.message });
    }
});

// Update an event by title
myserver.put('/updateEvent/:title', async (req, res) => {
    try {
        const { title } = req.params;

        const updatedEvent = await Events.findOneAndUpdate(
            { title },
            { $set: req.body },
            { new: true }
        );

        if (!updatedEvent) return res.status(404).send({ message: 'Event not found' });

        res.status(200).send({ message: 'Event updated successfully', updatedEvent });
    } catch (err) {
        console.log(err);
        res.status(400).send({ message: 'Failed to update event', error: err.message });
    }
});

// Delete an event by title
myserver.delete('/deleteEvent/:title', async (req, res) => {
    try {
        const { title } = req.params;

        const deletedEvent = await Events.findOneAndDelete({ title });

        if (!deletedEvent) return res.status(404).json({ message: 'Event not found' });

        res.status(200).send({ message: 'Event deleted successfully', deletedEvent });
    } catch (err) {
        console.log(err);
        res.status(500).send({ message: 'Error deleting event', error: err.message });
    }
});

export default myserver;