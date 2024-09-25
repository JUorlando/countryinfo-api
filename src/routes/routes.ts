import { Router } from "express";
import {
  getAvailableCountriesController,
  getCountryInfoController
} from "../controller";

const router = Router();

router.get("/countries", getAvailableCountriesController);

router.get("/countries/:countryCode", getCountryInfoController);

export default router;
