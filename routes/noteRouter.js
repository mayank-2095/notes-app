const router = require('express').Router()
const auth = require('../middlewares/auth')
const noteCtrl = require('../controllers/noteCtrl')

router.route('/')
    .get(auth, noteCtrl.getNotes)
    .post()

router.route('/:id')
    .get()
    .post()
    .delete()


module.exports = router;