import { Request, Response, NextFunction } from 'express';
import ApiError from '../exeptions/api.error';

const tryCatchMiddleware =
  (handler: (req: Request, res: Response, next: NextFunction) => Promise<void>) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await handler(req, res, next);
    } catch (error: any) {
      if (error instanceof ApiError) {
        res.status(error.status).json({ message: error.message, errors: error.errors });
      } else {
        const internalServerError = ApiError.InternalServerError('Internal Server Error', [error]);
        res
          .status(internalServerError.status)
          .json({ message: internalServerError.message, errors: internalServerError.errors });
      }
    }
  };

export default tryCatchMiddleware;
