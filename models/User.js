const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const {isEmail} = require('validator')

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    validate: isEmail
  },
  password: {
    type: String,
    required: true,
  },
})

userSchema.pre('save', async function(next) {
    const salt = await bcrypt.genSalt()
    this.await bycrypt.hash(this.password, salt)
    next()
})

const User = mongoose.model('user', userSchema)
module.exports = User
