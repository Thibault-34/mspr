const express = require('express')
const bodyParser = require('body-parser')
const artistRouter = require('./routes/artists')
const eventRouter = require('./routes/events')
const sceneRouter = require('./routes/scenes')
const pageRouter = require('./routes/pages')
const categoryofpointinterestRouter = require('./routes/categoryofpointinterests')
const localisationRouter = require('./routes/localisations')
const pointinterestRouter = require('./routes/pointinterests')
const userRouter = require('./routes/users')
var cors = require('cors')

const app = express()
const port = 8000

app.listen(port, () => {
    console.log(`server is running at http://localhost:${port}`)
})

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())

app.use('/artists', artistRouter)
app.use('/events', eventRouter)
app.use('/scenes', sceneRouter)
app.use('/pages', pageRouter)
app.use('/categoryofpointinterest', categoryofpointinterestRouter)
app.use('/localisations', localisationRouter)
app.use('/pointinterests', pointinterestRouter)
app.use('/users', userRouter)
app.use('*', (req, res) => {
    res.status(404).send('error 404')
})
