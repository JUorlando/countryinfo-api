import { Request, Response } from "express";
import getCountryInfo from "../service/getCountryInfo.service";

const getCountryInfoController = async (req: Request, res: Response) => {
  const { countryCode } = req.params;

  try {
    const countryInfo = await getCountryInfo(countryCode);
    return res.json(countryInfo);
  } catch (error) {
    console.error("Controller Error:", error);
    return res.status(error.statusCode || 500).json({ message: error.message });
  }
};

export default getCountryInfoController;

