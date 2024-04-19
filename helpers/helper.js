const dotenv = require('dotenv') // import dotenv.
const jwt = require('jsonwebtoken')
dotenv.config()

const JWTLINK = process.env.JWTLINK

function generateToken(user) {
  let payload = {
    _id: user._id.toString(),
    email: user.email,
    name: user.fullname,
  }
  return jwt.sign(payload, JWTLINK)
}

function verifyToken(token) {
  const payload = jwt.verify(token, JWTLINK)
  return payload
}

module.exports = { generateToken, verifyToken }
