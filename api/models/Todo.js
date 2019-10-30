const mongoose = require('mongoose');
const Schema =mongoose.Schema;

const TodoSchema = new Schema({
    content : {
        type : String,
        required : [true, "content is required"]
    }
})

const Todo = mongoose.model('todo');

