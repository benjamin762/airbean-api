import { Request } from 'express';
import { QueryResult } from 'pg';

export interface User {
  id: string;
  username: string;
  hashedpassword?: string;
  role: string;
  created_at: Date;
}

export interface AuthenticatedRequest extends Request {
  user?: {
    id: string;
    role: string;
    iat: number;
    exp: number;
  };
}

export interface UserWithPassword extends User {
  hashedpassword: string;
}

export interface UserQueryResult extends QueryResult<User> {}
export interface UserWithPasswordQueryResult
  extends QueryResult<UserWithPassword> {}
