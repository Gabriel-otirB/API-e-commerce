import express, { NextFunction, Request, Response } from "express";
import { NotFoundError } from '../errors/not-found.error';

export const pageNotFoundHandler = (app: express.Application) => {
  app.use((req: Request, res: Response, next: NextFunction) => {
    next(new NotFoundError("Página não encontrada!"));
  });
}