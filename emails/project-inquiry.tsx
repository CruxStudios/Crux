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
          -webkit-text-size-adjust: 100% !important;
        }
        table {
          border-collapse: collapse !important;
          mso-table-lspace: 0pt !important;
          mso-table-rspace: 0pt !important;
        }
        @media screen and (max-width: 600px) {
          .mobile-card {
            width: 100% !important;
            max-width: 100% !important;
            border-radius: 0 !important;
          }
          .mobile-pad {
            padding-left: 20px !important;
            padding-right: 20px !important;
          }
        }
      `}</style>
    </Head>

    <Preview>Got your inquiry, {firstName}. Here is what happens next.</Preview>

    <Body style={s.body}>
      <Container style={s.container} className="mobile-card">

        {/* Cyan top rule */}
        <div style={s.topRule} />

        {/* Header */}
        <Section style={s.header} className="mobile-pad">
          <Row>
            <Column style={{ verticalAlign: "middle" }}>
              <table cellPadding="0" cellSpacing="0" border={0}>
                <tr>
                  <td style={{ verticalAlign: "middle", width: "32px", paddingRight: "10px" }}>
                    <Img
                      src={LOGO_URL}
                      alt="Crux Studios"
                      width={30}
                      height={30}
                      style={{ display: "block", borderRadius: "50%" }}
                    />
                  </td>
                  <td style={{ verticalAlign: "middle" }}>
                    <Text style={s.brandTitle}>Crux Studios</Text>
                  </td>
                </tr>
              </table>
            </Column>
            <Column align="right" style={{ verticalAlign: "middle" }}>
              <Text style={s.headerMeta}>Message Received</Text>
            </Column>
          </Row>
        </Section>

        {/* Dark hero */}
        <Section style={s.hero}>
          <Heading as="h1" style={s.heroH1}>
            Got it, {firstName}.
          </Heading>
          <Text style={s.heroBody}>
            Your message is with us. We read every inquiry personally and you will
            hear back within <span style={{ color: "#fff", fontWeight: 600 }}>24 hours</span> with
            a direct, honest response.
          </Text>
          <Button href={`${SITE_URL}#projects`} style={s.heroCta}>
            See what we've shipped
          </Button>
        </Section>



        {/* Process */}
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
        <Section style={{ padding: "32px 40px 0" }}>
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
          <Row>
            <Column>
              <Text style={s.footerBrand}>Crux Studios</Text>
              <Text style={s.footerSub}>Bangalore, India</Text>
            </Column>
            <Column align="right" style={{ verticalAlign: "top" }}>
              <Link href={SITE_URL} style={s.footerLink}>Website</Link>
              {"  ·  "}
              <Link href={`mailto:${CONTACT_EMAIL}`} style={s.footerLink}>Email us</Link>
            </Column>
          </Row>
          <Text style={s.footerDisclaimer}>
            You're getting this because you submitted a project inquiry at
            cruxstudios.dev. Just reply here to reach our team directly.
          </Text>
        </Section>

        {/* Cyan bottom rule */}
        <Section style={s.bottomRule} />

      </Container>
    </Body>
  </Html>
);

export default ProjectInquiryEmail;

// ─── Styles ───────────────────────────────────────────────────────────────────
const FONT = "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";
const DARK   = "#121417";
const CYAN   = "#00F0FF";
const SLATE  = "#8E99A0";
const MUTED  = "#4D585F";
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
    margin: "0 auto",
    maxWidth: "580px",
    overflow: "hidden",
  },

  // Rules
  topRule: {
    backgroundColor: CYAN,
    height: "3px",
    width: "100%",
  },
  bottomRule: {
    backgroundColor: CYAN,
    height: "3px",
    width: "100%",
  },

  // Header
  header: {
    borderBottom: `1px solid ${BORDER}`,
    padding: "20px 40px",
  },
  logoImg: {
    display: "block",
    borderRadius: "6px",
  },
  brandTitle: {
    color: "#121417",
    fontSize: "15px",
    fontWeight: "700",
    letterSpacing: "-0.2px",
    margin: "0",
    lineHeight: "1",
  },
  headerMeta: {
    color: SLATE,
    fontSize: "11px",
    fontWeight: "600",
    letterSpacing: "1.4px",
    lineHeight: "1",
    margin: "0",
    textTransform: "uppercase",
  },

  // Hero
  hero: {
    backgroundColor: DARK,
    padding: "48px 40px 44px",
  },
  heroH1: {
    color: "#fff",
    fontSize: "28px",
    fontWeight: "700",
    letterSpacing: "-0.4px",
    lineHeight: "1.2",
    margin: "0 0 16px",
  },
  heroBody: {
    color: SLATE,
    fontSize: "15px",
    lineHeight: "1.7",
    margin: "0 0 32px",
  },
  heroCta: {
    backgroundColor: CYAN,
    borderRadius: "100px",
    color: DARK,
    display: "inline-block",
    fontSize: "13px",
    fontWeight: "700",
    padding: "12px 26px",
    textDecoration: "none",
  },

  // Sections
  section: {
    padding: "32px 40px 0",
  },
  overline: {
    color: SLATE,
    fontSize: "10px",
    fontWeight: "700",
    letterSpacing: "1.6px",
    margin: "0 0 12px",
    textTransform: "uppercase",
  },



  // Steps
  stepRow: {
    marginBottom: "20px",
  },
  stepIndex: {
    verticalAlign: "top",
    width: "32px",
    paddingTop: "1px",
  },
  stepNum: {
    backgroundColor: DARK,
    borderRadius: "5px",
    color: CYAN,
    display: "inline-block",
    fontSize: "10px",
    fontWeight: "700",
    margin: "0",
    padding: "3px 7px",
    textAlign: "center",
  },
  stepBody: {
    paddingLeft: "12px",
    verticalAlign: "top",
  },
  stepTitle: {
    color: "#1D1D1D",
    fontSize: "14px",
    fontWeight: "600",
    lineHeight: "1.4",
    margin: "0 0 3px",
  },
  stepDesc: {
    color: MUTED,
    fontSize: "13px",
    lineHeight: "1.65",
    margin: "0",
  },

  // Stats
  statsSection: {
    backgroundColor: DARK,
    borderRadius: "10px",
    margin: "32px 40px 0",
    padding: "20px 0",
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
    fontSize: "24px",
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

  // Footer
  footerRule: {
    borderColor: BORDER,
    margin: "32px 40px 0",
  },
  footer: {
    padding: "24px 40px 32px",
  },
  footerBrand: {
    color: "#1D1D1D",
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
