import Nav from "@components/Nav";
import RootStore from "@store";
import "@styles/globals.css";
import { ThemeProvider } from "./themeProvider";

export const metadata = {
  title: "LMRA",
  description: "Get retired",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-gray-800">
        <div className="main" />
        <RootStore>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <main className="app flex-column ">
              <Nav />
              {children}
            </main>
          </ThemeProvider>
        </RootStore>
      </body>
    </html>
  );
}
