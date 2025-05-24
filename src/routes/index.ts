import express from "express";
import { userRoutes } from './user.route';

export const routes = (app: express.Application) => {
  app.use(express.json());
  app.use(userRoutes);
}