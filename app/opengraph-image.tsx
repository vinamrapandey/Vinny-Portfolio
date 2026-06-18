import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#10141C",
          color: "#EDEEF0",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 28, color: "#8B93A1", letterSpacing: 4 }}>
          VINAMRA PANDEY
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 64,
            fontWeight: 700,
            color: "#EDEEF0",
          }}
        >
          Four products.&nbsp;
          <span style={{ color: "#6FD6E8" }}>One person.</span>&nbsp;Every
          layer.
        </div>
      </div>
    ),
    { ...size }
  );
}
