import "./globals.css";
import { ClientLayout } from "./clientLayout";
import { GlobalNavbar } from "@/features/global-navbar/ui";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <ClientLayout>
          <GlobalNavbar />
          <div
            id="contents"
            className="mx-auto w-full max-w-screen-lg px-4 py-6"
          >
            {children}
          </div>
        </ClientLayout>
      </body>
    </html>
  );
}
