import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:String,
    email: String,
    password: String,
    role: { type: String, enum: ["attendee", "organizer"], default: "attendee" }
});

const Users = mongoose.model("users", userSchema);
export default Users;
