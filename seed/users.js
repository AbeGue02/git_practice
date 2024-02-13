const db = require('../db')
const {User  } = require('../models')


db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {

const users = [
    {
        name: 'Mr.Git',
        age:   19,
        address: 'We Learned Git Avenue',
    },
]
await User.insertMany(users)
console.log("Created users")
}


const run = async () => {
await main()
db.close()
}

run()

