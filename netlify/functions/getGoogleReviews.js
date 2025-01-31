const axios = require("axios");
require("dotenv").config(); // Upewnij się, że ta linia jest dodana

exports.handler = async function (event, context) {
    try {
        const placeId = "ChIJ64oLnxe4HkcRpVhzih2GHWw"; // Zmień na swoje Place ID
        const apiKey = process.env.GOOGLE_API_KEY; // Pobiera klucz z pliku .env

        if (!apiKey) {
            throw new Error("Brak klucza API. Sprawdź plik .env");
        }

        const googleUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&key=${apiKey}`;

        const response = await axios.get(googleUrl);

        return {
            statusCode: 200,
            headers: { "Access-Control-Allow-Origin": "*" },
            body: JSON.stringify(response.data),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Błąd pobierania opinii", details: error.message }),
        };
    }
};
