const fetch = require('node-fetch');

exports.handler = async function(event, context) {
    try {
        const res = await fetch('https://api.quotable.io/random');
        const data = await res.json();
        return {
            statusCode: 200,
            body: JSON.stringify(data),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({'error: Failed to fetch quote'}),
        };
    }
};