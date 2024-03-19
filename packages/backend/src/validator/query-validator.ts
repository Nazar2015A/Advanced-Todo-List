import { query } from 'express-validator';

export const validateGetTodosQuery = [
  query('status')
    .optional()
    .isIn(['all', 'public', 'private', 'completed'])
    .withMessage('Invalid status'),
  query('search').optional().isString().withMessage('Search must be a string')
];
