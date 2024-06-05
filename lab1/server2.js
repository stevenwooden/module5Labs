const express = require('express')
const app = express()
const port = 3002

app.get('/', (req, res) => {
    res.send('This is the third server.')
})

app.listen(port, ()=> {
    console.log(`Example app listening at http://localhost:${port}`)
})