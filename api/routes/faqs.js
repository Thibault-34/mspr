const express = require('express')
const {
    getList,
    getOne,
    updateOne,
    createOne,
    deleteOne,
} = require('../database/utils')

const faqRouter = express.Router()
const road = 'faq'

faqRouter.get('/', (req, res) => {
    getList(road).then(result => {
        res.set({
            'X-Total-Count': '100',
            'Access-Control-Expose-Headers': 'X-Total-Count',
        })
        res.json(result)
    })
})

faqRouter.post('/', (req, res) => {
    createOne(road, req.body).then(result => {
        res.json(result)
    })
})

faqRouter.put('/:id', (req, res) => {
    updateOne(road, req.params.id, req.body).then(id => {
        res.status(200).send({ id })
    })
})

faqRouter.get('/:id', (req, res) =>
    getOne(road, req.params.id).then(result => {
        res.json(result)
    })
)

faqRouter.delete('/:id', (req, res) => {
    deleteOne(road, req.params.id).then(result => {
        res.json(result)
    })
})

module.exports = faqRouter
