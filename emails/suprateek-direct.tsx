import {
  Body,
  Button,
  Container,
  Column,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
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
const SENDER_EMAIL = "suprateek@cruxstudios.dev";
const PORTFOLIO_URL = "https://suprateekyawagal.in";

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
        <style>{`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');`}</style>
      </Head>

      <Preview>{subjectLine}</Preview>

      <Body style={s.body}>
        <Container style={s.container}>

          {/* Header */}
          <Section style={s.header}>
            <table width="100%" cellPadding="0" cellSpacing="0" border={0} style={{ width: "100%" }}>
              <tr>
                <td align="left" style={{ verticalAlign: "middle" }}>
                  <table cellPadding="0" cellSpacing="0" border={0}>
                    <tr>
                      <td style={{ verticalAlign: "middle", width: "26px", paddingRight: "10px" }}>
                        <Img
                          src={LOGO_URL}
                          alt="Crux Studios"
                          width={26}
                          height={26}
                          style={{ display: "block", borderRadius: "50%" }}
                        />
                      </td>
                      <td style={{ verticalAlign: "middle" }}>
                        <Text style={s.brandTitle}>Crux Studios</Text>
                      </td>
                    </tr>
                  </table>
                </td>
                <td align="right" style={{ verticalAlign: "middle" }}>
                  <Text style={s.headerMeta}>Direct Message</Text>
                </td>
              </tr>
            </table>
          </Section>

          {/* Body content */}
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
            <Row>
              <Column>
                <Text style={s.footerBrand}>Crux Studios</Text>
                <Text style={s.footerSub}>Bangalore, India</Text>
              </Column>
              <Column align="right" style={{ verticalAlign: "top" }}>
                <Link href={SITE_URL} style={s.footerLink}>Website</Link>
                {"  ·  "}
                <Link href="mailto:contact@cruxstudios.dev" style={s.footerLink}>contact@cruxstudios.dev</Link>
              </Column>
            </Row>
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
const FONT = "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";
const DARK = "#121417";
const CYAN = "#00F0FF";
const SLATE = "#8E99A0";
const MUTED = "#4D585F";
const BORDER = "#E8ECEF";

const s: Record<string, React.CSSProperties> = {
  body: {
    backgroundColor: "#EDF1F4",
    fontFamily: FONT,
    margin: "0",
    padding: "40px 0",
  },
  container: {
    backgroundColor: "#fff",
    borderRadius: "14px",
    borderTop: `3px solid ${CYAN}`,
    borderBottom: `3px solid ${CYAN}`,
    margin: "0 auto",
    maxWidth: "580px",
    overflow: "hidden",
  },
  header: {
    borderBottom: `1px solid ${BORDER}`,
    padding: "20px 40px",
  },
  brandTitle: {
    color: DARK,
    fontSize: "15px",
    fontWeight: "700",
    letterSpacing: "-0.2px",
    margin: "0",
    lineHeight: "1",
  },
  headerMeta: {
    color: "#8E99A0",
    fontSize: "10px",
    fontWeight: "500",
    letterSpacing: "1px",
    lineHeight: "1",
    margin: "0",
    textTransform: "uppercase",
  },
  mainSection: {
    padding: "36px 40px 10px",
  },
  greetingHeading: {
    color: DARK,
    fontSize: "22px",
    fontWeight: "700",
    letterSpacing: "-0.3px",
    lineHeight: "1.3",
    margin: "0 0 20px",
  },
  paragraphText: {
    color: "#2C3437",
    fontSize: "15px",
    lineHeight: "1.7",
    margin: "0 0 18px",
  },
  signatureSection: {
    padding: "16px 40px 0",
  },
  signatureDivider: {
    borderColor: BORDER,
    margin: "0 0 24px",
  },
  avatarBadgeTable: {
    width: "40px",
    height: "40px",
    borderRadius: "20px",
    backgroundColor: DARK,
    borderCollapse: "separate" as const,
  },
  avatarBadgeTd: {
    width: "40px",
    height: "40px",
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
    fontSize: "14px",
    fontWeight: "700",
    margin: "0 0 2px",
  },
  senderRole: {
    color: SLATE,
    fontSize: "12px",
    margin: "0 0 4px",
  },
  footerRule: {
    borderColor: BORDER,
    margin: "32px 40px 0",
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
