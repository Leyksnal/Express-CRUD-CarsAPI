const express = require('express');
const port = 2020

const app = express()
app.use(express.json())

app.get('/', (req, res)=>{
    res.status(200).json({message: 'welcome to express'})
})

app.listen(port, ()=>{
    console.log(`listening to port: ${port}`);
})