const express = require('express')
const app = express()
const auth = require('./routes/auth/auth')

app.listen(8089, () => {
    console.log("listening on port 8089")
})

app.use('/auth',auth)