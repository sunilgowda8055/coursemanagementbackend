const mongoose = require('mongoose')

const studentSchema = mongoose.Schema({
  fullname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
})

const studentModel = mongoose.model('student', studentSchema) //basis of schema we created model
module.exports = studentModel
