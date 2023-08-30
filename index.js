const express = require('express');
const {connection} = require('./config/db')

const cors = require('cors');
const { KanbanTodoRouter } = require('./routes/KanbanTodo.Routes');
require('dotenv').config()
const app = express()

app.use(cors())

app.use(express.json())
app.use('/',KanbanTodoRouter)

app.listen(process.env.PORT,async ()=>{
    try {
        await connection
        console.log('connected to db');
    } catch (error) {
        console.log(error);
    }
    console.log(`server running at ${process.env.PORT}`);
})