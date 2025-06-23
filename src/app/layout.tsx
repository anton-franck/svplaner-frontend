
import { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/navigations/header/header";
import { Reloader } from "@/components/reloader";
import { getCachedRepresentation } from "@/lib/vertretung.service";
import Footer from "@/components/navigations/footer";

export async function generateMetadata(): Promise<Metadata> {

  const meta_title = process.env.SITE_NAME || "";
  const meta_description = process.env.SITE_DESCRIPTION || "";
  return {
    title: meta_title,
    description: meta_description,
  }
}

export default async function RootLayout({

  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const representation = await getCachedRepresentation();
  return (
    <html lang="en" className="scroll-smooth">
      <head>
      </head>
      <body >
        <Header />
        <Reloader stand={representation.stand} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
