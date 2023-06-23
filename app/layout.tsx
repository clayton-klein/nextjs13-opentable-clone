import { Metadata } from "next";
import NavBar from "./components/NavBar";
import "./globals.css";
import AuthContext from "./context/AuthContext";

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
          {/**
           * now all the components (including server components) within our app
           * have access to the authState and setAuthState defined in this context
           * component.
           *
           * this context component is a client component and remember that server
           * components can have client components, but client components can't have
           * server components UNLESS they are passed as children and that is what's
           * happening here.
           *
           * any time we want to access state/data from the context we must use
           * client components, we can't do it with server components, because they
           * have no ideia about what's happening in the client.
           */}
          <AuthContext>
            <main className="m-auto bg-white max-w-screen-2xl">
              <NavBar />
              {children}
            </main>
          </AuthContext>
        </div>
      </body>
    </html>
  );
}
