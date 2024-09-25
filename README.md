Country Information API

This project is a Node.js application that retrieves information about countries, including their common names, official names, population data, borders, and flag images. It uses external APIs to fetch the necessary data and returns it in a structured format.

Features

Fetches country information including:

Common Name
Official Name
Country Code
Region
Borders
Population data from 1961 to 2018
Flag image URL
Handles errors gracefully and provides informative error messages.

Technologies Used

Node.js: JavaScript runtime for server-side development.
Express: Web framework for Node.js to build RESTful APIs.
Axios: Promise-based HTTP client for making requests to external APIs.
Zod: Type-safe schema declaration and validation library.
TypeScript: Superset of JavaScript that adds static types.
CORS: Middleware for enabling Cross-Origin Resource Sharing.
dotenv: Module to load environment variables from a .env file.

API Endpoints

Get All Countries in API

Endpoint: GET /countries

Get Country Information
Endpoint: GET /countries/:countryCode

Parameters:

countryCode (string): The ISO2 code of the country (e.g., "UA" for Ukraine).
Response: Returns a JSON object containing:

commonName: Common name of the country
officialName: Official name of the country
countryCode: ISO2 country code
region: Region where the country is located
borders: Array of neighboring countries
population: Array of population counts from 1961 to 2018
flagUrl: URL of the country's flag image
Example Request
bash

GET http://localhost:8888/countries/UA
Example Response
json

{
  "commonName": "Ukraine",
  "officialName": "Ukraine",
  "countryCode": "UA",
  "region": "Europe",
  "borders": [
    "Belarus",
    "Hungary",
    "Moldova",
    "Poland",
    "Romania",
    "Russia",
    "Slovakia"
  ],
  "population": [
    { "year": 1960, "value": 42664652 },
    { "year": 1961, "value": 43206345 }
    // ... more population data
  ],
  "flagUrl": "https://example.com/flags/ua.png"
}
Installation
Clone the repository:

bash

git clone https://github.com/JUorlando/countryinfo-api.git
Navigate to the project directory: https://github.com/JUorlando/countryinfo-api

bash

cd countryinfo-api
Install the required dependencies:

bash

npm install
Start the application:

bash

npm run dev
Usage
Once the server is running, you can make a GET request to the /countryInfo/:countryCode endpoint using your preferred HTTP client (e.g., Postman, curl) to retrieve country information.

Error Handling
The application includes error handling to manage cases where:

No data is found for a given country code.
Issues occur while fetching data from external APIs.
