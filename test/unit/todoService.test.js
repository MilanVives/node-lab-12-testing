import { describe, test, beforeEach } from 'node:test';
import assert from 'node:assert/strict';
import { TodoService } from '../../src/services/todoService.js';
import { Todo } from '../../src/models/todo.js';

// Replace every test.todo(...) with a real test(...) that uses assert.
describe('TodoService', () => {
  let service;

  beforeEach(() => {
    service = new TodoService();
  });

  describe('create', () => {
    test.todo('adds todo to collection');
  });

  describe('findById', () => {
    test.todo('returns todo when found'); // Hint: create a todo first, then find it
    test.todo('throws error when not found');
  });

  describe('findAll', () => {
    test.todo('returns empty array when no todos');
    test.todo('returns all todos');
  });

  describe('update', () => {
    test.todo('updates todo properties');
    test.todo('throws error when todo not found');
  });

  describe('delete', () => {
    test.todo('removes todo from collection');
    test.todo('throws error when todo not found');
  });

  describe('complete', () => {
    test.todo('marks todo as completed');
  });
});
