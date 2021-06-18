const express = require('express')
const app = express();

// app.listen('3000', () => {
//     console.log('our first server using express.js')
// })
const weather= [
    {name:"hurricane", description: "a low pressure tropical storm"}, 
    {name: "typhoon", description:"low pressure storm over the pacific ocean"},
    {name: "tornado", description: "a spinning wind tunnel after a super cell storm"}
]


const clouds = [
    {name: "nimbus", description: "a dense cloud that produces rain and thunderstorms"},
    {name: "cumulonimbus", description: "A light fluffy white cloud"},
    {names: "stratus", description: "Very highe clouds that resemble tunnels"}
]

const events = [
    {name:"hail", description: "rain that freezes into ice"},
    {name: "thunder", description:"rumbling in the sky as a result of unstable air"},
    {name: "lightening", description:"flashes of light in the sky from opposing electral m currents"}
]

const PORT = 7000;

// let users = [
//     {name:'patty',location: 'new york'},
//     {name:'logan', location: 'canada'},
//     {name:'amir', location: 'los angeles'},
//     {name:'satia', location: 'las vegas'}
// ];

app.get ('/weather', (req, res) => {
    res.send(weather)
});

app.get ('/clouds', (req, res) => {
    res.send(clouds)
});

app.get ('/events', (req, res) => {
    res.send(events)
});



// server start logic
app.listen(PORT, () => {
    console.log(`App started on port: ${PORT}`)
});

