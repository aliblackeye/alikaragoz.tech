// Import Next
import Head from "next/head";

// Metadata
export const metadata = {
  title: "Ali Karagöz | Projects",
  description:
    "Bu zamana kadar yapmış olduğum bütün projeleri burada paylaşıyorum.",
};

// Import Components
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Import Styles
import "@/assets/styles/base.scss";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="utf-8" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={metadata.description} />
        <title>{metadata.title}</title>
      </Head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
