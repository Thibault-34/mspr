const express = require('express')
const {
    getList,
    getOne,
    updateOne,
    createOne,
    deleteOne,
} = require('../database/utils')

const eventRouter = express.Router()

eventRouter.get('/', (req, res) => {
    getList('event').then(events => {
        res.set({
            'X-Total-Count': '100',
            'Access-Control-Expose-Headers': 'X-Total-Count',
        })
        res.json(events)
    })
})

eventRouter.post('/', (req, res) => {
    createOne('event', req.body).then(result => {
        res.json(result)
    })
})

eventRouter.put('/:id', (req, res) => {
    updateOne(' event', req.params.id, req.body).then(id => {
        res.status(200).send({ id })
    })
})

eventRouter.get('/:id', (req, res) =>
    getOne('event', req.params.id).then(events => {
        res.json(events)
    })
)

eventRouter.delete('/:id', (req, res) => {
    deleteOne(' event', req.params.id).then(result => {
        res.json(result)
    })
})

module.exports = eventRouter
