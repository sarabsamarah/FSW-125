const express = require('express');
const app = express();
const morgan = require('morgan')

const PORT = 4000;

app.use(express.json());
app.use(morgan('dev'))

app.use("/bounties", require("./routing/bountyRouter"));

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`)
});
