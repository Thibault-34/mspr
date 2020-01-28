const express = require('express')
const {
    getList,
    getOne,
    updateOne,
    createOne,
    deleteOne,
} = require('../database/utils')

const placeRouter = express.Router()
const road = 'place'

placeRouter.get('/', (req, res) => {
    getList(road).then(result => {
        res.set({
            'X-Total-Count': '100',
            'Access-Control-Expose-Headers': 'X-Total-Count',
        })
        res.json(result)
    })
})

placeRouter.post('/', (req, res) => {
    createOne(road, req.body).then(result => {
        res.json(result)
    })
})

placeRouter.put('/:id', (req, res) => {
    updateOne(road, req.params.id, req.body).then(id => {
        res.status(200).send({ id })
    })
})

placeRouter.get('/:id', (req, res) =>
    getOne(road, req.params.id).then(result => {
        res.json(result)
    })
)

placeRouter.delete('/:id', (req, res) => {
    deleteOne(road, req.params.id).then(result => {
        res.json(result)
    })
})

module.exports = placeRouter
