import { ImageResponse } from "next/og";

// Matches the navbar brand mark (.brand .mark): a rounded tile with the
// cyan -> teal gradient and a dark, bold "M".
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(90deg, #00F5FF 0%, #00D4AA 100%)",
          color: "#04121a",
          fontSize: 116,
          fontWeight: 700,
        }}
      >
        M
      </div>
    ),
    { ...size },
  );
}
