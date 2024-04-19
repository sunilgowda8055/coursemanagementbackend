const instructorModel = require('../models/instructorUserModel')



//  this fnction is responsible to store the instructor signup data into database
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
    delete userInstructor.password

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
