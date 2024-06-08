const express = require('express')
const app = express()
const port = 3000
const testRoutes= require('./routes/myTestRoutes');
const calculatorRoutes = require('./routes/calculatorRoutes');
const userRoutes = require('./routes/userRoutes')

app.use(express.json());

app.use('/calculator',calculatorRoutes)

app.use('/mytest', testRoutes)

app.use('/users', userRoutes);

app.use('/', express.static('public'))


app.get('/test', (req, res) => {
    res.send('This is a Test')
})

app.listen(port, () => {
console.log(`Example app listening
at http://localhost:${port}`)
})


