import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#10141C",
          color: "#6FD6E8",
          fontSize: 18,
          fontWeight: 700,
          borderRadius: 6,
        }}
      >
        VP
      </div>
    ),
    { ...size }
  );
}
