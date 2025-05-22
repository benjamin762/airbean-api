// server/src/middleware/mockAuth.ts

import { Request, Response, NextFunction } from 'express';


function mockAuth(req: Request, res: Response, next: NextFunction) {
  (req as any).user = {
    id: '1644a5c9-d4d2-4876-b5e0-db631665cfd3',
  };
  next();
}

export default mockAuth;