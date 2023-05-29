import { Metadata } from "next";
import { Poppins } from "next/font/google";

// React Toastify
import "react-toastify/dist/ReactToastify.css";

export const metadata: Metadata = {
  title: "Stake: Crypto & Sports Betting - BTC Casion Online",
  description: "Stake is the best crypto casino & sports betting site.",
};

export default function CaptchaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
