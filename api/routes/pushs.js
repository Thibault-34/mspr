const express = require('express')
const {
    getList,
    getOne,
    updateOne,
    createOne,
    deleteOne,
} = require('../database/utils')

const pushRouter = express.Router()
const road = 'push'

pushRouter.get('/', (req, res) => {
    getList(road).then(result => {
        res.set({
            'X-Total-Count': '100',
            'Access-Control-Expose-Headers': 'X-Total-Count',
        })
        res.json(result)
    })
})

pushRouter.post('/', (req, res) => {
    createOne(road, req.body).then(result => {
        res.json(result)
    })
})

pushRouter.put('/:id', (req, res) => {
    updateOne(road, req.params.id, req.body).then(id => {
        res.status(200).send({ id })
    })
})

pushRouter.get('/:id', (req, res) =>
    getOne(road, req.params.id).then(result => {
        res.json(result)
    })
)

pushRouter.delete('/:id', (req, res) => {
    deleteOne(road, req.params.id).then(result => {
        res.json(result)
    })
})

module.exports = pushRouter
