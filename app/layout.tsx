import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Hangover 4.0",
  description: "Bachelor party — The Hangover 4.0",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
