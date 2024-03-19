import { Router } from 'express';

import todoController from '../../controllers/todo.controller';
import tryCatchMiddleware from '../../middlewares/try-catch.middleware';
import bodyValidationMiddleware from '../../middlewares/body-validation.middleware';
import { todoBodySchema } from '../../validator/body-validator';
import isExistMiddleware from '../../middlewares/model-is-exist.middleware';
import { Todo } from '../../entities/Todo';
import { validateGetTodosQuery } from '../../validator/query-validator';

const todosRouter: Router = Router();

// @route   GET api/todos
// @desc    Get all todos
// @access  Private

todosRouter.get('', [
  ...validateGetTodosQuery,
  tryCatchMiddleware(todoController.getAllTodo.bind(todoController))
]);

// @route   GET api/todos/:id
// @desc    Get one todo
// @access  Private

todosRouter.get('/:id', [
  isExistMiddleware(Todo),
  tryCatchMiddleware(todoController.getTodoById.bind(todoController))
]);

// @route   POST api/todos
// @desc    Post one todo
// @access  Private

todosRouter.post('', [
  bodyValidationMiddleware(todoBodySchema),
  tryCatchMiddleware(todoController.createTodo.bind(todoController))
]);

// @route   Put api/todos/:id
// @desc    Change one todo
// @access  Private

todosRouter.put('/:id', [
  bodyValidationMiddleware(todoBodySchema),
  isExistMiddleware(Todo),
  tryCatchMiddleware(todoController.updateTodo.bind(todoController))
]);

// @route   DELETE api/todos/:id
// @desc    Delete one todo
// @access  Private

todosRouter.delete('/:id', [
  isExistMiddleware(Todo),
  tryCatchMiddleware(todoController.deleteTodo.bind(todoController))
]);

export default todosRouter;
