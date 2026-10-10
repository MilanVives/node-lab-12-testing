export class TodoService {
  constructor() {
    this.todos = new Map();
  }

  create(todo) {
    this.todos.set(todo.id, todo);
    return todo;
  }

  findById(id) {
    const todo = this.todos.get(id);
    if (!todo) {
      throw new Error('Todo not found');
    }
    return todo;
  }

  findAll() {
    return Array.from(this.todos.values());
  }

  update(id, updates) {
    const todo = this.findById(id);
    todo.update(updates);
    return todo;
  }

  delete(id) {
    const exists = this.todos.has(id);
    if (!exists) {
      throw new Error('Todo not found');
    }
    this.todos.delete(id);
  }

  complete(id) {
    const todo = this.findById(id);
    todo.complete();
    return todo;
  }
}
