import { ImageResponse } from "next/og";

export const runtime = "edge";

const size = {
  width: 1200,
  height: 630,
};

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          background: "#f4f5f2",
          color: "#161a18",
          padding: "48px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "100%",
            border: "1px solid #cfd5d0",
            background: "#fafbf9",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              width: "64%",
              padding: "46px 52px",
              borderRight: "1px solid #cfd5d0",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
                fontSize: "30px",
                fontWeight: 700,
                letterSpacing: "-1px",
              }}
            >
              <span
                style={{
                  display: "flex",
                  width: "28px",
                  height: "4px",
                  background: "#b9442d",
                }}
              />
              Zaprill
            </div>

            <div style={{ display: "flex", flexDirection: "column" }}>
              <div
                style={{
                  display: "flex",
                  fontFamily: "monospace",
                  color: "#59615d",
                  fontSize: "16px",
                  fontWeight: 600,
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                }}
              >
                Career intelligence from one resume
              </div>
              <div
                style={{
                  display: "flex",
                  marginTop: "22px",
                  maxWidth: "650px",
                  fontSize: "66px",
                  lineHeight: 1.02,
                  fontWeight: 700,
                  letterSpacing: "-3.8px",
                }}
              >
                Know what your experience is worth.
              </div>
              <div
                style={{
                  display: "flex",
                  marginTop: "24px",
                  maxWidth: "620px",
                  color: "#59615d",
                  fontSize: "24px",
                  lineHeight: 1.35,
                }}
              >
                Salary benchmarks, explainable job matches, skill gaps, and ATS
                feedback.
              </div>
            </div>

            <div
              style={{
                display: "flex",
                fontFamily: "monospace",
                color: "#59615d",
                fontSize: "14px",
                letterSpacing: "1px",
                textTransform: "uppercase",
              }}
            >
              zaprill.com / Career brief
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "36%",
              background: "#161a18",
              color: "#f4f5f2",
              padding: "46px 40px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                borderBottom: "1px solid #3a413c",
                paddingBottom: "18px",
                fontFamily: "monospace",
                color: "#a8b0aa",
                fontSize: "14px",
                letterSpacing: "1.5px",
                textTransform: "uppercase",
              }}
            >
              <span>Career brief</span>
              <span>Example</span>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: "34px",
              }}
            >
              <div style={{ display: "flex", color: "#a8b0aa", fontSize: "17px" }}>
                Estimated market range
              </div>
              <div
                style={{
                  display: "flex",
                  marginTop: "10px",
                  fontSize: "43px",
                  fontWeight: 700,
                  letterSpacing: "-2px",
                }}
              >
                ₹18.4L–₹24.5L
              </div>
              <div
                style={{
                  display: "flex",
                  marginTop: "12px",
                  color: "#e16b50",
                  fontFamily: "monospace",
                  fontSize: "17px",
                  fontWeight: 700,
                  textTransform: "uppercase",
                }}
              >
                Above market median
              </div>
            </div>

            <div
              style={{
                display: "flex",
                height: "8px",
                marginTop: "38px",
                background: "#343a35",
              }}
            >
              <div
                style={{
                  display: "flex",
                  width: "74%",
                  marginLeft: "18%",
                  background: "#f4f5f2",
                }}
              />
              <div
                style={{
                  display: "flex",
                  width: "3px",
                  height: "22px",
                  marginTop: "-7px",
                  background: "#e16b50",
                }}
              />
            </div>

            <div
              style={{
                display: "flex",
                gap: "26px",
                marginTop: "38px",
                borderTop: "1px solid #3a413c",
                borderBottom: "1px solid #3a413c",
                padding: "22px 0",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span style={{ color: "#a8b0aa", fontSize: "14px" }}>Role matches</span>
                <span style={{ marginTop: "6px", fontSize: "28px", fontWeight: 700 }}>38</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span style={{ color: "#a8b0aa", fontSize: "14px" }}>Best fit</span>
                <span style={{ marginTop: "6px", fontSize: "28px", fontWeight: 700 }}>92%</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span style={{ color: "#a8b0aa", fontSize: "14px" }}>ATS flags</span>
                <span style={{ marginTop: "6px", fontSize: "28px", fontWeight: 700 }}>03</span>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                marginTop: "auto",
                borderLeft: "3px solid #e16b50",
                paddingLeft: "15px",
                color: "#d8ddd8",
                fontSize: "16px",
                lineHeight: 1.4,
              }}
            >
              Your next move, backed by evidence.
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
