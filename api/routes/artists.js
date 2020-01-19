const express = require('express')
const {
    getList,
    getOne,
    updateOne,
    createOne,
    deleteOne,
} = require('../database/utils')

const artistRouter = express.Router()

artistRouter.get('/', (req, res) => {
    getList('Artist').then(artists => {
        res.set({
            'X-Total-Count': '100',
            'Access-Control-Expose-Headers': 'X-Total-Count',
        })
        res.json(artists)
    })
})

artistRouter.post('/', (req, res) => {
    createOne('Artist', req.body).then(result => {
        res.json(result)
    })
})

artistRouter.put('/:id', (req, res) => {
    updateOne('Artist', req.params.id, req.body).then(id => {
        res.status(200).send({ id })
    })
})

artistRouter.get('/:id', (req, res) =>
    getOne('Artist', req.params.id).then(artist => {
        res.json(artist)
    })
)

artistRouter.delete('/:id', (req, res) => {
    deleteOne('Artist', req.params.id).then(result => {
        res.json(result)
    })
})

module.exports = artistRouter
