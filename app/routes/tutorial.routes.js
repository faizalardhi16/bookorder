import tutorialController from "../controller/tutorial";
import { Router } from "express";

export const tutorialRoutes = (app) => {
  const router = Router();

  router.post("/", tutorialController.create);

  app.use("/api/tutorial", router);
};
