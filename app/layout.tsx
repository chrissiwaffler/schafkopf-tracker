import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import { cn } from "@/lib/utils";
import { fontSans } from "@/lib/font";
import { SiteHeader } from "@/components/site-header";

export const metadata = {
  metadataBase: new URL("https://schafkopf-tracker.vercel.app"),
  title: "Schafkopf Tracker",
  description:
    "A simple Schafkopf Tracker to tracker games with the points of the individual players",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "bg-background min-h-screen font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="relative flex flex-col min-h-screen">
            <SiteHeader />
            <div className="flex-1">{children}</div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
