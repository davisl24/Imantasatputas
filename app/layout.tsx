import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Imantas — atpūta pie jūras Salacgrīvā | dizaina demo",
  description: "Dizaina priekšskatījums saimniecībai Imantas — vasaras dzīvokļi, pirtsmāja un bišu pieredze Salacgrīvā.",
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="lv">
      <body>{children}</body>
    </html>
  );
}
