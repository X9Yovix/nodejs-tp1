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

 
router.get('/objects', (req, res) => {
    const objects = [
        { name: 'test1', value: 123 },
        { name: 'test2', value: 456 },
    ];

    res.send({ array: objects });
});


module.exports = router