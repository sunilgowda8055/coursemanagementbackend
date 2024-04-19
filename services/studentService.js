const studentModel = require('../models/studentUserModel')



//  this fnction is responsible to store the instructor signup data into database
async function studentSignupService(fullname, email, password) {
  try {
    const alreadyExisting = await studentModel.findOne({ email }).lean()

    if (alreadyExisting) {
      throw new Error('Student user already exist with this mail id')
    }
    let userStudent = await studentModel.create({
      fullname,
      email,
      password,
    })
    // userStudent.toJSON()
    userStudent = userStudent.toJSON()
    delete userStudent.password

    return userStudent
  } catch (error) {
    console.log(
      'error happened in studentSignupService Method',
      error.message,
    )
    return error.message
  }
}

module.exports = { studentSignupService }
