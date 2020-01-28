const express = require('express')
const bodyParser = require('body-parser')
const artistRouter = require('./routes/artists')
const eventRouter = require('./routes/events')
const articleRouter = require('./routes/articles')
const categoryRouter = require('./routes/categories')
const faqRouter = require('./routes/faqs')
const placeRouter = require('./routes/places')
const sponsorRouter = require('./routes/sponsors')
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
app.use('/articles', articleRouter)
app.use('/categories', categoryRouter)
app.use('/faqs', faqRouter)
app.use('/places', placeRouter)
app.use('/sponsors', sponsorRouter)

app.use('*', (req, res) => {
    res.status(404).send('error 404')
})
