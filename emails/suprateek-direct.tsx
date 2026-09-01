import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

// ─── Props ────────────────────────────────────────────────────────────────────
interface SuprateekDirectEmailProps {
  recipientName?: string;
  subjectLine?: string;
  content?: string;
}

// ─── Constants ────────────────────────────────────────────────────────────────
const SITE_URL = "https://cruxstudios.dev";
const LOGO_URL = "https://cruxstudios.dev/favicon.png";

// ─── Component ────────────────────────────────────────────────────────────────
export const SuprateekDirectEmail = ({
  recipientName = "there",
  subjectLine = "Quick update on our project",
  content = "\nWanted to quickly follow up on our previous conversation regarding the app development and roadmap.\n\nLet me know if you have any questions or when you'd like to sync up.",
}: SuprateekDirectEmailProps) => {
  const paragraphs = content.split("\n\n").filter(Boolean);

  return (
    <Html lang="en" dir="ltr">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="color-scheme" content="light dark" />
        <meta name="supported-color-schemes" content="light dark" />
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
          body {
            margin: 0 !important;
            padding: 0 !important;
            width: 100% !important;
            -webkit-text-size-adjust: 100% !important;
          }
        `}</style>
      </Head>

      <Preview>{subjectLine}</Preview>

      <Body style={s.body}>
        <Container style={s.container}>

          {/* Branded Header */}
          <Section style={s.header}>
            <table
              width="100%"
              cellPadding="0"
              cellSpacing="0"
              border={0}
              style={{ width: "100%" }}
            >
              <tr>
                <td align="left" style={{ verticalAlign: "middle" }}>
                  <table cellPadding="0" cellSpacing="0" border={0}>
                    <tr>
                      <td style={{ verticalAlign: "middle", width: "32px", paddingRight: "10px" }}>
                        <Img
                          src={LOGO_URL}
                          alt="Crux Studios"
                          width={28}
                          height={28}
                          style={{
                            display: "block",
                            borderRadius: "50%",
                            backgroundColor: "#121417",
                          }}
                        />
                      </td>
                      <td style={{ verticalAlign: "middle" }}>
                        <Text style={s.brandTitle}>Crux Studios</Text>
                      </td>
                    </tr>
                  </table>
                </td>
                <td align="right" style={{ verticalAlign: "middle", textAlign: "right" }}>
                  <Text style={s.headerMeta}>Direct Message</Text>
                </td>
              </tr>
            </table>
          </Section>

          {/* Cyan accent separator */}
          <div style={s.accentBar} />

          {/* Main Body */}
          <Section style={s.mainSection}>
            <Heading as="h1" style={s.greetingHeading}>
              Hi {recipientName},
            </Heading>

            {paragraphs.map((p, i) => (
              <Text key={i} style={s.paragraphText}>
                {p}
              </Text>
            ))}
          </Section>

          {/* Sender Signature */}
          <Section style={s.signatureSection}>
            <Hr style={s.signatureDivider} />
            <table cellPadding="0" cellSpacing="0" border={0}>
              <tr>
                <td style={{ width: "40px", verticalAlign: "middle", paddingRight: "14px" }}>
                  <table
                    cellPadding="0"
                    cellSpacing="0"
                    border={0}
                    style={s.avatarBadgeTable}
                  >
                    <tr>
                      <td align="center" style={s.avatarBadgeTd}>
                        SY
                      </td>
                    </tr>
                  </table>
                </td>
                <td style={{ verticalAlign: "middle" }}>
                  <Text style={s.senderName}>Suprateek Yawagal</Text>
                  <Text style={s.senderRole}>Studio Lead &amp; Full-Stack Developer</Text>
                </td>
              </tr>
            </table>
          </Section>

          {/* Footer */}
          <Hr style={s.footerRule} />
          <Section style={s.footer}>
            <table
              width="100%"
              cellPadding="0"
              cellSpacing="0"
              border={0}
              style={{ width: "100%" }}
            >
              <tr>
                <td align="left" style={{ verticalAlign: "top" }}>
                  <Text style={s.footerBrand}>Crux Studios</Text>
                  <Text style={s.footerSub}>Bangalore, India</Text>
                </td>
                <td align="right" style={{ verticalAlign: "top", textAlign: "right" }}>
                  <Link href={SITE_URL} style={s.footerLink}>
                    Website
                  </Link>
                  <span style={{ color: "#8E99A0", padding: "0 6px" }}>·</span>
                  <Link href="mailto:contact@cruxstudios.dev" style={s.footerLink}>
                    contact@cruxstudios.dev
                  </Link>
                </td>
              </tr>
            </table>
            <Text style={s.footerDisclaimer}>
              Crux Studios · Custom Web &amp; Mobile App Development.
            </Text>
          </Section>

        </Container>
      </Body>
    </Html>
  );
};

export default SuprateekDirectEmail;

// ─── Styles ───────────────────────────────────────────────────────────────────
const FONT = "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif";
const DARK = "#121417";
const CYAN = "#00F0FF";
const SLATE = "#8E99A0";
const BORDER = "#E8ECEF";

const s: Record<string, React.CSSProperties> = {
  body: {
    backgroundColor: "#ffffff",
    fontFamily: FONT,
    margin: "0 auto",
    padding: "0",
    width: "100%",
  },
  container: {
    backgroundColor: "#ffffff",
    margin: "0 auto",
    maxWidth: "600px",
    width: "100%",
  },
  header: {
    padding: "24px 20px 20px",
    backgroundColor: "#ffffff",
  },
  brandTitle: {
    color: DARK,
    fontSize: "16px",
    fontWeight: "700",
    letterSpacing: "-0.3px",
    margin: "0",
    lineHeight: "1",
  },
  headerMeta: {
    color: SLATE,
    fontSize: "11px",
    fontWeight: "600",
    letterSpacing: "1px",
    lineHeight: "1",
    margin: "0",
    textTransform: "uppercase",
    whiteSpace: "nowrap",
  },
  accentBar: {
    backgroundColor: CYAN,
    height: "3px",
    width: "100%",
  },
  mainSection: {
    padding: "28px 20px 10px",
  },
  greetingHeading: {
    color: DARK,
    fontSize: "22px",
    fontWeight: "700",
    letterSpacing: "-0.4px",
    lineHeight: "1.3",
    margin: "0 0 20px",
  },
  paragraphText: {
    color: "#2C3437",
    fontSize: "15px",
    lineHeight: "1.65",
    margin: "0 0 18px",
  },
  signatureSection: {
    padding: "16px 20px 0",
  },
  signatureDivider: {
    borderColor: BORDER,
    margin: "0 0 22px",
  },
  avatarBadgeTable: {
    width: "42px",
    height: "42px",
    borderRadius: "21px",
    backgroundColor: DARK,
    borderCollapse: "separate" as const,
  },
  avatarBadgeTd: {
    width: "42px",
    height: "42px",
    textAlign: "center" as const,
    verticalAlign: "middle" as const,
    color: CYAN,
    fontSize: "13px",
    fontWeight: "700",
    fontFamily: FONT,
    lineHeight: "1",
  },
  senderName: {
    color: DARK,
    fontSize: "15px",
    fontWeight: "700",
    margin: "0 0 2px",
  },
  senderRole: {
    color: SLATE,
    fontSize: "13px",
    margin: "0",
  },
  footerRule: {
    borderColor: BORDER,
    margin: "28px 20px 0",
  },
  footer: {
    padding: "24px 40px 32px",
  },
  footerBrand: {
    color: DARK,
    fontSize: "13px",
    fontWeight: "700",
    margin: "0 0 1px",
  },
  footerSub: {
    color: SLATE,
    fontSize: "12px",
    margin: "0",
  },
  footerLink: {
    color: SLATE,
    fontSize: "12px",
    textDecoration: "none",
  },
  footerDisclaimer: {
    color: "#BABABA",
    fontSize: "11px",
    lineHeight: "1.5",
    margin: "18px 0 0",
  },
};
