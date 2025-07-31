// src/app/layout.jsx

import "./globals.css";
import DashboardLayout from "./components/DashboardLayout";

export const metadata = {
  title: "Mi Portafolio",
  description: "Portafolio profesional de Luis Reyes",
  icons: {
    icon: "lr.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <DashboardLayout>{children}</DashboardLayout>
      </body>
    </html>
  );
}
