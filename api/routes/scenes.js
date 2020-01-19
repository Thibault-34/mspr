const express = require('express')
const {
    getList,
    getOne,
    updateOne,
    createOne,
    deleteOne,
} = require('../database/utils')

const sceneRouter = express.Router()

sceneRouter.get('/', (req, res) => {
    getList('scene').then(scenes => {
        res.set({
            'X-Total-Count': '100',
            'Access-Control-Expose-Headers': 'X-Total-Count',
        })
        res.json(scenes)
    })
})

sceneRouter.post('/', (req, res) => {
    createOne('scene', req.body).then(result => {
        res.json(result)
    })
})

sceneRouter.put('/:id', (req, res) => {
    updateOne('scene', req.params.id, req.body).then(id => {
        res.status(200).send({ id })
    })
})

sceneRouter.get('/:id', (req, res) =>
    getOne('scene', req.params.id).then(scenes => {
        res.json(scenes)
    })
)

sceneRouter.delete('/:id', (req, res) => {
    deleteOne('scene', req.params.id).then(result => {
        res.json(result)
    })
})

module.exports = sceneRouter
