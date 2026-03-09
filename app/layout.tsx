import type { Metadata } from "next";
import { Fredoka, Playfair_Display, Nunito } from "next/font/google";
import "./globals.css";

const fredoka = Fredoka({
  weight: ["400", "600"],
  subsets: ["latin"],
  variable: "--font-fredoka",
});

const playfairDisplay = Playfair_Display({
  weight: ["400", "600", "700", "800"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-playfair",
});

const nunito = Nunito({
  weight: ["400", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-nunito",
});

export const metadata: Metadata = {
  title: "PizzaDAO Music Hub 🍕🎵",
  description:
    "El espacio oficial de la música de PizzaDAO. Escucha las canciones de la comunidad, participa en el primer concurso en español y vota por tus favoritas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${fredoka.variable} ${playfairDisplay.variable} ${nunito.variable} font-body antialiased bg-pizza-bg text-pizza-body overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
