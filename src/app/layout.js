import "./globals.css";
import { Fira_Code } from "next/font/google";

// Components
import Header from "@/src/app/components/header";
import Footer from "@/src/app/components/footer";

const inter = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
