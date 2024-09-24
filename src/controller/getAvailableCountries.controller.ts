import { Request, Response } from "express";
import { getAvailableCountries } from "../service";

const getAvailableCountriesController = async (req: Request, res: Response) => {
  try {
    const countries = await getAvailableCountries();
    res.json(countries);
  } catch (error) {
    res.status(error.statusCode || 500).json({ message: error.message });
  }
};

export default getAvailableCountriesController;
