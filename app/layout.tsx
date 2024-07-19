import Nav from "@components/Nav";
import "@styles/globals.css";
import { ThemeProvider } from "./themeProvider";
import RootStore from "@store";

export const metadata = {
  title: "Let me retire already",
  description: "Retirement planner",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body className="bg-white dark:bg-gray-800">
        <div className="main" />
        <RootStore>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
              <main className="app justify-center">
                <Nav />
                <div className="w-full flex justify-center">
                  <div className="w-full">{children}</div>
                </div>
              </main>
            </ThemeProvider>
        </RootStore>
      </body>
    </html>
  );
}
