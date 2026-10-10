export class Todo {
  static nextId = 1;

  constructor(title, description = '') {
    if (!title || title.trim() === '') {
      throw new Error('Title is required');
    }

    this.id = Todo.nextId++;
    this.title = title.trim();
    this.description = description.trim();
    this.completed = false;
    this.createdAt = new Date();
  }

  complete() {
    this.completed = true;
  }

  uncomplete() {
    this.completed = false;
  }

  update(updates) {
    if (updates.title !== undefined) {
      if (!updates.title || updates.title.trim() === '') {
        throw new Error('Title cannot be empty');
      }
      this.title = updates.title.trim();
    }

    if (updates.description !== undefined) {
      this.description = updates.description.trim();
    }
  }
}
