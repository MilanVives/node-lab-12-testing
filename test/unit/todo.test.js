import { describe, test } from 'node:test';
import assert from 'node:assert/strict';
import { Todo } from '../../src/models/todo.js';

// Replace every test.todo(...) with a real test(...) that uses assert.
describe('Todo Model', () => {
  describe('constructor', () => {
    test.todo('creates todo with title');
    test.todo('creates todo with title and description');
    test.todo('throws error when title is empty'); // Hint: assert.throws()
    test.todo('trims whitespace from title');
    test.todo('sets completed to false by default');
    test.todo('generates unique id'); // Hint: create two todos and compare ids
  });

  describe('complete', () => {
    test.todo('sets completed to true');
  });

  describe('uncomplete', () => {
    test.todo('sets completed to false');
  });

  describe('update', () => {
    test.todo('updates title');
    test.todo('updates description');
    test.todo('throws error when updating to empty title');
  });
});
