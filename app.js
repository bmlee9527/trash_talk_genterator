const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const generateTrashTalk = require('./generator_trash_talk')
const app = express()
const port = 3000

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const job = req.body.job
  const trashTalk = generateTrashTalk(job)
  res.render('index', {
    job: job, trashTalk: trashTalk, isEngineer: job === 'engineer',
    isDesigner: job === 'designer',
    isFounder: job === 'founder'
  })
})

app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`)
})