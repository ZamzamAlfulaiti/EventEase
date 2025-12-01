import mongoose from "mongoose";

const ratingSchema = new mongoose.Schema({
    eventId: { type: mongoose.Schema.Types.ObjectId, ref: "events" },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
    rating: Number,
});
const Rating = mongoose.model("ratings", ratingSchema);
export default Rating;
