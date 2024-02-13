const mongoose = require('mongoose')
const userSchema = require('./user')

//we can give them any name we want, but like so much else in JS, it would be counterintuitive to not give it a semantic, recognizable name
const User = mongoose.model('User', userSchema)

module.exports = {
    User
}