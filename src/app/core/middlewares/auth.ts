import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { STATUS_CODES } from '../constants/httpStatusCode';
import config from '../../config';

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;
  // jodi auth header na thake and bearar diye suru na hoy tokhon ata sotti hobe
  if (!authHeader || !authHeader.startsWith('Bearer '))
    return res
      .status(STATUS_CODES.UNAUTHORIZED)
      .json({ message: 'Unauthorized' });

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, config.jwt.secret!);
    (req as any).user = decoded;
  } catch (error) {
    res.status(STATUS_CODES.UNAUTHORIZED).json({ message: 'Invalid Token' });
  }
};
