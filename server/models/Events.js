import mongoose from "mongoose";
import "../dbconnection.js";
const eventSchema = new mongoose.Schema({
    organizerId: { type: mongoose.Schema.Types.ObjectId, ref: "users"},
    eventId:Number,
    title: String,
    description: String,
    category: String,
    date: String,
    startTime: String,
    endTime: String,
    location: String,
    maxParticipants: Number,
    visibility: { type: String, enum: ["public", "private"], default: "public" },
    imageUrl: String,
});

const Events = mongoose.model("events", eventSchema);
export default Events;
