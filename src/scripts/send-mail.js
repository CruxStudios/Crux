import { Resend } from "resend";
import { ProjectInquiryEmail } from "../../emails/project-inquiry.js";
import { SuprateekDirectEmail } from "../../emails/suprateek-direct.js";
import { UllasDirectEmail } from "../../emails/ullas-direct.js";
import readline from "readline";

const resend = new Resend(process.env.RESEND_API_KEY || "");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const ask = (query) => new Promise((resolve) => rl.question(query, resolve));

async function main() {
  console.log("\n========================================");
  console.log("   Crux Studios Email Dispatcher");
  console.log("========================================\n");

  if (!process.env.RESEND_API_KEY) {
    console.error("❌ Error: RESEND_API_KEY not found. Ensure it's in your .env file.\n");
    rl.close();
    return;
  }

  console.log("Choose the email type to send:");
  console.log("  1) Inbound Auto-Reply (from Crux Studios <contact@cruxstudios.dev>)");
  console.log("  2) Direct Message as Suprateek (from Suprateek Yawagal <suprateek@cruxstudios.dev>)");
  console.log("  3) Direct Message as Ullas (from Ullas M <ullas@cruxstudios.dev>)");
  console.log("  0) Exit\n");

  const choice = (await ask("Select option (1, 2, 3): ")).trim();

  if (choice === "0") {
    console.log("Exiting.");
    rl.close();
    return;
  }

  const toEmail = (await ask("\nRecipient email address: ")).trim();
  if (!toEmail) {
    console.error("❌ Email address is required.");
    rl.close();
    return;
  }

  try {
    if (choice === "1") {
      const firstName = (await ask("Recipient first name (default 'there'): ")).trim() || "there";

      console.log(`\n⏳ Sending auto-reply to ${toEmail}...`);
      const { data, error } = await resend.emails.send({
        from: "Crux Studios <contact@cruxstudios.dev>",
        to: [toEmail],
        subject: `Got your message, ${firstName}`,
        react: ProjectInquiryEmail({ firstName }),
      });

      if (error) throw error;
      console.log("✅ Email sent successfully! ID:", data?.id);
    } else if (choice === "2" || choice === "3") {
      const isSuprateek = choice === "2";
      const senderName = isSuprateek ? "Suprateek Yawagal" : "Ullas M";
      const senderEmail = isSuprateek ? "suprateek@cruxstudios.dev" : "ullas@cruxstudios.dev";

      const recipientName = (await ask("Recipient name (default 'there'): ")).trim() || "there";
      const subject = (await ask("Email subject line: ")).trim() || "Quick update from Crux Studios";

      console.log("\nEnter message content (Type your text and press Enter):");
      const messageContent = await ask("> ");

      console.log(`\n⏳ Sending email as ${senderName} to ${toEmail}...`);
      const { data, error } = await resend.emails.send({
        from: `${senderName} <${senderEmail}>`,
        to: [toEmail],
        subject: subject,
        react: isSuprateek
          ? SuprateekDirectEmail({
              recipientName,
              subjectLine: subject,
              content: messageContent,
            })
          : UllasDirectEmail({
              recipientName,
              subjectLine: subject,
              content: messageContent,
            }),
      });

      if (error) throw error;
      console.log("✅ Email sent successfully! ID:", data?.id);
    } else {
      console.log("Invalid option selected.");
    }
  } catch (error) {
    console.error("\n❌ Failed to send email:", error.message || error);
    if (error.message && error.message.includes("domain")) {
      console.log("\n💡 Tip: Verify your domain 'cruxstudios.dev' on resend.com/domains or use onboarding@resend.dev for test sends to your registered email.");
    }
  } finally {
    rl.close();
  }
}

main();
