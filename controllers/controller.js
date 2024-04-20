const {
  instructorSignupService,
} = require('../services/instructorService')
const { studentSignupService } = require('../services/studentSignUpService')

const { instructorLoginService } = require('../services/instructorLoginService')
const { generateToken } = require('../helpers/helper')

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

// SS

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

const instructorLogin = async (req, res) => {
  try {
    const { email, password } = req.body
    const instructor = await instructorLoginService(email, password)

    // Here, you would typically generate a JWT or session token
    // and send it back to the client for authentication purposes.
    // For simplicity, let's assume you're using JWT.
    if (instructor) {
      const token = generateToken(instructor) // Implement this function to generate JWT
      return res.status(200).send({
        message: 'Login successful',
        token: token, // Send the generated token to the client
      })
    } else {
      return res.status(400).send({
        message: 'Instructor with this email not found',
      })
    }
  } catch (error) {
    console.error(error)
    return res.status(500).send({ message: 'Internal server error' })
  }
}

module.exports = { instructorSignup, studentSignup, instructorLogin }
