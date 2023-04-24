import React from "react";
import { Metadata } from "next";
// Metadata

export const metadata: Metadata = {
  title: "Ali Karagöz | Results Summary ",
  description:
    "Bu zamana kadar yapmış olduğum bütün projeleri burada paylaşıyorum.",
};

export default function ResultsSummaryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
