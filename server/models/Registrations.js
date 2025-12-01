import mongoose from "mongoose";

const regSchema = new mongoose.Schema({
    eventId: { type: mongoose.Schema.Types.ObjectId, ref: "events" },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
    status: { type: String, enum: ["joined", "cancelled"], default: "joined" }
}, {
    timestamps: true
});
const Registrations = mongoose.model("joins", regSchema);
export default Registrations;
