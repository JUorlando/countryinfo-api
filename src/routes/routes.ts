import { Router } from "express";
import { getAvailableCountriesController } from "../controller";

const router = Router();

router.get("/countries", getAvailableCountriesController);

export default router;
