const express = require('express') // import express
// const { instructorSignup } = require('../controllers/instructorController')
const {
  instructorSignup,
  instructorLogin,
  studentSignup,
} = require('../controllers/controller')
const router = express.Router() // import router
// step1

router.post('/instructor/signup', instructorSignup)
router.post('/student/signup', studentSignup)
router.post('/instructor/login', instructorLogin)

module.exports = router
