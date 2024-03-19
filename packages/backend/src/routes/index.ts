import { Application } from 'express';
import todosRouter from './api/todos.route';
import userRouter from './api/user.route';
import authRouter from './api/auth.route';
import mailRouter from './api/mail.route';
import { authMiddleware } from '../middlewares/auth.middleware';

class AppRouter {
  constructor(private app: Application) {}

  init() {
    this.app.get('/', (_req, res) => {
      res.send('API Running');
    });
    this.app.use('/api/todos', authMiddleware, todosRouter);
    this.app.use('/api/user', authMiddleware, userRouter);
    this.app.use('/api/auth', authRouter);
    this.app.use('/api/mail', mailRouter);
  }
}

export default AppRouter;
