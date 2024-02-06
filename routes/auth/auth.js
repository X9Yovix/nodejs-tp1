const express = require('express')
const router = express.Router();

router.get('/login', (req,res) => {
    res.send("<p>message en html</p>")
})

module.exports = router