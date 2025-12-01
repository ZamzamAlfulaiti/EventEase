import mongoose from 'mongoose';

mongoose.connect("mongodb+srv://awtsec1:qwerty123@cluster0.2iiojd5.mongodb.net/EventBase")
    .then(() => console.log("Database connected..."))
    .catch((err) => console.log(err));

export default mongoose;