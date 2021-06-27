const express = require("express")
const app= express();
const bountyRouter = require('./routes/bountyRouter')
const PORT = 3001

app.use(express.json())

app.use('/bountyHunter', bountyRouter)

app.listen(PORT, () => {
    console.log(`Server running on PORT: ${PORT}`)
})