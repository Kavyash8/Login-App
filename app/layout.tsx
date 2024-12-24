// app/layout.js
import '../app/globals.css';
export const metadata = {
  title: "My Next.js App",
  description: "A simple Next.js app",
};

export default function RootLayout({ children }) {
  return (
      <html lang="en">
          <body>{children}</body>
      </html>
  );
}