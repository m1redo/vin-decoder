# VIN Decoder

This project was created as a test assignment. The application allows users to decode VIN numbers, review vehicle information, and explore variable descriptions provided by the NHTSA API.

## Features

- VIN input form with validation
- VIN decoding using NHTSA API
- Display of decoded vehicle data
- Display of API message
- History of the last 3 decoded VINs
- Reusing VINs from history
- Variables page with all available vehicle variables
- Variable details page for each variable

## Technologies Used

- React
- React Router DOM
- CSS
- NHTSA vPIC API

## API Endpoints Used

- Decode VIN  
  `/vehicles/decodevin/{vin}?format=json`

- Get Vehicle Variable List  
  `/vehicles/getvehiclevariablelist?format=json`

## Local Setup

1. Clone the repository:

    git clone `https://github.com/m1redo/vin-decoder`

2. Go to the project folder:

    cd vin-decoder

3. Install dependencies:

    npm install

4. Start the development server:

    npm start

5. Open in browser:

    `http://localhost:3000`


## Project Structure

src/
├─ api/
│  └─ nhtsa-api.js
├─ components/
│  ├─ decode-results.js
│  ├─ header.js
│  ├─ layout.js
│  ├─ variable-details.js
│  ├─ variables-list.js
│  ├─ vin-form.js
│  └─ vin-history.js
├─ pages/
│  ├─ home-page.js
│  ├─ variable-page.js
│  └─ variables-page.js
├─ utils/
│  └─ storage.js
├─ app.js
├─ index.js
├─ router.js
└─ styles.css

## Available Pages

`/` — main page with VIN decoder form, history, and decode results
`/variables` — list of all available vehicle variables
`/variables/:variableId` — details for a selected variable

## Deployment

Live demo:
``


## Notes
The application uses the public NHTSA vPIC API for vehicle data decoding.