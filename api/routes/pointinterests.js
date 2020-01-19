const express = require('express')
const {
    getList,
    getOne,
    updateOne,
    createOne,
    deleteOne,
} = require('../database/utils')

const pointinterestRouter = express.Router()

pointinterestRouter.get('/', (req, res) => {
    getList('pointinterest').then(pointinterests => {
        res.set({
            'X-Total-Count': '100',
            'Access-Control-Expose-Headers': 'X-Total-Count',
        })
        res.json(pointinterests)
    })
})

pointinterestRouter.post('/', (req, res) => {
    createOne('pointinterest', req.body).then(result => {
        res.json(result)
    })
})

pointinterestRouter.put('/:id', (req, res) => {
    updateOne('pointinterest', req.params.id, req.body).then(id => {
        res.status(200).send({ id })
    })
})

pointinterestRouter.get('/:id', (req, res) =>
    getOne('pointinterest', req.params.id).then(pointinterests => {
        res.json(pointinterests)
    })
)

pointinterestRouter.delete('/:id', (req, res) => {
    deleteOne('pointinterest', req.params.id).then(result => {
        res.json(result)
    })
})

module.exports = pointinterestRouter
