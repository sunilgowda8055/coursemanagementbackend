const instructorModel = require('../models/instructorUserModel')

async function instructorSignupService(fullname, email, password) {
  try {
    const alreadyExisting = await instructorModel.findOne({ email }).lean()

    if (alreadyExisting) {
      throw new Error('instructor user already exist with this mail id')
    }
    let userInstructor = await instructorModel.create({
      fullname,
      email,
      password,
    })
    // userInstructor.toJSON()
    userInstructor = userInstructor.toJSON()
    console.log('userInstructor1', userInstructor)
    delete userInstructor.password

    console.log('userInstructor', userInstructor)
    return userInstructor
  } catch (error) {
    console.log(
      'error happened in instructorSignupService Method',
      error.message,
    )
    return error.message
  }
}

module.exports = { instructorSignupService }
