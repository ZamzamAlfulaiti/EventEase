import mongoose from "mongoose";

const inquirySchema = new mongoose.Schema({
    eventId: { type: mongoose.Schema.Types.ObjectId, ref: "events" },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
    message: String,
    status: { type: String, enum: ["sent", "seen", "replied"], default: "sent" }
}, {
    timestamps: true
});
const Inquiry = mongoose.model("inquiries", inquirySchema);
export default Inquiry;
