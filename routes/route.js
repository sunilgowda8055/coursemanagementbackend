const express = require('express') // import express
// const { instructorSignup } = require('../controllers/instructorController')
const { instructorSignup } = require('../controllers/controller')
const { studentSignup } = require('../controllers/controller')
const router = express.Router() // import router
// step1

router.post('/instructor/signup', instructorSignup)
router.post('/student/signup', studentSignup)
module.exports = router
