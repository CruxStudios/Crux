import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

// ─── Props ────────────────────────────────────────────────────────────────────
interface UllasDirectEmailProps {
  recipientName?: string;
  subjectLine?: string;
  content?: string;
}

// ─── Constants ────────────────────────────────────────────────────────────────
const SITE_URL = "https://cruxstudios.dev";



// ─── Component ────────────────────────────────────────────────────────────────
export const UllasDirectEmail = ({
  recipientName = "there",
  subjectLine = "Technical update on your system architecture",
  content = "\nFollowing up on our architecture review. We have mapped out the backend infrastructure, database models, and deployment pipeline for the application.\n\nLet me know if you want to review the technical specification together.",
}: UllasDirectEmailProps) => {
  const paragraphs = content.split("\n\n").filter(Boolean);

  return (
    <Html lang="en" dir="ltr">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="color-scheme" content="light dark" />
        <meta name="supported-color-schemes" content="light dark" />
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
          body, table, td, p, a, li, blockquote {
            -webkit-text-size-adjust: 100% !important;
            -ms-text-size-adjust: 100% !important;
          }
          body {
            margin: 0 !important;
            padding: 0 !important;
            width: 100% !important;
          }

          @media only screen and (max-width: 600px) {
            .email-container {
              width: 100% !important;
              max-width: 100% !important;
              min-width: 100% !important;
              border-radius: 0 !important;
            }
            .mobile-pad {
              padding-left: 24px !important;
              padding-right: 24px !important;
            }
            .mobile-heading {
              font-size: 28px !important;
              line-height: 1.3 !important;
            }
            .mobile-text {
              font-size: 17px !important;
              line-height: 1.7 !important;
            }
            .mobile-sender-name {
              font-size: 17px !important;
            }
            .mobile-sender-role {
              font-size: 14px !important;
            }
          }
        `}</style>
      </Head>

      <Preview>{subjectLine}</Preview>

      <Body style={s.body} className="body">
        <Container style={s.container} className="email-container">

          {/* Branded Header */}
          <Section style={s.header} className="mobile-pad">
            <table
              width="100%"
              cellPadding="0"
              cellSpacing="0"
              border={0}
              style={{ width: "100%" }}
            >
              <tr>
                <td align="left" style={{ verticalAlign: "middle" }}>
                  <Text style={s.brandTitle}>
                    <span style={{ color: "#121417", fontWeight: 800, letterSpacing: "-0.3px", fontSize: "18px" }}>CRUX</span>
                    <span style={{ color: "#00F0FF", fontWeight: 900, fontSize: "18px" }}>.</span>
                    <span style={{ color: "#6A7785", fontWeight: 700, fontSize: "15px", letterSpacing: "-0.2px", marginLeft: "4px" }}>STUDIOS</span>
                  </Text>
                </td>
                <td align="right" style={{ verticalAlign: "middle", textAlign: "right" }}>
                  <Text style={s.headerMeta}>Direct Message</Text>
                </td>
              </tr>
            </table>
          </Section>



          {/* Main Body */}
          <Section style={s.mainSection} className="mobile-pad">
            <Heading as="h1" style={s.greetingHeading} className="mobile-heading">
              Hi {recipientName},
            </Heading>

            {paragraphs.map((p, i) => (
              <Text key={i} style={s.paragraphText} className="mobile-text">
                {p}
              </Text>
            ))}
          </Section>

          {/* Sender Signature */}
          <Section style={s.signatureSection} className="mobile-pad">
            <Hr style={s.signatureDivider} />
            <table cellPadding="0" cellSpacing="0" border={0}>
              <tr>
                <td style={{ width: "52px", verticalAlign: "middle", paddingRight: "14px" }}>
                  <table
                    cellPadding="0"
                    cellSpacing="0"
                    border={0}
                    style={s.avatarBadgeTable}
                  >
                    <tr>
                      <td align="center" style={s.avatarBadgeTd}>
                        UM
                      </td>
                    </tr>
                  </table>
                </td>
                <td style={{ verticalAlign: "middle" }}>
                  <Text style={s.senderName} className="mobile-sender-name">Ullas M</Text>
                  <Text style={s.senderRole} className="mobile-sender-role">Studio Lead &amp; Full-Stack Developer</Text>
                </td>
              </tr>
            </table>
          </Section>

          {/* Footer */}
          <Hr style={s.footerRule} />
          <Section style={s.footer} className="mobile-pad">
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
                  <Link href="mailto:contact@cruxstudios.dev" style={s.footerLink}>
                    contact@cruxstudios.dev
                  </Link>
                  <br />
                  <Link href={SITE_URL} style={{ ...s.footerLink, display: "inline-block", marginTop: "4px" }}>
                    🌐 cruxstudios.dev
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

export default UllasDirectEmail;

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
    padding: "24px 24px 20px",
    backgroundColor: "#ffffff",
    borderBottom: "3px solid #00F0FF",
  },
  brandTitle: {
    color: DARK,
    fontSize: "17px",
    fontWeight: "700",
    letterSpacing: "-0.2px",
    margin: "0",
    padding: "0",
    lineHeight: "1.2",
    whiteSpace: "nowrap",
  },
  headerMeta: {
    color: "#8E99A0",
    fontSize: "9px",
    fontWeight: "600",
    letterSpacing: "0.8px",
    lineHeight: "1",
    margin: "0",
    textAlign: "right" as const,
    textTransform: "uppercase",
    whiteSpace: "nowrap",
  },
  mainSection: {
    padding: "28px 24px 10px",
  },
  greetingHeading: {
    color: DARK,
    fontSize: "28px",
    fontWeight: "700",
    letterSpacing: "-0.4px",
    lineHeight: "1.3",
    margin: "0 0 20px",
  },
  paragraphText: {
    color: "#2C3437",
    fontSize: "17px",
    lineHeight: "1.75",
    margin: "0 0 18px",
  },
  signatureSection: {
    padding: "16px 24px 0",
  },
  signatureDivider: {
    borderColor: BORDER,
    margin: "0 0 20px",
  },
  avatarBadgeTable: {
    width: "48px",
    height: "48px",
    borderRadius: "24px",
    backgroundColor: "#0D0F11",
    borderCollapse: "separate" as const,
  },
  avatarBadgeTd: {
    width: "48px",
    height: "48px",
    textAlign: "center" as const,
    verticalAlign: "middle" as const,
    color: CYAN,
    fontSize: "15px",
    fontWeight: "700",
    fontFamily: FONT,
    lineHeight: "1",
  },
  senderName: {
    color: DARK,
    fontSize: "17px",
    fontWeight: "700",
    margin: "0 0 3px",
  },
  senderRole: {
    color: SLATE,
    fontSize: "14px",
    margin: "0",
  },
  footerRule: {
    borderColor: BORDER,
    margin: "28px 24px 0",
  },
  footer: {
    padding: "20px 24px 32px",
  },
  footerBrand: {
    color: DARK,
    fontSize: "15px",
    fontWeight: "700",
    margin: "0 0 3px",
  },
  footerSub: {
    color: SLATE,
    fontSize: "13px",
    margin: "0",
  },
  footerLink: {
    color: SLATE,
    fontSize: "13px",
    textDecoration: "none",
  },
  footerDisclaimer: {
    color: "#BABABA",
    fontSize: "12px",
    lineHeight: "1.5",
    margin: "16px 0 0",
  },
};
