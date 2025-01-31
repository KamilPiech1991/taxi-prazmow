const axios = require("axios");

exports.handler = async function (event, context) {
    try {
        const googleUrl = "https://www.google.com/maps/place/?q=Bluu+taxi+Prażmów+Piaseczno&shndl=30&shem=uaasie&source=sh/x/loc/uni/m1/1&kgs=ce2c068abe79e150";
        const response = await axios.get(googleUrl, {
            headers: { "User-Agent": "Mozilla/5.0" },
        });

        return {
            statusCode: 200,
            headers: { "Access-Control-Allow-Origin": "*" },
            body: JSON.stringify({ html: response.data }),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Błąd pobierania opinii" }),
        };
    }
};
