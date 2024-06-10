import fetch from 'node-fetch';

export async function handler(event, context) {
    console.log('Function execution started');
    try {
        console.log('Fetching quote from API');
        const res = await fetch('https://api.quotable.io/random');
        
        if (!res.ok) {
            throw new Error(`Network response was not ok: ${res.statusText}`);
        }

        console.log('Parsing response as JSON');
        const data = await res.json();
        
        console.log('Returning success response');
        return {
            statusCode: 200,
            body: JSON.stringify(data),
        };
    } catch (error) {
        console.error('Error fetching the quote:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: `Failed to fetch quote: ${error.message}` }),
        };
    }
};
