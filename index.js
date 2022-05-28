const express = require("express")
const path = require('path');
const app = express()

const port = 3000

app.get('/', (req, res) => {
    res.send("Hello World")
})

app.use(express.static(path.join(__dirname, 'home')));

app.get('/app', (req, res) => {  res.sendFile(path.join(__dirname+'/home/build/index.html'));})


app.listen(port, () => {
    console.log("Server running")
})