const express = require("express")
const bountyRouter = express.Router()
const {v4: uuidv4 }= require ('uuid');



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


bountyRouter.post("/", (req, res) => {
    const newBountyHunter = req.body;
    newBountyHunter._id = uuidv4();
    bountyHunter.push(newBountyHunter);
    res.send(`${newBountyHunter.firstName} ${newBountyHunter.lastName} has been added to the database!`)
}) 

// Routes
bountyRouter.get('/', (req, res) => {
    res.send(bountyHunter)
})





module.exports = bountyRouter