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
interface ProjectInquiryEmailProps {
  firstName?: string;
}

// ─── Constants ────────────────────────────────────────────────────────────────
const SITE_URL      = "https://cruxstudios.dev";
const LOGO_URL      = "https://cruxstudios.dev/favicon.png";
const CONTACT_EMAIL = "contact@cruxstudios.dev";

// ─── Component ────────────────────────────────────────────────────────────────
export const ProjectInquiryEmail = ({
  firstName = "there",
}: ProjectInquiryEmailProps) => (
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

    <Preview>Got your inquiry, {firstName}. Here is what happens next.</Preview>

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
                <Text style={s.headerMeta}>Message Received</Text>
              </td>
            </tr>
          </table>
        </Section>

        {/* Cyan accent separator */}
        <div style={s.accentBar} />

        {/* Dark Hero Section */}
        <Section style={s.hero}>
          <Heading as="h1" style={s.heroH1}>
            Got it, {firstName}.
          </Heading>
          <Text style={s.heroBody}>
            Your message is with us. We read every inquiry personally and you will
            hear back within <span style={{ color: "#00F0FF", fontWeight: 600 }}>24 hours</span> with
            a direct, honest response.
          </Text>
          <Button href={`${SITE_URL}#projects`} style={s.heroCta}>
            See what we've shipped
          </Button>
        </Section>

        {/* Process Section */}
        <Section style={s.section}>
          <Text style={s.overline}>What happens next</Text>

          <Row style={s.stepRow}>
            <Column style={s.stepIndex}><Text style={s.stepNum}>1</Text></Column>
            <Column style={s.stepBody}>
              <Text style={s.stepTitle}>We review your brief</Text>
              <Text style={s.stepDesc}>
                We read it before we call. We map the right approach, spot
                gaps, and come in prepared.
              </Text>
            </Column>
          </Row>

          <Row style={s.stepRow}>
            <Column style={s.stepIndex}><Text style={s.stepNum}>2</Text></Column>
            <Column style={s.stepBody}>
              <Text style={s.stepTitle}>30-minute intro call</Text>
              <Text style={s.stepDesc}>
                No pitch. Just sharp questions to align on scope, tech, and
                what we'd actually build.
              </Text>
            </Column>
          </Row>

          <Row style={s.stepRow}>
            <Column style={s.stepIndex}><Text style={s.stepNum}>3</Text></Column>
            <Column style={s.stepBody}>
              <Text style={s.stepTitle}>Proposal with a flat quote</Text>
              <Text style={s.stepDesc}>
                Scope, timeline, and a clear price. No retainers, no
                surprises. You approve before anything starts.
              </Text>
            </Column>
          </Row>

          <Row style={s.stepRow}>
            <Column style={s.stepIndex}><Text style={s.stepNum}>4</Text></Column>
            <Column style={s.stepBody}>
              <Text style={s.stepTitle}>We build, you own it all</Text>
              <Text style={s.stepDesc}>
                Weekly updates throughout. On delivery, the full source code
                is yours. No lock-in, no subscriptions.
              </Text>
            </Column>
          </Row>
        </Section>

        {/* Stats row */}
        <Section style={{ padding: "28px 20px 0" }}>
          <table
            width="100%"
            cellPadding="0"
            cellSpacing="0"
            border={0}
            style={{
              backgroundColor: DARK,
              borderRadius: "10px",
              padding: "20px 0",
              tableLayout: "fixed",
              width: "100%",
            }}
          >
            <tr>
              <td style={s.statColLeft}>
                <Text style={s.statNum}>9+</Text>
                <Text style={s.statLabel}>Live Apps Managed</Text>
              </td>
              <td style={s.statColCenter}>
                <Text style={s.statNum}>24 h</Text>
                <Text style={s.statLabel}>Response time</Text>
              </td>
              <td style={s.statColRight}>
                <Text style={s.statNum}>100%</Text>
                <Text style={s.statLabel}>You Own All Code</Text>
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
                <Link href={SITE_URL} style={s.footerLink}>Website</Link>
                <span style={{ color: "#8E99A0", padding: "0 6px" }}>·</span>
                <Link href={`mailto:${CONTACT_EMAIL}`} style={s.footerLink}>Email us</Link>
              </td>
            </tr>
          </table>
          <Text style={s.footerDisclaimer}>
            You're getting this because you submitted a project inquiry at
            cruxstudios.dev. Just reply here to reach our team directly.
          </Text>
        </Section>

      </Container>
    </Body>
  </Html>
);

export default ProjectInquiryEmail;

// ─── Styles ───────────────────────────────────────────────────────────────────
const FONT = "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif";
const DARK   = "#121417";
const CYAN   = "#00F0FF";
const SLATE  = "#8E99A0";
const MUTED  = "#4D585F";
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
  hero: {
    backgroundColor: DARK,
    padding: "36px 20px 32px",
  },
  heroH1: {
    color: "#fff",
    fontSize: "26px",
    fontWeight: "700",
    letterSpacing: "-0.4px",
    lineHeight: "1.2",
    margin: "0 0 14px",
  },
  heroBody: {
    color: "#C5D0D6",
    fontSize: "15px",
    lineHeight: "1.65",
    margin: "0 0 24px",
  },
  heroCta: {
    backgroundColor: CYAN,
    borderRadius: "100px",
    color: DARK,
    display: "inline-block",
    fontSize: "13px",
    fontWeight: "700",
    padding: "12px 24px",
    textDecoration: "none",
  },
  section: {
    padding: "28px 20px 0",
  },
  overline: {
    color: SLATE,
    fontSize: "10px",
    fontWeight: "700",
    letterSpacing: "1.6px",
    margin: "0 0 16px",
    textTransform: "uppercase",
  },
  stepRow: {
    marginBottom: "18px",
  },
  stepIndex: {
    verticalAlign: "top",
    width: "28px",
    paddingTop: "2px",
  },
  stepNum: {
    backgroundColor: DARK,
    borderRadius: "4px",
    color: CYAN,
    display: "inline-block",
    fontSize: "10px",
    fontWeight: "700",
    margin: "0",
    padding: "3px 6px",
    textAlign: "center",
  },
  stepBody: {
    paddingLeft: "10px",
    verticalAlign: "top",
  },
  stepTitle: {
    color: DARK,
    fontSize: "14.5px",
    fontWeight: "600",
    lineHeight: "1.4",
    margin: "0 0 2px",
  },
  stepDesc: {
    color: MUTED,
    fontSize: "13px",
    lineHeight: "1.6",
    margin: "0",
  },
  statColLeft: {
    textAlign: "center",
    width: "33.33%",
    padding: "0 8px",
    borderRight: "1px solid rgba(255,255,255,0.08)",
    verticalAlign: "middle",
  },
  statColCenter: {
    textAlign: "center",
    width: "33.33%",
    padding: "0 8px",
    borderRight: "1px solid rgba(255,255,255,0.08)",
    verticalAlign: "middle",
  },
  statColRight: {
    textAlign: "center",
    width: "33.33%",
    padding: "0 8px",
    verticalAlign: "middle",
  },
  statNum: {
    color: CYAN,
    fontSize: "22px",
    fontWeight: "700",
    letterSpacing: "-0.4px",
    margin: "0 0 4px",
    lineHeight: "1.1",
  },
  statLabel: {
    color: "#8E99A0",
    fontSize: "11px",
    fontWeight: "500",
    margin: "0",
    lineHeight: "1.3",
  },
  footerRule: {
    borderColor: BORDER,
    margin: "28px 20px 0",
  },
  footer: {
    padding: "20px 20px 36px",
  },
  footerBrand: {
    color: DARK,
    fontSize: "13px",
    fontWeight: "700",
    margin: "0 0 2px",
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
