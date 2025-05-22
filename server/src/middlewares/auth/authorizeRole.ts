import { Response, NextFunction } from 'express';
import { AuthenticatedRequest } from '../../types';

function authorizeRole(allowedRoles: string[]) {
  return (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    const userRole = req.user?.role;

    if (!userRole) {
      return res
        .status(403)
        .json({ error: 'Access denied. User role not found.' });
    }

    if (!allowedRoles.includes(userRole)) {
      return res
        .status(403)
        .json({ error: 'Access denied. Insufficient permissions.' });
    }

    next();
  };
}

export default authorizeRole;
