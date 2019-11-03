const express = require('express');
const router = express.Router();
const Todo = require('./models/Todo');

router.get('/todos', (req, res, next) => {
    Todo.find(req.query).then(todos => {
        res.send({
            success : true,
            count: todos.count,
            data : todos,
            params : req.query
        })
    }).catch(next);
})

router.post('/todos', (req, res, next) => {
    let todo = new Todo(req.body);
    todo.save().then(item=>{
        res.send({
            success : true,
            data : item
        })
    }).catch(next)

})

router.put('/todos/:id', (req, res, next) => {
    Todo.findByIdAndUpdate(req.params.id, {
        content : req.body.content
    }).then(updated => {
        res.send({
            success : true,
            data : updated
        })
    }).catch(next);
})

router.delete('/todos/:id', (req, res, next) => {

    Todo.findByIdAndDelete(req.params.id).then(deleted => {
        res.send({
            success : true,
            data : deleted,
            message : "data deleted"
        })
    }).catch(next)

})

module.exports = router;