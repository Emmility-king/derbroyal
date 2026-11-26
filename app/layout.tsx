import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { StoreProvider } from "./context/store-context";
import CartDrawer from "./components/cart-drawer";
import QuickViewModal from "./components/quick-view-modal";
import ToastNotification from "./components/toast-notification";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DERBROYAL LIMITED | Hair & Beauty in Benin City, Nigeria",
  description:
    "Shop luxury hair and book manicure, pedicure, and hair installation services in Benin City, Edo State, Nigeria.",
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/derbroyal-logo.png", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <StoreProvider>
          {children}
          <CartDrawer />
          <QuickViewModal />
          <ToastNotification />
        </StoreProvider>
      </body>
    </html>
  );
}
