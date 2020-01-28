const express = require('express')
const {
    getList,
    getOne,
    updateOne,
    createOne,
    deleteOne,
} = require('../database/utils')

const artistRouter = express.Router()
const road = 'artist'

artistRouter.get('/', (req, res) => {
    getList(road).then(result => {
        res.set({
            'X-Total-Count': '100',
            'Access-Control-Expose-Headers': 'X-Total-Count',
        })
        res.json(result)
    })
})

artistRouter.post('/', (req, res) => {
    createOne(road, req.body).then(result => {
        res.json(result)
    })
})

artistRouter.put('/:id', (req, res) => {
    updateOne(road, req.params.id, req.body).then(id => {
        res.status(200).send({ id })
    })
})

artistRouter.get('/:id', (req, res) =>
    getOne(road, req.params.id).then(result => {
        res.json(result)
    })
)

artistRouter.delete('/:id', (req, res) => {
    deleteOne(road, req.params.id).then(result => {
        res.json(result)
    })
})

module.exports = artistRouter
