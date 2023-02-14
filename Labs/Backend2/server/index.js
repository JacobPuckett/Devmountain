const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())


const {
    getHouses,
    crateHouse,
    updateHouse,
    deleteHouse
} = require('./controller')


app.get('/api/houses', getHouses)
app.post('/api/houses', crateHouse)
app.put('/api/houses/:id', updateHouse)
app.delete('/api/houses:id', deleteHouse)


app.listen(4004, () => console.log('server up on 4004'))