import { NextFunction, Request, Response } from 'express';
import { Schema } from 'joi';

export default function bodyValidationMiddleware(schema: Schema) {
  return (req: Request, res: Response, next: NextFunction) => {
    const data = req.body;

    const { error } = schema.validate(data);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    next();
  };
}
