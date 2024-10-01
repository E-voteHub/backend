import express from "express"
import dotenv from "dotenv"
import ConnectDB from "./src/Database/connectDb.js"
import models from "./src/model/Schemas.js"

dotenv.config()
const app = express()
const port = process.env.PORT;
const {User, Vote} = models

// Example usage
const newUser = new User({ Email: 'test@example.com', Password: 'password123', isAdmin: false });
newUser.save().then(() => console.log('User saved!')).catch(err => console.error(err));

const newVote = new Vote({ Name: 'John Doe' });
newVote.save().then(() => console.log('Vote saved!')).catch(err => console.error(err));


// Parse application/json
app.use(express.json());

// Parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.get("/",(req,res)=>{
    res.send(`<h1>This is final year project</h1>`)
})

app.listen(port,(req,res)=>{
    ConnectDB()
    console.log(`Server is running at http://localhost:${port}`)
})