import express from 'express';
import { TodoService } from './services/todoService.js';
import { Todo } from './models/todo.js';

export function createApp(todoService = new TodoService()) {
  const app = express();
  app.use(express.json());

  // GET /todos
  app.get('/todos', (req, res) => {
    const todos = todoService.findAll();
    res.json(todos);
  });

  // POST /todos
  app.post('/todos', (req, res) => {
    try {
      const { title, description } = req.body;
      const todo = new Todo(title, description);
      todoService.create(todo);
      res.status(201).json(todo);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });

  // GET /todos/:id
  app.get('/todos/:id', (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const todo = todoService.findById(id);
      res.json(todo);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  });

  // PUT /todos/:id
  app.put('/todos/:id', (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const todo = todoService.update(id, req.body);
      res.json(todo);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  });

  // DELETE /todos/:id
  app.delete('/todos/:id', (req, res) => {
    try {
      const id = parseInt(req.params.id);
      todoService.delete(id);
      res.status(204).send();
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  });

  // POST /todos/:id/complete
  app.post('/todos/:id/complete', (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const todo = todoService.complete(id);
      res.json(todo);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  });

  return app;
}
