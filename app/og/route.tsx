import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = {
  width: 1200,
  height: 630
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          background:
            "linear-gradient(135deg, rgba(239,246,255,1) 0%, rgba(255,255,255,1) 45%, rgba(248,250,252,1) 100%)",
          color: "#0F172A",
          padding: "64px",
          fontFamily: "Inter, sans-serif"
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            border: "1px solid #E2E8F0",
            borderRadius: "32px",
            padding: "48px",
            background: "#FFFFFF",
            boxShadow:
              "0 1px 3px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.04)"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <div
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "999px",
                background: "#2563EB"
              }}
            />
            <div style={{ fontSize: "34px", fontWeight: 700 }}>Zaprill</div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", gap: "36px" }}>
            <div style={{ display: "flex", flexDirection: "column", maxWidth: "660px" }}>
              <div
                style={{
                  display: "inline-flex",
                  alignSelf: "flex-start",
                  borderRadius: "999px",
                  background: "#EFF6FF",
                  color: "#2563EB",
                  padding: "10px 18px",
                  fontSize: "20px",
                  fontWeight: 600
                }}
              >
                AI-Powered Career Platform
              </div>
              <div
                style={{
                  marginTop: "24px",
                  fontSize: "72px",
                  lineHeight: 1.05,
                  fontWeight: 700
                }}
              >
                Know Your Worth. Get the Job.
              </div>
              <div
                style={{
                  marginTop: "24px",
                  color: "#475569",
                  fontSize: "28px",
                  lineHeight: 1.4
                }}
              >
                Salary insight, smart job matches, and skill-gap clarity from one
                resume upload.
              </div>
            </div>
            <div
              style={{
                width: "300px",
                borderRadius: "24px",
                border: "1px solid #E2E8F0",
                padding: "28px",
                background: "#FFFFFF"
              }}
            >
              <div style={{ fontSize: "24px", fontWeight: 700 }}>Your Potential</div>
              <div
                style={{
                  marginTop: "16px",
                  fontSize: "56px",
                  fontWeight: 700,
                  color: "#2563EB"
                }}
              >
                ₹11.5L
              </div>
              <div style={{ marginTop: "14px", color: "#475569", fontSize: "24px" }}>
                Compare salary, discover better-fit roles, and see what skills move
                you up faster.
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size
    }
  );
}
