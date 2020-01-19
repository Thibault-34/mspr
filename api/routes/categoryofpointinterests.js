const express = require('express')
const {
    getList,
    getOne,
    updateOne,
    createOne,
    deleteOne,
} = require('../database/utils')

const categoryofpointinterestRouter = express.Router()

categoryofpointinterestRouter.get('/', (req, res) => {
    getList('categoryofpointinterest').then(categoryofpointinterests => {
        res.set({
            'X-Total-Count': '100',
            'Access-Control-Expose-Headers': 'X-Total-Count',
        })
        res.json(categoryofpointinterests)
    })
})

categoryofpointinterestRouter.post('/', (req, res) => {
    createOne('categoryofpointinterest', req.body).then(result => {
        res.json(result)
    })
})

categoryofpointinterestRouter.put('/:id', (req, res) => {
    updateOne('categoryofpointinterest', req.params.id, req.body).then(id => {
        res.status(200).send({ id })
    })
})

categoryofpointinterestRouter.get('/:id', (req, res) =>
    getOne('categoryofpointinterest', req.params.id).then(
        categoryofpointinterests => {
            res.json(categoryofpointinterests)
        }
    )
)

categoryofpointinterestRouter.delete('/:id', (req, res) => {
    deleteOne('categoryofpointinterest', req.params.id).then(result => {
        res.json(result)
    })
})

module.exports = categoryofpointinterestRouter
