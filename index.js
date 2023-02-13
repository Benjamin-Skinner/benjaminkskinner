const express = require("express")
const path = require('path')
const subdomain = require('express-subdomain')
const router = express.Router()

const app = express()

const port = 3000

app.use(subdomain('subdomain', router))

router.get('/', (req, res) => {
    res.send('No site at address')
})

// Deploy React App for benjaminkskinner.com
app.use(express.static(path.join(__dirname, 'home', 'build')))

app.get('/', function (req, res) { 
    res.sendFile(path.join(__dirname, 'home', 'build', 'index.html'))
})


app.listen(port, () => {
    console.log("Server running")
})