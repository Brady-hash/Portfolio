export async function handler(event, context) {
    console.log("Fetching quote from API");
    try {
        const res = await fetch('https://api.quotable.io/random');
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        console.log("Returning success response");
        return {
            statusCode: 200,
            body: JSON.stringify(data),
        };
    } catch (error) {
        console.error("Error fetching the quote:", error.message);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Failed to fetch quote', details: error.message }),
        };
    }
}
