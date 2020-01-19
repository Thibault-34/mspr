const express = require('express')
const {
    getList,
    getOne,
    updateOne,
    createOne,
    deleteOne,
} = require('../database/utils')

const localisationRouter = express.Router()

localisationRouter.get('/', (req, res) => {
    getList('localisation').then(localisations => {
        res.set({
            'X-Total-Count': '100',
            'Access-Control-Expose-Headers': 'X-Total-Count',
        })
        res.json(localisations)
    })
})

localisationRouter.post('/', (req, res) => {
    createOne('localisation', req.body).then(result => {
        res.json(result)
    })
})

localisationRouter.put('/:id', (req, res) => {
    updateOne('localisation', req.params.id, req.body).then(id => {
        res.status(200).send({ id })
    })
})

localisationRouter.get('/:id', (req, res) =>
    getOne('localisation', req.params.id).then(localisations => {
        res.json(localisations)
    })
)

localisationRouter.delete('/:id', (req, res) => {
    deleteOne('localisation', req.params.id).then(result => {
        res.json(result)
    })
})

module.exports = localisationRouter
