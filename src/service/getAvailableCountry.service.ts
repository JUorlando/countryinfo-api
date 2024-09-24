import axios from "axios";
import { AppError } from "../errors";

const API_BASE_URL = "https://date.nager.at/api/v3";

const getAvailableCountries = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/AvailableCountries`);
    return response.data;
  } catch (error) {
    console.error("Error fetching available countries:", error.message);
    throw new AppError("Failed to fetch available countries.", 500);
  }
};

export default getAvailableCountries;