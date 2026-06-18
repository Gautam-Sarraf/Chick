import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Chickaros West Bromwich | Modern Dining & Mocktails",
  description: "Experience the unique Hollywood-style entrance, warm historic brick ambience, and comforting dishes at Chickaros West Bromwich. Dine-in, takeaway, and delivery available.",
  keywords: "Chickaros, West Bromwich, Chickaros West Brom, Halal restaurant West Bromwich, Mocktails, Kebabish, Burgers West Bromwich, Astle Park",
  authors: [{ name: "Chickaros" }],
  openGraph: {
    title: "Chickaros West Bromwich | Modern Dining & Mocktails",
    description: "Experience the unique Hollywood-style entrance, warm historic brick ambience, and comforting dishes at Chickaros West Bromwich.",
    url: "https://chickaroswestbromwich.co.uk",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${plusJakarta.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
