import Footer from "../components/Footer";
import { Navigation } from "../components/Navigation";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    template: "%s | Peter Kerins",
  },
  description:
    "Kilkenny based Software Engineer with a passion for building beautiful, functional websites and web applications.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="px-4 sm:px-0">
          <Navigation />
        </div>
        <main className="sm:px-0">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
