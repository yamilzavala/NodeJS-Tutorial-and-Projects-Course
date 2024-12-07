const express = require('express');
const app = express();
const {people} = require('./data')
const PORT = 5000;


//static assets
app.use(express.static('./methods-public'))
//parse form data
app.use(express.urlencoded({extended: false}))
//parse json 
app.use(express.json())

app.get('/api/people', (req, res) => {
    res.status(200).json({success: true, data:people})
})

app.post('/api/people', (req, res) => {
    const {name} = req.body;
    if(!name) {
        return res
        .status(400)
        .json({success: false, msg:'Please provide a name'})
    }
    res.status(201).json({success: true, person: name})
    
})

app.post('/login',(req, res) => {
    const {name} = req.body;
    if(name) {
        return res.status(200).send(`Welcome ${name}`)
    }
    res.status(401).send('Please provide credentials')
})

app.listen(PORT, () => {
    console.log(`Listening in port: ${PORT}`)
})