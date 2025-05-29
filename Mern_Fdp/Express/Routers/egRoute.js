const express = require('express')
const router = express.Router()
const {getRoute,postRoute,putRoute,patchRoute} = require('../Controllers/egController')
router.get('/get',getRoute)
router.post('/post',postRoute)
router.put('/put',putRoute)
router.patch('/patch',patchRoute)
module.exports = router