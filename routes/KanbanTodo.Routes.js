const express = require('express');
const { KanbanModel } = require('../Model/Kanban.Model');
const KanbanTodoRouter = express.Router();

// adding

KanbanTodoRouter.post("/add", async (req, res) => {
    try {
      const newTodo = new KanbanModel(req.body);
      await newTodo.save();
      res.status(200).send({ msg: "data added successfully" });
    } catch (error) {
      res.status(404).send({ err: error.message });
    }
  });

// getting

KanbanTodoRouter.get('/tasks', async (req,res)=>{
    try {
        const task = await KanbanModel.find(req.query)
        res.status(200).send(task)
    } catch (error) {
        res.status(500).send({error:"An error occurred while processing your request"})
    }
});

// deleting 

KanbanTodoRouter.delete("/delete/:id", async (req, res) => {
    const { id } = req.params;
    try {
      await KanbanModel.findByIdAndDelete(id);
      res.status(200).send({ msg: "data deleted successfully" });
    } catch (error) {
      res.status(500).send({ err: "Error deleting data" });
    }
})

// edit 

KanbanTodoRouter.patch("/update/:id", async (req, res) => {
    const { id } = req.params;
    const newData = req.body;
    try {
      await KanbanModel.findByIdAndUpdate(id, newData);
      res.status(200).send({ msg: "data updated successfully" });
    } catch (error) {
      res.status(500).send({ err: "Error updating data" });
    }
  });
  

module.exports = {
    KanbanTodoRouter
}