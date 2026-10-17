import { ImageResponse } from "next/og";

// Link preview image for WhatsApp, LinkedIn, Slack, X and Google.
export const alt = "Saasible: AI Growth Agency for Consumer Brands";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          backgroundImage: "linear-gradient(120deg, #FFE45C 0%, #FFB547 40%, #FF7A3D 70%, #E0300F 100%)",
          color: "#2A0E06",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", fontSize: 40, fontWeight: 800 }}>
          <span style={{ color: "#A8120C" }}>Saas</span>
          <span>ible</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 76, fontWeight: 800, lineHeight: 1.05, letterSpacing: -2, maxWidth: 980 }}>
            AI agents for the work. Human experience for the strategy.
          </div>
          <div style={{ fontSize: 32, marginTop: 28, maxWidth: 940, lineHeight: 1.3 }}>
            CRM lifecycle, lead generation and AI agents for consumer brands worldwide.
          </div>
        </div>

        <div style={{ display: "flex", fontSize: 26, fontWeight: 700, color: "#FFF8DF" }}>
          saasible.in · WhatsApp · SMS · RCS · Email · Voice AI
        </div>
      </div>
    ),
    size
  );
}
