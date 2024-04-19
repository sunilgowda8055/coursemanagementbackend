const express = require('express') // import express
// const { instructorSignup } = require('../controllers/instructorController')
const { instructorSignup } = require('../controllers/instructorController')
const router = express.Router() // import router
// step1

router.post('/instructor/signup', instructorSignup)
router.post('/student/signup', instructorSignup)
module.exports = router
