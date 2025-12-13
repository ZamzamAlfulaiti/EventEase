import express from 'express';
import cors from 'cors';
import Events from './models/Events.js';
import User from './models/Users.js';

const PORT = 8000;
const myserver = express();
myserver.use(cors());
myserver.use(express.json());

myserver.listen(PORT, () => console.log(`EventBase Server is running on port`,PORT));
// Sample route
myserver.get('/', (req, res) => {
    res.send('Welcome to EventBase API');
});

//display all events
myserver.get("/showEvents", async(req, res) => {
    try{
    const events = await Events.find();
    res.send(events);
    }catch(err){console.log(err);}
});

//add new event
myserver.post("/addEvent", async(req, res) => {
    try{
    const newEvent = req.body;
    const result = await Events.create(newEvent);
    if(result)
        res.send({message: "Event added successfully"});
    else
        res.send({message: "Failed to add event"});
    }catch(err){console.log(err);}
});

//delete event
myserver.delete("/deleteEvent/:id", async(req, res) => {
    try{
    const eventId = req.params.id;
    let result = await Events.findByIdAndDelete(eventId);
    if(result)
        res.send({message: "Event deleted successfully"});
    else
        res.send({message: "Event not found"});
    }catch(err){console.log(err);}
});

//update event
myserver.put("/updateEvent/:id", async(req, res) => {
    try{
    const eventId = req.params.id;
    let updateData = req.body;
    let result = await Events.findByIdAndUpdate(
        {id: eventId},
        updateData,
        {new: true}
    );

    if(result)
        res.send({message: "Event updated successfully"});
    else
        res.send({message: "Event not found"});
    }catch(err){console.log(err);}
});

//get event by id
myserver.get("/getEvent/:id", async(req, res) => {
    try{
    const eventId = req.params.id;
    let event = await Events.findById(eventId);
    if((event.data).id)
        res.send(event);
    else
        res.send({message: "Event not found"});
    }catch(err){console.log(err);}
});

//register new user
myserver.post("/register", async(req, res) => {
    try{
    const newUser = req.body;
    const result = await User.create(newUser);
    if(result)
        res.send({message: "User registered successfully"});
    else
        res.send({message: "Failed to register user"});
    }catch(err){console.log(err);}
});

//user login
myserver.post("/login", async(req, res) => {
    try{
    const {email, password} = req.body;
    const user = await User.findOne({email: email, password: password});
    if(user)
        res.send({message: "Login successful", user: user});
    else
        res.send({message: "Invalid email or password"});
    }catch(err){console.log(err);}
});