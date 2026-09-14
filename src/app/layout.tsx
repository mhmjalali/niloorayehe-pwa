import type { Metadata } from "next";
import "@/styles/global.css";
import { RegisterSW } from "./register-sw";

export const metadata: Metadata = {
  title: "Niloo Rayehe",
  description: "Niloo Rayehe web application",
  themeColor: "#ffffff",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Niloo Rayehe",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col">
        <RegisterSW />
        {children}
      </body>
    </html>
  );
}
