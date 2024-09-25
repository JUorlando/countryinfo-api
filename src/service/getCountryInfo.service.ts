import axios from "axios";

const API_BASE_URL = "https://date.nager.at/api/v3/CountryInfo";
const POPULATION_API_URL = "https://countriesnow.space/api/v0.1/countries/population";
const FLAG_API_URL = "https://countriesnow.space/api/v0.1/countries/flag/images";

const getCountryInfo = async (countryCode: string) => {
  try {
    const countryResponse = await axios.get(`${API_BASE_URL}/${countryCode}`);

    if (!countryResponse.data || !countryResponse.data.commonName) {
      throw new Error(`No data found for country code: ${countryCode}`);
    }

    const countryData = countryResponse.data;

    const populationResponse = await axios.get(POPULATION_API_URL);

    const populationData = populationResponse.data.data.find(
      (country: any) => country.country === countryData.commonName
    );

    let populationCounts = [];

    if (populationData) {
      populationCounts = populationData.populationCounts || [];
    } else {
      console.warn(`No population data found for country: ${countryData.commonName}`);
    }

    const flagResponse = await axios.get(FLAG_API_URL);
    const flagData = flagResponse.data.data.find(
      (country: any) => country.iso2 === countryData.countryCode
    );

    if (!flagData) {
      console.warn(`No flag data found for country code: ${countryData.countryCode}`);
    }

    return {
      commonName: countryData.commonName || null,
      officialName: countryData.officialName || null,
      countryCode: countryData.countryCode || null,
      region: countryData.region || null,
      borders: countryData.borders || [],
      population: populationCounts,
      flagUrl: flagData ? flagData.flag : null,
    };
  } catch (error) {
    console.error("Error fetching country info:", error.message);
    console.error("Error details:", error.response?.data || error.message);
    throw new Error("Failed to fetch country info.");
  }
};

export default getCountryInfo;


