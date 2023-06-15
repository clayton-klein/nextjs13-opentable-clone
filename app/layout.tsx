import { Metadata } from "next";
import NavBar from "./components/NavBar";
import "./globals.css";

export const metadata: Metadata = {
  title: "OpenTable",

  // TODO: check why favicon is not working
  icons: {
    icon: "public/favicon.ico",
    shortcut: "public/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <div className="w-screen min-h-screen bg-gray-100">
          <main className="m-auto bg-white max-w-screen-2xl">
            <NavBar />
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
