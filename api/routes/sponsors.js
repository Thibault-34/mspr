const express = require('express')
const {
    getList,
    getOne,
    updateOne,
    createOne,
    deleteOne,
} = require('../database/utils')

const sponsorRouter = express.Router()
const road = 'sponsor'

sponsorRouter.get('/', (req, res) => {
    getList(road).then(result => {
        res.set({
            'X-Total-Count': '100',
            'Access-Control-Expose-Headers': 'X-Total-Count',
        })
        res.json(result)
    })
})

sponsorRouter.post('/', (req, res) => {
    createOne(road, req.body).then(result => {
        res.json(result)
    })
})

sponsorRouter.put('/:id', (req, res) => {
    updateOne(road, req.params.id, req.body).then(id => {
        res.status(200).send({ id })
    })
})

sponsorRouter.get('/:id', (req, res) =>
    getOne(road, req.params.id).then(result => {
        res.json(result)
    })
)

sponsorRouter.delete('/:id', (req, res) => {
    deleteOne(road, req.params.id).then(result => {
        res.json(result)
    })
})

module.exports = sponsorRouter
