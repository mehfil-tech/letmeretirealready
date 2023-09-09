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
            <main className="app justify-center">
              <Nav />
              <div className="w-full flex justify-center">
                <div className="w-full sm:w-3/4">{children}</div>
              </div>
            </main>
          </ThemeProvider>
        </RootStore>
      </body>
    </html>
  );
}
