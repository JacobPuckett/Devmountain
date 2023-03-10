let houses = require('./db.json')
let houseId = 4

module.exports = {
    getHouses: (req,res) => {
        res.status(200).send(houses)
    },
    crateHouse: (req,res) => {
        let { address, price, imageURL } = req.body
        let newHouse = {
            id: globalId,
            address, 
            price,
            imageURL
        }
        houses.push(newHouse)
        res.status(200).send(houses)
        houseId++
    },
    updateHouse: (req, res) => {
        let { id } = req.params
        let { type } = req.body
        let index = houses.findIndex(elem => +elem.id === +id)

        if (houses[index].price <= 10000 && type === 'minus') {
            houses[index].price = 0
            res.status(200).send(houses)
        } else if (type === 'plus') {
            houses[index].price += 10000
            res.status(200).send(houses)
        } else if (type === 'minus') {
            houses[index].price -= 10000
            res.status(200).send(houses)
        } else {
            res.sendStatus(400)
        }
    },
    deleteHouse: (req,res) => {
        let { id } = req.params
        let index = houses.findIndex(house => house.id === +id)
        houses.splice(index,1)
        res.status(200).send(houses)
    }
}


