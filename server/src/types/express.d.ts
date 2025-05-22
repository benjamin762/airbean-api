import { Request, Response, NextFunction } from 'express';

declare global {
  namespace Express {
    interface User {
      id: string;
      // add other props if needed
    }
    interface Request {
      user?: User | null;
    }
  }
}

export {};

