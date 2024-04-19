const { instructorSignupService } = require('../services/instructorService')
const { studentSignupService } = require('../services/studentService')

const instructorSignup = async (req, res) => {
  try {
    const { fullName, email, password } = req.body
    const data = await instructorSignupService(fullName, email, password)
    return res.status(201).send({
      message: 'Instructor Signup Successful',
      data: data,
    })
  } catch (error) {
    return res.status(400).send({ message: 'internal server error' })
  }
}

const studentSignup = async (req, res) => {
  try {
    const { fullName, email, password } = req.body
    const data = await studentSignupService(fullName, email, password)
    return res.status(201).send({
      message: 'Student Signup Successful',
      data: data,
    })
  } catch (error) {
    return res.status(400).send({ message: 'internal server error' })
  }
}

module.exports = { instructorSignup,studentSignup }
