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
        <meta name="color-scheme" content="light dark" />
        <meta name="supported-color-schemes" content="light dark" />
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
          body {
            margin: 0 !important;
            padding: 0 !important;
            -webkit-text-size-adjust: 100% !important;
          }
          @media only screen and (max-width: 600px) {
            .mobile-outer {
              padding: 12px 8px !important;
            }
            .mobile-card {
              width: 100% !important;
              max-width: 100% !important;
              border-radius: 8px !important;
            }
            .mobile-pad {
              padding-left: 16px !important;
              padding-right: 16px !important;
            }
            .mobile-h1 {
              font-size: 19px !important;
              margin-bottom: 14px !important;
            }
            .mobile-text {
              font-size: 14px !important;
              line-height: 1.6 !important;
            }
          }
        `}</style>
      </Head>

      <Preview>{subjectLine}</Preview>

      <Body style={s.body}>
        <table
          width="100%"
          cellPadding="0"
          cellSpacing="0"
          border={0}
          className="mobile-outer"
          style={{ width: "100%", padding: "30px 10px" }}
        >
          <tr>
            <td align="center" style={{ verticalAlign: "top" }}>
              <Container style={s.container} className="mobile-card">

                {/* Header */}
                <Section style={s.header} className="mobile-pad">
                  <table
                    width="100%"
                    cellPadding="0"
                    cellSpacing="0"
                    border={0}
                    style={{ width: "100%", tableLayout: "auto" }}
                  >
                    <tr>
                      <td align="left" style={{ verticalAlign: "middle" }}>
                        <table cellPadding="0" cellSpacing="0" border={0}>
                          <tr>
                            <td
                              style={{
                                verticalAlign: "middle",
                                width: "32px",
                                paddingRight: "10px",
                              }}
                            >
                              <div
                                style={{
                                  width: "28px",
                                  height: "28px",
                                  borderRadius: "50%",
                                  backgroundColor: "#0d0f11",
                                  display: "inline-block",
                                  overflow: "hidden",
                                  lineHeight: 0,
                                }}
                              >
                                <Img
                                  src={LOGO_URL}
                                  alt="Crux Studios"
                                  width={28}
                                  height={28}
                                  style={{
                                    display: "block",
                                    borderRadius: "50%",
                                    backgroundColor: "#0d0f11",
                                    border: "0",
                                  }}
                                />
                              </div>
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

                {/* Body content */}
                <Section style={s.mainSection} className="mobile-pad">
                  <Heading as="h1" style={s.greetingHeading} className="mobile-h1">
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
                      <td
                        style={{
                          width: "40px",
                          verticalAlign: "middle",
                          paddingRight: "14px",
                        }}
                      >
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
            </td>
          </tr>
        </table>
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
    backgroundColor: "#EDF1F4",
    fontFamily: FONT,
    margin: "0",
    padding: "0",
    width: "100%",
  },
  container: {
    backgroundColor: "#ffffff",
    borderRadius: "14px",
    borderTop: `3px solid ${CYAN}`,
    borderBottom: `3px solid ${CYAN}`,
    borderLeft: `1px solid ${BORDER}`,
    borderRight: `1px solid ${BORDER}`,
    margin: "0 auto",
    maxWidth: "560px",
    width: "100%",
    overflow: "hidden",
  },
  header: {
    borderBottom: `1px solid ${BORDER}`,
    padding: "16px 28px",
  },
  brandTitle: {
    color: DARK,
    fontSize: "14px",
    fontWeight: "700",
    letterSpacing: "-0.2px",
    margin: "0",
    lineHeight: "1",
  },
  headerMeta: {
    color: "#8E99A0",
    fontSize: "10px",
    fontWeight: "600",
    letterSpacing: "0.8px",
    lineHeight: "1",
    margin: "0",
    textTransform: "uppercase",
    whiteSpace: "nowrap",
  },
  mainSection: {
    padding: "28px 28px 8px",
  },
  greetingHeading: {
    color: DARK,
    fontSize: "20px",
    fontWeight: "700",
    letterSpacing: "-0.3px",
    lineHeight: "1.3",
    margin: "0 0 16px",
  },
  paragraphText: {
    color: "#2C3437",
    fontSize: "14.5px",
    lineHeight: "1.65",
    margin: "0 0 16px",
  },
  signatureSection: {
    padding: "12px 28px 0",
  },
  signatureDivider: {
    borderColor: BORDER,
    margin: "0 0 20px",
  },
  avatarBadgeTable: {
    width: "38px",
    height: "38px",
    borderRadius: "19px",
    backgroundColor: DARK,
    borderCollapse: "separate" as const,
  },
  avatarBadgeTd: {
    width: "38px",
    height: "38px",
    textAlign: "center" as const,
    verticalAlign: "middle" as const,
    color: CYAN,
    fontSize: "12px",
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
    margin: "0",
  },
  footerRule: {
    borderColor: BORDER,
    margin: "24px 28px 0",
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
