// server/src/middleware/mockAuth.ts

import { Request, Response, NextFunction } from 'express';


function mockAuth(req: Request, res: Response, next: NextFunction) {
  (req as any).user = {
    id: 'mock-user-id-1234',
  };
  next();
}

export default mockAuth;