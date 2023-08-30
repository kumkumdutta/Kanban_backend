const mongoose = require('mongoose');

const KanbanSchema = mongoose.Schema({
    Task_name : String,
    Description : String,
    Status : Boolean
})

const KanbanModel = mongoose.model('todo',KanbanSchema)

module.exports = {
    KanbanModel
}