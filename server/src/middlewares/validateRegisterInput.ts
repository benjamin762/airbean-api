import { Request, Response, NextFunction } from 'express';

const validateRegisterInput = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { username, password } = req.body;

  if (
    !username ||
    !password ||
    typeof username !== 'string' ||
    typeof password !== 'string'
  ) {
    return res
      .status(400)
      .json({
        error: 'Username and password are required and must be strings.',
      });
  }

  next();
};

export default validateRegisterInput;
