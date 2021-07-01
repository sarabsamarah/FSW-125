const express = require("express");
const todoList = express.Router();
const { v4: uuidv4 } = require('uuid');


const tasks = [
    {
        name: "Garden",
        description : "Water the plants, trim the grass and pick ripe fruit",
        imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGB5t98ONKK4oYQu-BqbQk3IeGX4jCh-Flbg&usqp=CAU",
        completed: true,
        _id: uuidv4()
    },
    {
        name: "Yoga",
        description : "Attend one class being taught virtually",
        imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJgr_zLaECCUl4ThjMqSJQabFgpclA_8oxhA&usqp=CAU",
        completed: false,
        _id: uuidv4()
    },
    {
        name: "Haircut",
        description : "Make an appointment to get a haircut",
        imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnRML5b4Pw1K1Oe1f7IjwBcj56m5gNV1H1jg&usqp=CAU",
        completed: true,
        _id: uuidv4()
    },
    {
        name: "Shopping",
        description : "Groceries for the week",
        imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjHlwqoAqfnJuPCmGsX104amgIKe_xqNwVRw&usqp=CAU",
        completed: true,
        _id: uuidv4()
    },
]


//Get All tasks
todoList.route("/")
    .get((req, res) => {
    res.send(tasks)
    })

//Post tasks
    .post((req, res) => {
    const newTodo = req.body
    newTodo._id = uuidv4()
    tasks.push(newTodo)
    res.send(`You haveadded ${newTodo.name} to list!`)
});

//Get One task
todoList.get("/:todoId", (req, res) => {
    const todoId = req.params.todoId
    const todo = req.body
    todo._id = uuidv4()
    const findToDo = tasks.find(todo => todo._id === todoId)
    res.send(findToDo)
})

//Delete task
todoList.delete("/:todoId", (req, res) => {
    const todoId = req.params.todoId
    const todo = req.body
    todo._id = uuidv4()
    const todoIndex = tasks.findIndex(todo => todo._id === todoId)
    tasks.splice(todoIndex, 1)
    res.send(`List item was deleted!`)
})

//Update PUT task
todoList.put("/:todoId", (req, res) => {
    const todoId = req.params.todoId
    const todo = req.body
    todo._id = uuidv4()
    const todoIndex = tasks.findIndex(todo => todo._id === todoId)
    const updatedTodo = Object.assign(tasks[todoIndex], req.body) 
    res.send(updatedTodo)
})


module.exports = todoList