const Router = require('express')
const songController = require('../controllers/songController')
const router = new Router()

router.post('/', songController.create)
router.delete('/:id', songController.deleteOne)
router.get('/', songController.getAll)
router.get('/:id', songController.getOne)

module.exports = router
