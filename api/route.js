const express = require('express');
const router = express.Router();

router.get('/todos', (req, res) => {
    res.send({
        success : true,
        data : req.body
    })
})

router.post('/todos', (req, res) => {
    res.send({
        success : true,
        data : req.body
    })
})

router.put('/todos/:id', (req, res) => {
    res.send({
        success : true,
        data : req.body
    })
})

router.delete('/todos/:id', (req, res) => {
    res.send({
        success : true,
        data : req.body
    })
})

module.exports = router;