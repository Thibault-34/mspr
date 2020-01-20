const express = require('express')
const {
    getList,
    getOne,
    updateOne,
    createOne,
    deleteOne,
} = require('../database/utils')

const pointinteresttocategoryRouter = express.Router()

pointinteresttocategoryRouter.get('/', (req, res) => {
    getList('pointinteresttocategory').then(pointinteresttocategorys => {
        res.set({
            'X-Total-Count': '100',
            'Access-Control-Expose-Headers': 'X-Total-Count',
        })
        res.json(pointinteresttocategorys)
    })
})

pointinteresttocategoryRouter.post('/', (req, res) => {
    createOne('pointinteresttocategory', req.body).then(result => {
        res.json(result)
    })
})

pointinteresttocategoryRouter.put('/:id', (req, res) => {
    updateOne('pointinteresttocategory', req.params.id, req.body).then(id => {
        res.status(200).send({ id })
    })
})

pointinteresttocategoryRouter.get('/:id', (req, res) =>
    getOne('pointinteresttocategory', req.params.id).then(
        pointinteresttocategorys => {
            res.json(pointinteresttocategorys)
        }
    )
)

pointinteresttocategoryRouter.delete('/:id', (req, res) => {
    deleteOne('pointinteresttocategory', req.params.id).then(result => {
        res.json(result)
    })
})

module.exports = pointinteresttocategoryRouter
