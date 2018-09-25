
const express = require('express')
const app = express()
var cors = require('cors')
const router = require('./routes') // Get Router from file router
// app.use(function (req, res, next) {
//   res.header('Access-Control-Allow-Origin', '*')
//   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
//   next()
// })
app.use(cors())
/**
 * Confirm Path into public for get Images
 */
app.use(express.static('public'))
app.use('/api', router) // set follow Router

var mongoose = require('mongoose')
mongoose.connect('mongodb://judasfate:blogdhs2018@ds121118.mlab.com:21118/reactblog', { useNewUrlParser: true })
var db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function () {
  console.log('Connect Mongodb Complete')
})
app.listen(4000, () => console.log('Server listening on port 4000!'))
