import sgMail from '@sendgrid/mail';

// Set the API key for SendGrid
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function handler(event, context) {
    // Ensure the HTTP method is POST
    if (event.httpMethod !== "POST") {
        // If not, return a 405 Method Not Allowed error
        return {
            statusCode: 405,
            body: JSON.stringify({ message: "Method Not Allowed" })
        };
    }

    try {
        // Parse the JSON body from the event
        const data = JSON.parse(event.body);

        // Construct the message object
        const msg = {
            to: process.env.EMAIL_TO,
            from: process.env.EMAIL_FROM,
            subject: 'Contact me DEV',
            text: `New inquiry from ${data.name}: ${data.message}`,
            html: `<strong>New inquiry from ${data.name}:</strong> <p>${data.message}</p>`,
        };

        // Send the email via SendGrid
        await sgMail.send(msg);

        // Return a success response
        return {
            statusCode: 200,
            body: JSON.stringify({ message: "Email sent successfully" })
        };
    } catch (error) {
        console.error(error);
        // Return a 500 Internal Server Error response if an error occurs
        return {
            statusCode: 500,
            body: JSON.stringify({ message: "Failed to send email", error: error.message })
        };
    }
};
