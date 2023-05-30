import { Metadata } from "next";
import { Poppins } from "next/font/google";

// React Toastify
import "react-toastify/dist/ReactToastify.css";

export const metadata: Metadata = {
  title: "Black Casino: Crypto & Sports Betting - BTC Casino Online",
  description: "Black Casino is the best crypto casino & sports betting site.",
};

export default function CaptchaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
