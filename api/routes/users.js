const express = require('express')
const {
    getList,
    getOne,
    updateOne,
    createOne,
    deleteOne,
} = require('../database/utils')

const userRouter = express.Router()

userRouter.get('/', (req, res) => {
    getList('user').then(users => {
        res.set({
            'X-Total-Count': '100',
            'Access-Control-Expose-Headers': 'X-Total-Count',
        })
        res.json(users)
    })
})

userRouter.post('/', (req, res) => {
    createOne('user', req.body).then(result => {
        res.json(result)
    })
})

userRouter.put('/:id', (req, res) => {
    updateOne('user', req.params.id, req.body).then(id => {
        res.status(200).send({ id })
    })
})

userRouter.get('/:id', (req, res) =>
    getOne('user', req.params.id).then(users => {
        res.json(users)
    })
)

userRouter.delete('/:id', (req, res) => {
    deleteOne('user', req.params.id).then(result => {
        res.json(result)
    })
})

module.exports = userRouter
