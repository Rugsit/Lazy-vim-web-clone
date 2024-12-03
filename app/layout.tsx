import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import Footer from "@/components/footer";


export const metadata: Metadata = {
  title: "Lazy vim web clone",
  description: "Just nextjs web clone for practice",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-noto pt-[65px] z-0 ">
        <Navbar /> 
        <div className="flex">
          <Sidebar />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
