import readline from "readline";
import {
  sendInquiryConfirmation,
  sendSuprateekDirect,
  sendUllasDirect,
} from "../lib/email.ts";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const ask = (query: string): Promise<string> =>
  new Promise((resolve) => rl.question(query, resolve));

async function main() {
  console.log("\n========================================");
  console.log("   Crux Studios Email Dispatcher");
  console.log("========================================\n");
  console.log("Choose the email type to send:");
  console.log("  1) Project Inquiry Auto-Reply (from contact@cruxstudios.dev)");
  console.log("  2) Direct Message as Suprateek (from suprateek@cruxstudios.dev)");
  console.log("  3) Direct Message as Ullas (from ullas@cruxstudios.dev)");
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

      console.log(`\n⏳ Sending inquiry reply to ${toEmail}...`);
      const res = await sendInquiryConfirmation({ toEmail, firstName });
      console.log("✅ Email sent successfully!", res);
    } else if (choice === "2" || choice === "3") {
      const sender = choice === "2" ? "Suprateek" : "Ullas";
      const recipientName = (await ask("Recipient name (default 'there'): ")).trim() || "there";
      const subject = (await ask("Email subject line: ")).trim() || "Quick update from Crux Studios";
      
      console.log("\nEnter message content (Type your message, then press Enter):");
      const messageContent = await ask("> ");

      console.log(`\n⏳ Sending email as ${sender} to ${toEmail}...`);
      const res =
        choice === "2"
          ? await sendSuprateekDirect({
              toEmail,
              recipientName,
              subject,
              messageContent,
            })
          : await sendUllasDirect({
              toEmail,
              recipientName,
              subject,
              messageContent,
            });

      console.log("✅ Email sent successfully!", res);
    } else {
      console.log("Invalid option selected.");
    }
  } catch (error: any) {
    console.error("\n❌ Failed to send email:", error?.message || error);
  } finally {
    rl.close();
  }
}

main();
