const express = require('express')
const router = express.Router();
const path = require('path');

router.get('/login', (req,res) => {
    res.send("<p>message en html</p>")
})

router.get('/register', (req,res) => {
    const filePath = path.join(__dirname, '../../view/register.html');
    res.sendFile(filePath);
})

module.exports = router