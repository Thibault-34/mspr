const express = require('express')
const {
    getList,
    getOne,
    updateOne,
    createOne,
    deleteOne,
} = require('../database/utils')

const pageRouter = express.Router()

pageRouter.get('/', (req, res) => {
    getList('page').then(pages => {
        res.set({
            'X-Total-Count': '100',
            'Access-Control-Expose-Headers': 'X-Total-Count',
        })
        res.json(pages)
    })
})

pageRouter.post('/', (req, res) => {
    createOne('page', req.body).then(result => {
        res.json(result)
    })
})

pageRouter.put('/:id', (req, res) => {
    updateOne('page', req.params.id, req.body).then(id => {
        res.status(200).send({ id })
    })
})

pageRouter.get('/:id', (req, res) =>
    getOne('page', req.params.id).then(pages => {
        res.json(pages)
    })
)

pageRouter.delete('/:id', (req, res) => {
    deleteOne('page', req.params.id).then(result => {
        res.json(result)
    })
})

module.exports = pageRouter
