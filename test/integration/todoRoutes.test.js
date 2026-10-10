import { describe, test, beforeEach } from 'node:test';
import assert from 'node:assert/strict';
import request from 'supertest';
import { createApp } from '../../src/app.js';
import { TodoService } from '../../src/services/todoService.js';

// Replace every test.todo(...) with a real test(...).
// Example: const res = await request(app).post('/todos').send({ title: 'Learn testing' });
describe('Todo Routes', () => {
  let app;
  let service;

  beforeEach(() => {
    service = new TodoService();
    app = createApp(service);
  });

  describe('POST /todos', () => {
    test.todo('creates a new todo (201)');
    test.todo('returns 400 when title is missing');
  });

  describe('GET /todos', () => {
    test.todo('returns empty array when no todos');
    test.todo('returns all todos');
  });

  describe('GET /todos/:id', () => {
    test.todo('returns todo by id');
    test.todo('returns 404 when todo not found');
  });

  describe('PUT /todos/:id', () => {
    test.todo('updates a todo');
    test.todo('returns 404 when todo not found');
  });

  describe('DELETE /todos/:id', () => {
    test.todo('deletes a todo (204)');
    test.todo('returns 404 when todo not found');
  });

  describe('POST /todos/:id/complete', () => {
    test.todo('marks a todo as completed');
  });
});
