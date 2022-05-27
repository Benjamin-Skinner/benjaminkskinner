const express = require("express")
const path = require('path');
const app = express()
const subdomain = require('express-subdomain')
const router = express.Router()

const port = 3000

// app.get('/', (req, res) => {
//     res.send("Hello World")
// })

app.use(express.static(path.join(__dirname, 'home')));

app.get('/*', (req, res) => {  res.sendFile(path.join(__dirname+'/home/build/index.html'));})

app.use(subdomain('sub', router));

app.listen(port, () => {
    console.log("Server running")
})