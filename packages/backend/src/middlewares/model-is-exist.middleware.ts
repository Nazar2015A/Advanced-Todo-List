import { Request, Response, NextFunction } from 'express';
import { EntityTarget, ObjectLiteral, Repository } from 'typeorm';
import { dataSource } from '../config/database';

export default function isExistMiddleware(model: EntityTarget<ObjectLiteral>) {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const entityId = req.params.id;

      if (!entityId) {
        return res.status(400).json({ error: 'Missing entity ID in request parameters' });
      }

      const repository: Repository<ObjectLiteral> = dataSource.getRepository(model);
      const entity = await repository.findOneBy({ id: entityId });

      if (!entity) {
        return res.status(404).json({ error: 'Entity not found' });
      }

      next();
    } catch (error) {
      return res.status(500).json({ error: 'Internal server error' });
    }
  };
}
