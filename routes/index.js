const Router = require('express')
const router = new Router()
const songRouter = require('./songRouter')

router.use('/song', songRouter) 
module.exports = router