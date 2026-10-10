# Lab 12: Testing

Write unit and integration tests for a Todo API with the Node.js test runner.

This time the code is finished and **you write the tests**. The Todo API in `src/` works: a `Todo` model, a `TodoService` that keeps todos in memory, and an Express app made by `createApp()`. This project uses ES modules (`import` / `export`).

## Getting started

```bash
npm install
npm test                 # runs your tests
npm run test:coverage    # shows which lines of src/ your tests cover
```

The files in `test/` contain the tests to write as `test.todo(...)`. Replace each one with a real `test(...)` that uses `assert`. Use `supertest` for the routes:

```js
const res = await request(app).post('/todos').send({ title: 'Learn testing' });
assert.equal(res.status, 201);
```

## Requirements

The autograder does not run hidden tests on your code. It checks **your tests**.

### R1: Your test suite passes
**2 points**

`npm test` passes and contains at least 10 passing tests (`test.todo` does not count).

### R2: Your tests cover at least 80% of the lines
**3 points**

Your tests execute at least 80% of the lines in `src/` (`src/server.js` is not counted). Check it with `npm run test:coverage`.

### R3: Your tests catch a bug in the Todo model
**2 points**

The autograder copies your project, puts a bug in `src/models/todo.js` and runs your tests again. At least one of your tests must fail on that bug. Test what the model really does, for example that `complete()` makes `completed` true.

### R4: Your tests catch a bug in the TodoService
**1 point**

Same idea for `src/services/todoService.js`. Test the error cases too, such as deleting a todo that does not exist.

### R5: Your tests catch a bug in the routes
**2 points**

Same idea for `src/app.js`. Check status codes exactly: `POST /todos` answers `201`, `DELETE` answers `204`, an unknown id answers `404`.

## Submitting

Commit your work and run `npm run submit`. Your score and feedback appear under **Releases** after a few minutes. You can submit as often as you like; the latest submission counts.
