import jwt from 'jsonwebtoken';

import { HttpStatusCode } from '@/constants/constants.js';

export class JWTError extends jwt.JsonWebTokenError {
  constructor(message: string) {
    super(message);

    Error.captureStackTrace(this, this.constructor);
  }
}

export class HttpError extends Error {
  statusCode: number;
  status: 'fail' | 'error';
  isOperational: boolean;

  constructor(message: string, statusCode: HttpStatusCode) {
    super(message);
    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);
  }
}

export class NotFoundError extends HttpError {
  constructor(message: string) {
    super(message, HttpStatusCode.NOT_FOUND);
  }
}

export class BadRequestError extends HttpError {
  constructor(message: string) {
    super(message, HttpStatusCode.BAD_REQUEST);
  }
}

export class UnauthorizedError extends HttpError {
  constructor(message: string) {
    super(message, HttpStatusCode.UNAUTHORIZED);
  }
}

export class ForbiddenError extends HttpError {
  constructor(message: string) {
    super(message, HttpStatusCode.FORBIDDEN);
  }
}

export class ServerError extends HttpError {
  constructor(message: string) {
    super(message, HttpStatusCode.SERVER_ERROR);
  }
}
