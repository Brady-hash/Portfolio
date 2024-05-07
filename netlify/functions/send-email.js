const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.handler = async function(event, context) {
    if (event.httpMethod !== "POST") {
        console.error(error, "error");
    }

    try {
        const data = JSON.parse(event.body);

        const msg = {
            to: process.env.EMAIL_TO,
            from: process.env.EMAIL_FROM,
            subject: 'Contact me DEV',
            text: 'New inquiry from ${data.name}: ${data.messgae}',
            html: '<strong>New inquiry from ${data.name}:</strong> <p>${data.message}</p>',
        };

        await sgMail.send(msg);

        return {
            statusCode: 200,
            body: JSON.stringify({ message: "Email sent successfully" })
          };
        } catch (error) {
          console.error(error);
          return {
            statusCode: 500,
            body: JSON.stringify({ message: "Failed to send email", error: error })
          };
        }
      };