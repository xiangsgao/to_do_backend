  import express from "express";
  import TodoModel from "../models/todo";
  const router = express.Router();



  router.get('/', async (req, res) => {
    try {
      const todos = await TodoModel.getAll();
      res.status(200).json(todos);
    } catch (error) {
      res.status(500).json({ error: 'can not get todos' });
    }
  });
  
  router.post('/', async (req, res) => {
    const { title, color, completed } = req.body;
    try {
      const newTodo = await TodoModel.create(title, color, completed);
      res.status(200).json(newTodo);
    } catch (error) {
      res.status(500).json({ error: 'can not create todo' });
    }
  });
  
  router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { title, color, completed } = req.body;
    try {
      const updatedTodo = await TodoModel.update(id, title, color, completed);
      res.status(200).json(updatedTodo);
    } catch (error) {
      res.status(500).json({ error: 'can not update' });
    }
  });
  
  router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
      await TodoModel.delete(id);
      res.status(200).json({ message: 'success' });
    } catch (error) {
      res.status(500).json({ error: 'can not delete' });
    }
  });


  export default router;