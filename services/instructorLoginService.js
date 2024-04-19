const instructorModel = require('../models/instructorUserModel')

// Function to handle instructor login
async function instructorLoginService(email, password) {
  try {
    // Find the instructor with the provided email
    const instructor = await instructorModel.findOne({ email }).lean()

    if (!instructor) {
      throw new Error('Instructor not found')
    }

    // Compare the provided password with the hashed password stored in the database
    const passwordMatch = instructor.password === password

    if (!passwordMatch) {
      1
      throw new Error('Incorrect password')
    }

    // If email and password are correct, return the instructor data
    return instructor
  } catch (error) {
    console.error('Error in instructorLoginService:', error.message)
    throw error // Throw the error to be caught by the caller
  }
}

module.exports = { instructorLoginService }
