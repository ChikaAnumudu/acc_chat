import { resendClient } from "../lib/resend..js";
import { createWelcomeEmailTemplate } from "../emails/emailTemplates.js";

export const sendWelcomeEmail = async ( sendWelcomeEmail, name, clientURL ) => {
    const { data, error } = await resendClient.emails.send({
        from: `${sender.name} < ${sender.emails}>`,
        to: email,
        subject: "Welcome to Chatify!",
        html: createWelcomeEmailTemplate(name, clientURL)
    })

    if (error) {
        console.log("Error sending welcome email:", error);
        throw new Error("Failed to send welcome email");
    }

    console.log("Welcome Email sent successfully", data);
}