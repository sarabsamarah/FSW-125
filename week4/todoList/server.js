const express = require('express');
const app = express();
const morgan = require('morgan')

const PORT = 6000;

app.use(express.json());
app.use(morgan('dev'))

app.use("/todolist", require("./router/todos"));

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`)
});