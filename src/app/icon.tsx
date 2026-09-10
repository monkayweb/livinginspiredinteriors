import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
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
          background: "#0b0b0b",
          color: "#f2efe9",
          fontSize: 34,
          fontFamily: "Times New Roman, serif",
          letterSpacing: "-0.04em",
        }}
      >
        LI
      </div>
    ),
    size
  );
}
