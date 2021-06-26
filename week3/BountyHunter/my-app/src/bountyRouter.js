const express = require("express")
const app= express();
const bountyRouter = express.Router()
const {v4: uuidv4 }= require ('uuid');

const PORT = 3001

app.use(express.json())

const bountyHunter = [
    {
        firstName: "Mando",
        lastName: "TheWay",
       living: false,
        type: "Sith",
        reward: "250",
        _id: uuidv4()
    },
    {
        firstName: "Luke",
        lastName: "Skywalker",
        living: true,
        type: "Jedi",
        reward: "",
        _id: uuidv4()
    },
    {
        firstName: "Tony",
        lastName: "Soprano",
       living: false,
       type: "sith",
        reward: "10000",
        _id: uuidv4()
    }
];


app.post("/", (req, res) => {
    const newBountyHunter = req.body;
    newBountyHunter._id = uuidv4();
    bountyHunter.push(newBountyHunter);
    res.send(`${newBountyHunter.firstName} ${newBountyHunter.lastName} has been added to the database!`)
}) 

// Routes
app.get('/', (req, res) => {
    res.send(bountyHunter)
})

app.listen(3001)



module.exports = bountyRouter