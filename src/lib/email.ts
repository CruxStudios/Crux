import { Resend } from "resend";
import { ProjectInquiryEmail } from "../../emails/project-inquiry";
import { SuprateekDirectEmail } from "../../emails/suprateek-direct";
import { UllasDirectEmail } from "../../emails/ullas-direct";

// Initialize Resend with API Key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY || "");

export interface SendInquiryOptions {
  toEmail: string;
  firstName?: string;
}

export interface SendDirectEmailOptions {
  toEmail: string;
  recipientName?: string;
  subject: string;
  messageContent: string;
}

/**
 * 1. Automatic response for project/general contact inquiries
 */
export async function sendInquiryConfirmation({ toEmail, firstName = "there" }: SendInquiryOptions) {
  return await resend.emails.send({
    from: "Crux Studios <contact@cruxstudios.dev>",
    to: [toEmail],
    subject: `Got your message, ${firstName}`,
    react: ProjectInquiryEmail({ firstName }),
  });
}

/**
 * 2. Send custom direct message from Suprateek Yawagal
 */
export async function sendSuprateekDirect({
  toEmail,
  recipientName = "there",
  subject,
  messageContent,
}: SendDirectEmailOptions) {
  return await resend.emails.send({
    from: "Suprateek Yawagal <suprateek@cruxstudios.dev>",
    to: [toEmail],
    subject: subject,
    react: SuprateekDirectEmail({
      recipientName,
      subjectLine: subject,
      content: messageContent,
    }),
  });
}

/**
 * 3. Send custom direct message from Ullas M
 */
export async function sendUllasDirect({
  toEmail,
  recipientName = "there",
  subject,
  messageContent,
}: SendDirectEmailOptions) {
  return await resend.emails.send({
    from: "Ullas M <ullas@cruxstudios.dev>",
    to: [toEmail],
    subject: subject,
    react: UllasDirectEmail({
      recipientName,
      subjectLine: subject,
      content: messageContent,
    }),
  });
}
