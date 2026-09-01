import {
  Body,
  Button,
  Container,
  Column,
  Head,
  Heading,
  Hr,
  Html,
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
        body, table, td, p, a, li, blockquote {
          -webkit-text-size-adjust: 100% !important;
          -ms-text-size-adjust: 100% !important;
        }
        body {
          margin: 0 !important;
          padding: 0 !important;
          width: 100% !important;
        }

        a.cta-btn-link, a.cta-btn-link:visited, a.cta-btn-link:hover, .cta-btn-text {
          color: #000000 !important;
          -webkit-text-fill-color: #000000 !important;
        }
        @media (prefers-color-scheme: dark) {
          a.cta-btn-link, a.cta-btn-link:visited, a.cta-btn-link:hover, .cta-btn-text {
            color: #000000 !important;
            -webkit-text-fill-color: #000000 !important;
          }
        }
        [data-ogsc] a.cta-btn-link, [data-ogsc] .cta-btn-text {
          color: #000000 !important;
          -webkit-text-fill-color: #000000 !important;
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
          .mobile-hero-h1 {
            font-size: 26px !important;
          }
          .mobile-hero-body {
            font-size: 16px !important;
            line-height: 1.7 !important;
          }
        }
      `}</style>
    </Head>

    <Preview>Got your inquiry, {firstName}. Here is what happens next.</Preview>

    <Body style={s.body} className="body">
      <Container style={s.container} className="email-container">

        {/* Branded Header with 100% Full-Width Cyan Accent Bottom Border */}
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
                <Text style={s.headerMeta}>Message Received</Text>
              </td>
            </tr>
          </table>
        </Section>

        {/* Dark Hero Section */}
        <Section style={s.hero} className="mobile-pad">
          <Heading as="h1" style={s.heroH1} className="mobile-hero-h1">
            Got it, {firstName}.
          </Heading>
          <Text style={s.heroBody} className="mobile-hero-body">
            Your message is with us. We read every inquiry personally and you will
            hear back within <span style={{ color: "#00F0FF", fontWeight: 600 }}>24 hours</span> with
            a direct, honest response.
          </Text>
          <Button
            href={`${SITE_URL}#projects`}
            style={s.heroCta}
            className="cta-btn-link"
          >
            <span
              style={{
                color: "#000000",
                display: "inline-block",
                fontWeight: 700,
                textDecoration: "none",
              }}
              className="cta-btn-text"
            >
              See what we&apos;ve shipped
            </span>
          </Button>
        </Section>

        {/* Process Section */}
        <Section style={s.section} className="mobile-pad">
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
        <Section style={{ padding: "24px 24px 0" }} className="mobile-pad">
          <table
            width="100%"
            cellPadding="0"
            cellSpacing="0"
            border={0}
            style={{
              backgroundColor: DARK,
              borderRadius: "10px",
              padding: "18px 0",
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
                <Link href={`mailto:${CONTACT_EMAIL}`} style={s.footerLink}>
                  {CONTACT_EMAIL}
                </Link>
                <br />
                <Link href={SITE_URL} style={{ ...s.footerLink, display: "inline-block", marginTop: "4px" }}>
                  🌐 cruxstudios.dev
                </Link>
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
    padding: "24px 24px 20px",
    backgroundColor: "#ffffff",
    borderBottom: `3px solid ${CYAN}`,
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
  hero: {
    backgroundColor: DARK,
    padding: "32px 24px 28px",
  },
  heroH1: {
    color: "#fff",
    fontSize: "28px",
    fontWeight: "700",
    letterSpacing: "-0.5px",
    lineHeight: "1.25",
    margin: "0 0 14px",
  },
  heroBody: {
    color: "#C5D0D6",
    fontSize: "17px",
    lineHeight: "1.7",
    margin: "0 0 22px",
  },
  heroCta: {
    backgroundColor: "#00F0FF",
    borderRadius: "100px",
    color: "#000000",
    display: "inline-block",
    fontSize: "15px",
    fontWeight: "700",
    padding: "14px 28px",
    textDecoration: "none",
    textAlign: "center" as const,
  },
  section: {
    padding: "28px 24px 0",
  },
  overline: {
    color: SLATE,
    fontSize: "11px",
    fontWeight: "700",
    letterSpacing: "1.4px",
    margin: "0 0 16px",
    textTransform: "uppercase",
  },
  stepRow: {
    marginBottom: "18px",
  },
  stepIndex: {
    verticalAlign: "top",
    width: "30px",
    paddingTop: "2px",
  },
  stepNum: {
    backgroundColor: DARK,
    borderRadius: "5px",
    color: CYAN,
    display: "inline-block",
    fontSize: "12px",
    fontWeight: "700",
    margin: "0",
    padding: "4px 7px",
    textAlign: "center",
  },
  stepBody: {
    paddingLeft: "12px",
    verticalAlign: "top",
  },
  stepTitle: {
    color: DARK,
    fontSize: "16px",
    fontWeight: "600",
    lineHeight: "1.4",
    margin: "0 0 3px",
  },
  stepDesc: {
    color: MUTED,
    fontSize: "14px",
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
    fontSize: "24px",
    fontWeight: "700",
    letterSpacing: "-0.3px",
    margin: "0 0 3px",
    lineHeight: "1.1",
  },
  statLabel: {
    color: "#8E99A0",
    fontSize: "12px",
    fontWeight: "500",
    margin: "0",
    lineHeight: "1.3",
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
